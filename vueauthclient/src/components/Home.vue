<template>
  <main>
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4 img-fluid" src="../assets/CCR.png" alt="CCR">
      <h1 class="display-5 fw-bold">CryptoCoinRates</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>


    <div class='container'>
      <!-- Three columns of text below the carousel -->
      <div class='row'>
        <div class='col-lg-4'>
          <div class="card">
            <img src="../assets/stock.jpg" class="card-img-top w-100" alt="Exchange Rates" style="min-height: 300px; max-height: 300px; object-fit: cover">
            <div class="card-body">
              <h5 class="card-title">Rates</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="/dashboard" class="btn btn-primary">Dashboard</a>
            </div>
          </div>
        </div><!-- /.col-lg-4 -->

        <div class='col-lg-4'>
          <div class="card">
            <img src="../assets/CoinAPI.jpg" class="card-img-top w-100" alt="Exchange Rates" style="min-height: 300px; max-height: 300px; object-fit: cover">
            <div class="card-body">
              <h5 class="card-title">CoinAPI.io</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="https://www.coinapi.io/" target="_blank" class="btn btn-primary">Visit CoinAPI.io</a>
            </div>
          </div>
        </div><!-- /.col-lg-4 -->

        <div class='col-lg-4'>
          <div class="card">
            <img src="../assets/cash_in_cart.jpg" class="card-img-top w-100" alt="Exchange Rates" style="min-height: 300px; max-height: 300px; object-fit: cover">
            <div class="card-body">
              <h5 class="card-title">CoinAPI.io</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="https://www.coinapi.io/" target="_blank" class="btn btn-primary">Visit CoinAPI.io</a>
            </div>
          </div>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.hooooome {
  font-size: 100px;
  text-align: center;
}

.home2 {
  font-size: 60px;
  text-align: center;
}

.carousel-inner {
  background-color: darkgrey;
}

.carousel-caption {
  position: relative;
  left: unset;
  right: unset;
}

.carousel-control-next, .carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: unset;
  padding: 0 30px 0 30px;
  color: #fff;
  text-align: center;
  background: 0 0;
  border: 0;
  opacity: .5;
  transition: opacity .15s ease;
}
</style>
