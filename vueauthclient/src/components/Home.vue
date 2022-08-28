<template>
  <main>
    <div>
      <p class="hooooome">H O M E !</p>
      <p class="home2">welcome home</p>
    </div>
    <div id="myCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"
                aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container text-center">
            <img src="../assets/logo.png" class="img-fluid" alt=''>
            <div class="carousel-caption">
              <h1>Example headline.</h1>
              <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container text-center">
            <img src="../assets/logo.png" class="img-fluid" alt=''>
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container text-center">
            <img src="../assets/logo.png" class="img-fluid" alt=''>
            <div class="carousel-caption">
              <h1>One more for good measure.</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
               role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first
            column.</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
               role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second
            column.</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg"
               role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777"></rect>
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          <p><a class="btn btn-secondary" href="#">View details »</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
    </div><!-- /.container -->


    <!--      <div id="homeInfoCarousel" class="carousel carousel-dark mx-auto slide" data-bs-interval="false">-->
    <!--        <div class="carousel-indicators">-->
    <!--          <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="0" class="active"-->
    <!--                  aria-current="true" aria-label="Slide 1"></button>-->
    <!--          <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="1"-->
    <!--                  aria-label="Slide 2"></button>-->
    <!--          <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="2"-->
    <!--                  aria-label="Slide 3"></button>-->
    <!--          <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="3"-->
    <!--                  aria-label="Slide 4"></button>-->
    <!--          <button type="button" data-bs-target="#homeInfoCarousel" data-bs-slide-to="4"-->
    <!--                  aria-label="Slide 5"></button>-->
    <!--        </div>-->
    <!--        <div class="carousel-inner ">-->

    <!--          <div class="carousel-item active">-->
    <!--            <div class="row">-->
    <!--              <div class="col-md-6">-->
    <!--                <img src="../assets/logo.png" class="d-block mx-auto" alt=''>-->
    <!--              </div>-->
    <!--              <div class="col-md-6">-->
    <!--                <div class="carousel-caption d-none d-md-block px-md-5 px-2">-->
    <!--                  <h5>First slide label</h5>-->
    <!--                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut-->
    <!--                    labore-->
    <!--                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea-->
    <!--                    rebum.-->
    <!--                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->


    <!--          <div class="carousel-item">-->
    <!--            <img src="../assets/logo.png" class="d-block mx-auto" alt="...">-->
    <!--            <div class="carousel-caption d-none d-md-block">-->
    <!--              <h5>Second slide label</h5>-->
    <!--              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut-->
    <!--                labore-->
    <!--                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea-->
    <!--                rebum.-->
    <!--                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="carousel-item">-->
    <!--            <img src="../assets/logo.png" class="d-block mx-auto" alt="...">-->
    <!--            <div class="carousel-caption d-none d-md-block">-->
    <!--              <h5>Third slide label</h5>-->
    <!--              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut-->
    <!--                labore-->
    <!--                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea-->
    <!--                rebum.-->
    <!--                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="carousel-item">-->
    <!--            <img src="../assets/logo.png" class="d-block mx-auto" alt="...">-->
    <!--            <div class="carousel-caption d-none d-md-block">-->
    <!--              <h5>Fourth slide label</h5>-->
    <!--              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut-->
    <!--                labore-->
    <!--                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea-->
    <!--                rebum.-->
    <!--                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="carousel-item">-->
    <!--            <img src="../assets/logo.png" class="d-block mx-auto" alt="...">-->
    <!--            <div class="carousel-caption d-none d-md-block">-->
    <!--              <h5>Fifth slide label</h5>-->
    <!--              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut-->
    <!--                labore-->
    <!--                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea-->
    <!--                rebum.-->
    <!--                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>-->
    <!--            </div>-->
    <!--          </div>-->


    <!--        </div>-->
    <!--        <button class="carousel-control-prev" type="button" data-bs-target="#homeInfoCarousel"-->
    <!--                data-bs-slide="prev">-->
    <!--          <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
    <!--          <span class="visually-hidden">Previous</span>-->
    <!--        </button>-->
    <!--        <button class="carousel-control-next" type="button" data-bs-target="#homeInfoCarousel"-->
    <!--                data-bs-slide="next">-->
    <!--          <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
    <!--          <span class="visually-hidden">Next</span>-->
    <!--        </button>-->
    <!--      </div>-->
    <!--    </div>-->
  </main>
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
