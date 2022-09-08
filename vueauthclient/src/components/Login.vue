<template>
  <div class='container'>
    <div class='row'>
      <div class='col-md-6'>
        <h2>Login</h2>
        <form v-on:submit="login">
          <input type="text" name="email" placeholder="E-Mail"/><br>
          <input type="password" name="password" placeholder="Password"/><br>
          <input type="submit" value="Login"/>
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
