<!-- Dashboard Page -->
<template>
  <div class='container'>
    <div class='row'>
      <div class='col-md-6'>
        <h2 class="my-4">Dashboard</h2>
        <h5 class="my-2">Frequently requested rates</h5>
        <ul>
          <li>BTC-Bitcoin</li>
          <li>USD-US Dollar</li>
          <li>GBP-British Pound Sterling</li>
          <li>ETH-Etherium</li>
          <li>DOGE-DOGE Coin</li>
          <li>EUR-Euro</li>
        </ul>
        <h5 class="my-2">Frequently requested conversions</h5>
        <ul>
          <li>BTC <-> USD</li>
          <li>BTC <-> ETH</li>
          <li>BTC <-> EUR</li>
          <li>ETH <-> USD</li>
          <li>ETH <-> EUR</li>
          <li>EUR <-> USD</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dahsboard',
}
</script>
