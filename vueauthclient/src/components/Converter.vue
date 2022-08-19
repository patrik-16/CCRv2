<template>
  <div>
    <h2>Converter</h2>
    <form v-on:submit="convert">
      <input type="text" name="asset_id_base"/><br>
      <input type="text" name="asset_id_quote"/><br>
      <input type="submit" value="convert"/>
    </form>
    {{ response_data.data.rate }}
  </div>
</template>


<script>
import axios from "axios"

export default {
  name: "Converter",

  data() {
    return {
      response_data: {
        data: []
      },
      token: '2DC86A86-5F6D-469A-B861-7F67F6CBF48D'
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

      const url = "https://rest.coinapi.io/v1/exchangerate/" + asset_id_base + "/" + asset_id_quote

      axios.get(url, {
        headers: {
          'X-CoinAPI-Key': this.token
        }
      })
        .then((res) => {
          console.log(res.data)
          this.response_data.data = res.data

        })
        .catch((error) => {
          console.error(error)
        })
    },


    getAllAssets() {
      const url = "https://rest.coinapi.io/v1/assets"

    }
  },
  mounted() {
    this.getAllAssets()
  }
}
</script>
