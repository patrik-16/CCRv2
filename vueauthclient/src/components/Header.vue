<script>
export default {
  name: 'Header'
}
</script>

<template>
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
<!--        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">-->
<!--          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">-->
<!--        </form>-->

        <div class="text-end">
          <a href="/login" class="btn btn-light text-dark me-2">Login</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
h3 {
  font-size: 1.2rem;
}
/*.greetings h1,*/
/*.greetings h3 {*/
/*  text-align: center;*/
/*}*/
/*@media (min-width: 1024px) {*/
/*  .greetings h1,*/
/*  .greetings h3 {*/
/*    text-align: left;*/
/*  }*/
/*}*/
</style>
