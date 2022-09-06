<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>Converter</h2>
        <form v-on:submit="convert">
          <div class="form-floating">

            <select id="asset_id_base" class="form-select" aria-label="Default select example">
              <option selected>---</option>
              <option v-for="value in response_all_assets.data_all"
                      :value="value.asset_id">{{ value.asset_id }} - {{ value.name }}
              </option>
            </select>
            <label for="floatingSelect">Convert from:</label>
          </div>

          <div class="form-floating">
            <select id="asset_id_quote" class="form-select" aria-label="Default select example">
              <option selected>---</option>
              <option v-for="value in response_all_assets.data_all"
                      :value="value.asset_id">{{ value.asset_id }} - {{ value.name }}
              </option>
            </select>
            <label for="floatingSelect">Convert to:</label>
          </div>
          <input type="submit" value="convert"/>
        </form>
        {{ response_data.data.rate }}
      </div>
    </div>
  </div>
</template>


<script>


import myJson from '../assets/allAssets.json';
import axios from "axios";
import router from "../router/pages";

export default {
  name: "Converter",

  data() {
    return {
      response_data: {
        data: []
      },
      response_all_assets: {
        data_all: []
      },
      token: '2DC86A86-5F6D-469A-B861-7F67F6CBF48D',
      token2: 'DFED3223-7BB6-4501-B1FB-62CB2D5DA8DD',

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
        ['asset_id_quote', asset_id_quote],
        ['token', this.token],
        ['token2', this.token2]
      ]);

      axios.get('/api/convert', {params}).then((response) => {
        this.response_data.data = response.data
      })
    },


    getAllAssets() {
      this.response_all_assets.data_all = myJson
    },

    validateSelection(selection) {
      this.selected = selection;
      console.log(selection.asset_id + " has been selected");
    },

    getDropdownValues(keyword) {
      console.log("You could refresh options by querying the API with " + keyword);
    }

  },
  mounted() {
    this.getAllAssets()
  }
}
</script>
