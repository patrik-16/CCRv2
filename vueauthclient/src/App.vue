<!--  the "frame" of our website  -->
<template>
  <div>
    <header>
<!--  nav bar  -->
      <div class='px-3 py-2 bg-dark text-white'>
        <div class='container'>
          <div class='d-flex flex-wrap align-items-center justify-content-lg-end'>
            <ul class='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
              <li>
                <a href='/' class='nav-link text-secondary text-center'>
                  <i class='bi bi-house display-6'></i>
                  <p>Home</p>
                </a>
              </li>
              <li>
                <a href='/dashboard' class='nav-link text-secondary text-center'>
                  <i class='bi bi-speedometer2 display-6'></i>
                  <p>Dashboard</p>
                </a>
              </li>
              <li>
                <a href='/converter' class='nav-link text-secondary text-center'>
                  <i class='bi bi-arrow-left-right display-6'></i>
                  <p>Converter</p>
                </a>
              </li>
              <li>
                <a href='/faq' class='nav-link text-secondary text-center'>
                  <i class='bi bi-question-square display-6'></i>
                  <p>FAQ</p>
                </a>
              </li>
              <li>
                <a href='/account' class='nav-link text-secondary text-center'>
                  <i class='bi bi-person-circle display-6'></i>
                  <p>Account</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
<!-- login and logout buttons -->
      <div class='px-3 py-2 border-bottom mb-3'>
        <div class='container w-100'>
          <div class="float-lg-end">
            <a v-if='loggedIn === false' href='/login' class='btn btn-secondary me-2'>Login</a>
            <a v-if='loggedIn === true' href='/api/logout' class='btn btn-secondary me-2'>Logout</a>
          </div>
        </div>
      </div>
    </header>
<!-- loads component depending on route -->
    <router-view/>

    <div class="container" style="margin-top: 250px">
<!--  footer -->
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img width="50px" src="./assets/CCR.png" alt="CCR">
        </a>
<!-- footer navigation links -->
        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
          <li class="nav-item"><a href="/dashboard" class="nav-link px-2 text-muted">Dashboard</a></li>
          <li class="nav-item"><a href="/converter" class="nav-link px-2 text-muted">Converter</a></li>
          <li class="nav-item"><a href="/faq" class="nav-link px-2 text-muted">FAQ</a></li>
          <li class="nav-item"><a href="/account" class="nav-link px-2 text-muted">Account</a></li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      loggedIn: ''
    }
  },
  methods: {
    /**
    checks for login or logout button visibility
     */
    isLoggedIn: function () {
      axios.get('/api/check-login')
        .then((response) => {
          console.log(response)
          this.loggedIn = response.data
        })
        .catch((errors) => {
          console.log(errors)
        })
    }
  },
  mounted() {
    this.isLoggedIn()
  }
}
</script>

<style>
</style>
