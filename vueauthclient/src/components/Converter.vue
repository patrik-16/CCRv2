<!-- Converter Page -->
<template>
  <div class='container'>
    <div class='row'>
      <div class='col-md-6'>
        <h2>Converter</h2>
<!-- Form consists of 2 dropdown selects and a button -->
        <form v-on:submit='convert'>
<!-- First dropdown -->
          <div class='my-3 form-floating'>
            <select id='asset_id_base' class='form-select' aria-label='Default select example'>
              <option selected>---</option>
<!-- For each loop to list all currencies in dropdowns -->
              <option v-for='value in response_all_assets.data_all'
                      :value="value.asset_id">{{ value.asset_id }} - {{ value.name }}
              </option>
            </select>
            <label for='floatingSelect'>Convert from:</label>
          </div>
<!-- Second dropdown -->
          <div class='my-3 form-floating'>
            <select id='asset_id_quote' class='form-select' aria-label='Default select example'>
              <option selected>---</option>
<!-- For each loop to list all currencies in dropdowns -->
              <option v-for='value in response_all_assets.data_all'
                      :value='value.asset_id'>{{ value.asset_id }} - {{ value.name }}
              </option>
            </select>
            <label for='floatingSelect'>Convert to:</label>
          </div>
          <div class='text-center'>
<!-- Submit button (our convert button), on-click: form starts convert process -->
            <button class='btn btn-secondary' type='submit'>Convert</button>
          </div>
        </form>
<!-- Placeholder: if the result is not a number(NaN), show " " -->
        <h2 class='my-3 text-center' v-if='reformat(parseFloat(response_data.data.rate)) === "NaN"'></h2>
<!-- Result of conversion(rate), only shown if there is a number to display -->
        <h2 class='my-3 text-center' v-else> {{ reformat(parseFloat(response_data.data.rate)) }}
          {{ response_data.data.asset_id_quote }}</h2>
        <h2 v-if='isError !== false'>{{isError}}</h2>
      </div>
<!-- search history table of recent rates -->
      <div class='col-md-6'>
        <h2>History</h2>
        <table class='table'>
          <thead>
          <tr>
            <th scope='col'>Time</th>
            <th scope='col'>From</th>
            <th scope='col'>Rate</th>
            <th scope='col'>To</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for='history in history_data.data'>
            <th>{{ reformat(history.time, true) }}</th>
            <td>{{ history.asset_id_base }}</td>
            <td>{{ reformat(parseFloat(history.rate)) }}</td>
            <td>{{ history.asset_id_quote }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import myJson from '../assets/allAssets.json';
import axios from 'axios';

export default {
  name: 'Converter',
// data storage for converter
  data() {
    return {
      isError: false,
      //data to be displayed in history table
      history_data: {
        data: []
      },
      //data we receive when requesting rates
      response_data: {
        data: []
      },
      //list of all assets from coinapi
      response_all_assets: {
        data_all: []
      },
      selected: {asset_id: null, name: null}
    }
  },
  methods: {
    /**
     *
     * @param e = element
     * @returns Array this.response_data.data (data response from API request)
     */
    async convert(e) {
      e.preventDefault()
      let asset_id_base = e.target.elements.asset_id_base.value
      let asset_id_quote = e.target.elements.asset_id_quote.value
      //URL parameter
      const params = new URLSearchParams([
        ['asset_id_base', asset_id_base],
        ['asset_id_quote', asset_id_quote]
      ]);

      axios.get('/api/convert', {params}).then((response) => {
        console.log(response)
          //fill out data array with data from response
          this.response_data.data = response.data
          this.history_data.data.push(response.data)
      })
    },
    //make the numbers look nicer (rate/timestamp)
    reformat(input, time = false) {
      //when true, converts timestamp
      if (time) {
        return new Date(input).toISOString().slice(8, 10) + '-' + new Date(input).toISOString().slice(5, 7) + '-' +
          new Date(input).toISOString().slice(0, 4) + ' ' + new Date(input).toISOString().slice(11, 19)
      } else {
        //otherwise only convert rate
        if (input < 1) {
          return (Math.round(input * 1000000) / 1000000).toFixed(6);
        } else {
          return (Math.round(input * 100) / 100).toFixed(2);
        }
      }
    },
    //imports list of assets from Json file (for dropdown list)
    getAllAssets() {
      this.response_all_assets.data_all = myJson
    },
  },
  //when page is loaded
  mounted() {
    this.getAllAssets()
  }
}
</script>
