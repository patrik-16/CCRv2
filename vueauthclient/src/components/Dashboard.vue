<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2>Dashboard</h2>
        <p>Name: {{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import router from "../router/pages"
export default {
  name: "Login",
  data() {
    return {
      user: {
        name: '',
        email: ''
  }
  }
  },
  methods: {
    getUserData: function() {
      let self = this
      axios.get("/api/user")
        .then((response) => {
          console.log(response)
          self.$set(this, "user", response.data.user)
        })
        .catch((errors) => {
          console.log(errors)
          router.push("/")
        })
    }
  },
  mounted() {
    this.getUserData()
  }
}
</script>
