<!-- Home Page -->
<template>
  <main>
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4 img-fluid" src="../assets/CCR.png" alt="CCR">
      <h1 class="display-5 fw-bold">CryptoCoinRates</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">Stay up to do date with the latest crypto coin rates.<br>
          Take quick actions and achieve better results with your trades.<br>
          We believe in the power of cryptocurrencies. Start now!</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/converter" class="btn btn-primary btn-lg px-4 gap-3">Let's convert!</a>
        </div>
      </div>
    </div>

    <div class='container'>
<!-- Three columns of text below the carousel -->
      <div class='row'>
        <div class='col-lg-4'>
          <div class="card">
            <img src="../assets/stock.jpg" class="card-img-top w-100" alt="stock-image" style="min-height: 300px; max-height: 300px; object-fit: cover">
            <div class="card-body">
              <h5 class="card-title">Dashboard</h5>
              <p class="card-text">All of your favorite cryptocurrencies in one place.
                Clearly represented for your viewing pleasure.</p>
              <a href="/dashboard" class="btn btn-primary">Dashboard</a>
            </div>
          </div>
        </div>

        <div class='col-lg-4'>
          <div class="card">
            <img src="../assets/CoinAPI.jpg" class="card-img-top w-100" alt="Coin-API" style="min-height: 300px; max-height: 300px; object-fit: cover">
            <div class="card-body">
              <h5 class="card-title">CoinAPI</h5>
              <p class="card-text">You won't find anything faster than the CCR-Converter
                thanks to nice guys over at CoinAPI. <br>Check them out if you want!</p>
              <a href="https://www.coinapi.io/" target="_blank" class="btn btn-primary">Visit CoinAPI</a>
            </div>
          </div>
        </div>

        <div class='col-lg-4'>
          <div class="card">
            <img src="../assets/faq.jpg" class="card-img-top w-100" alt="FAQ" style="min-height: 300px; max-height: 300px; object-fit: cover">
            <div class="card-body">
              <h5 class="card-title">FAQs</h5>
              <p class="card-text">What is cryptocurrency? How does cryptocurrency work? What controls cryptocurrency?
                <br>Want to know all this? If yes, read on to find the answers to common cryptocurrency FAQs.</p>
              <a href="/faq" class="btn btn-primary">Visit FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>
