<template>
  <div>
    <header>
      <div class="px-3 py-2 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="/" class="nav-link text-secondary text-center">
                  <i class="bi bi-house display-6"></i>
                  <p>Home</p>
                </a>
              </li>
              <li>
                <a href="/dashboard" class="nav-link text-secondary text-center">
                  <i class="bi bi-speedometer2 display-6"></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href="/converter" class="nav-link text-secondary text-center">
                  <i class="bi bi-arrow-left-right display-6"></i>
                  <p>Converter</p>
                </a>
              </li>
              <li>
                <a href="/faq" class="nav-link text-secondary text-center">
                  <i class="bi bi-question-square display-6"></i>
                  <p>FAQ</p>
                </a>
              </li>
              <li>
                <a href="/account" class="nav-link text-secondary text-center">
                  <i class="bi bi-person-circle display-6"></i>
                  <p>Account</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-3 py-2 border-bottom mb-3">
        <div class="container d-flex flex-wrap">
          <div class="text-end">
            <a v-if="loggedIn === false" href="/login" class="btn btn-secondary me-2">Login</a>
            <a v-if="loggedIn === true" href="/api/logout" class="btn btn-secondary me-2">Logout</a>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      loggedIn: ''
    }
  },
  methods: {
    isLoggedIn: function () {
      axios.get("/api/check-login")
        .then((response) => {
          console.log(response)
          this.loggedIn = response.data
        })
        .catch((errors) => {
          console.log(errors)
          // router.push("/login")
        })
    }
  },
  mounted() {
    this.isLoggedIn()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
