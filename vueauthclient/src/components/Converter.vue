<template>
  <div class='container'>
    <div class='row'>
      <div class='col-md-6'>
        <h2>Converter</h2>
        <!--         -->
        <form v-on:submit='convert'>
          <div class='my-3 form-floating'>
            <select id='asset_id_base' class='form-select' aria-label='Default select example'>
              <option selected>---</option>
              <option v-for='value in response_all_assets.data_all'
                      :value="value.asset_id">{{ value.asset_id }} - {{ value.name }}
              </option>
            </select>
            <label for='floatingSelect'>Convert from:</label>
          </div>
          <div class='my-3 form-floating'>
            <select id='asset_id_quote' class='form-select' aria-label='Default select example'>
              <option selected>---</option>
              <option v-for='value in response_all_assets.data_all'
                      :value='value.asset_id'>{{ value.asset_id }} - {{ value.name }}
              </option>
            </select>
            <label for='floatingSelect'>Convert to:</label>
          </div>
          <div class='text-center'>
            <button class='btn btn-secondary' type='submit'>Convert</button>
          </div>
        </form>
        <h2 class='my-3 text-center'> {{ reformat(parseFloat(response_data.data.rate)) }}
          {{ response_data.data.asset_id_quote }}</h2>
        <h2 v-if='isError !== false'>{{isError}}</h2>
      </div>
      <div class='col-md-6'>
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

  data() {
    return {
      isError: false,
      history_data: {
        data: []
      },
      response_data: {
        data: []
      },
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

      const params = new URLSearchParams([
        ['asset_id_base', asset_id_base],
        ['asset_id_quote', asset_id_quote]
      ]);

      axios.get('/api/convert', {params}).then((response) => {
        console.log(response)
          this.response_data.data = response.data
          this.history_data.data.push(response.data)
      })
    },
    reformat(input, time = false) {
      if (time) {
        return new Date(input).toISOString().slice(8, 10) + '-' + new Date(input).toISOString().slice(5, 7) + '-' +
          new Date(input).toISOString().slice(0, 4) + ' ' + new Date(input).toISOString().slice(11, 19)
      } else {
        if (input < 1) {
          return (Math.round(input * 1000000) / 1000000).toFixed(6);
        } else {
          return (Math.round(input * 100) / 100).toFixed(2);
        }
      }
    },
    getAllAssets() {
      this.response_all_assets.data_all = myJson
    },
  },
  mounted() {
    this.getAllAssets()
  }
}
</script>
