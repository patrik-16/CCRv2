<template>
  <div>
    <div>
      <p class="hooooome">H O M E !</p>
      <p class="home2">welcome home</p>
    </div>

    <div id="homeInfoCarousel" class="carousel carousel-dark mx-auto slide" data-bs-interval="false" style="width: 70%">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="4"
                aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner bg-secondary">

        <div class="carousel-item active">
          <img src="../assets/logo.png" class="d-block mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Fourth slide label</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div class="carousel-item">
          <img src="../assets/logo.png" class="d-block mx-auto" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Fifth slide label</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
        </div>


      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#homeInfoCarousel"
              data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#homeInfoCarousel"
              data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
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
</style>
