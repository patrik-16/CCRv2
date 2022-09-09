<!-- Account page. When not logged in, redirect to Login page -->
<template>
  <div class='container'>
    <div class='row'>
      <div class='col-md-12'>
        <h2>Account</h2>
        <p>Hello {{ user.firstName }},</p>
        <p>this is your account page. Here you can edit your user data. Please don't forget to save your changes!</p>
<!-- Text field for First Name -->
        <div class='mb-3 row'>
          <label class='form-label' for='fn'>First Name:</label>
          <div class='col-sm-10'>
            <input class='form-control' id='fn' v-model='user.firstName'>
          </div>
        </div>
<!-- Text field for Last Name -->
        <div class='mb-3 row'>
          <label class='form-label' for='ln'>Last Name:</label>
          <div class='col-sm-10'>
            <input class='form-control' id='ln' v-model='user.lastName'>
          </div>
        </div>
<!-- Text field for Email -->
        <div class='mb-3 row'>
          <label class='form-label' for='mail'>E-Mail:</label>
          <div class='col-sm-10'>
            <input class='form-control' id='mail' v-model='user.email' type='email'>
          </div>
        </div>
<!-- Text field for Password -->
        <div class='mb-3 row'>
          <label class='form-label' for='pw'>Password: </label>
          <div class='col-sm-10'>
            <input class='form-control' id='pw' v-model='user.password' type='password'>
          </div>
        </div>
<!-- Button to update user data -->
        <button class='btn btn-secondary' v-on:click='updateUserData'>Save data</button>
<!-- Button to delete user data -->
        <button class='btn btn-primary' v-on:click='deleteUserData'>Delete account?</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import router from '../router/pages'

export default {
  name: 'Login',
  data() {
    return {
      // user object with predefined parameters
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userId: ''
      }
    }
  },

  methods: {
    // gets user data, if no user is logged in redirect to /login
    getUserData: function () {
      let self = this
      axios.get('/api/user')
        // set user data to self
        .then((response) => {
          self.$set(this, 'user', response.data.user)
        })
        // if not logged in -> redirect to /login page
        .catch((errors) => {
          console.log(errors)
          router.push('/login')
        })
    },

    // updates current user data
    updateUserData: function () {
      let config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      axios.put('/api/update-user/{id}', {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        password: this.user.password,
        userId: this.user.userId
      }, config);
      alert('Data updated!')
    },
    // deletes the user from the database
    deleteUserData:  function () {
      let config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      axios.delete('/api/delete-user/' + this.user.userId, config).then((response) => {
        location.href = '/api/logout'
      })
    }
  },
  // executed when page is loaded
  mounted() {
    this.getUserData()
  }
}
</script>
