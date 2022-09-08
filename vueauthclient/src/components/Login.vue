<template>
  <div class='container'>
    <div class='row'>
      <div class='col-md-6'>
        <h2 class="mb-3">Login</h2>
        <form v-on:submit="login">
          <div class="form-floating mb-3">
            <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 btn btn-lg btn-secondary" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import app from '../App';
export default {
  name: 'Login',
  methods: {
    login: (e) => {
      e.preventDefault()
      let email = e.target.elements.email.value
      let password = e.target.elements.password.value
      console.log(email)
      console.log(password)
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post('/api/login', data)
          .then((response) => {
            console.log('Logged in')
            location.href = "/"
          })
          .catch((errors) => {
            console.log('Cannot log in')
          })
      }
      login()
      app.data().loggedIn = true
    }
  }
}
</script>
