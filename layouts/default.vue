<template>

<nav :class="['navbar', 'navbar-expand-lg', 'bg-transparent', { 'sticky-nav': isSticky }]" aria-label="Primary navigation">
    <div class="container">
      <a class="navbar-brand h1 fw-bolder" href="#" style="z-index: 1;">Crypto Website</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#banner">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#service">Services</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="">
    <slot />
  </div>

  <div style="background-color: #F2F5FA; box-shadow: 0 0 10px #000;">
    <div class="container">
    <footer class="row pt-5 pb-2 justify-content-between text-center" >
      <div class="col-lg-4 col-12 mb-3">
        <h1>Crypto Website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore.</p>
      </div>
      <div class="col-lg-2 col-12 mb-3">
        <h5>Quick Links</h5>  <hr>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About Us</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Services</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Offers</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Roadmap</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQ's</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-12 mb-3">
        <h5>Section</h5>  <hr>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-lg-2 col-12 mb-3">
        <h5>Section</h5>  <hr>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div class="d-flex flex-column flex-sm-row justify-content-between py-3 border-top">
        <p>© {{ new Date().getFullYear() }} Company, Inc. All rights reserved.</p>
        <div class="d-flex text-center justify-content-center">
          <div class=" mx-1 text-center social-icons">
            <Icon name="uil:facebook" color="black" size='24px' />
          </div>
          <div class=" mx-1 text-center social-icons">
            <Icon name="uil:linkedin" color="black" size='24px' />
          </div>
          <div class=" mx-1 text-center social-icons">
            <Icon name="uil:instagram" color="black" size='24px' />
          </div>
          <div class=" mx-1 text-center social-icons">
            <Icon name="uil:youtube" color="black" size='24px' />
          </div>
          <div class=" mx-1 text-center social-icons">
            <Icon name="uil:twitter" color="black" size='24px' />
          </div>
        </div>
      </div>
      <button @click="scrollToTop" v-if="showButton" id="myBtn" title="Go to top">
        <Icon name="uil:arrow-up" color="white" size='40px' />
      </button>
    </footer>
    </div>
  </div>

</template>

<script setup>
const isSticky = ref(false);
const showButton = ref(false);

const handleScroll = () => {
  if (window.pageYOffset > 200) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

// When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
      if (window.pageYOffset > 20) {
        showButton.value = true;
      } else {
        showButton.value = false;
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('scroll', scrollFunction);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', scrollFunction);
});
</script>

<style scoped>
.navbar{
  z-index: 100;
}
a,
NuxtLink {
  text-decoration: none;
  color: #fff !important;

}

a,
.nav-link {
  color: #000 !important;
  font-weight: 600
}

.nav-link a:hover {
  font-weight: 600;
}

p {
  padding-bottom: 0;
  margin: 0 0 7px;
}
.sticky-nav {
  background: white !important;
  height: 74px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  animation: fadeInOut 0.3s ease;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

.social-icons {
  border: 1px solid #ddd;
  padding: 2px;
  border-radius: 50px
}

.social-icons:hover {
  background-color: #6CE0A6;
}
body{
  overflow: hidden!important;
  scroll-behavior: smooth;
}

#myBtn {
  /* display: none; */
  position: fixed;
    bottom: 20px;
    right: 12px;
    z-index: 99;
    width: 4%;
    height: 9%;
    /* font-size: -18px; */
    border: none;
    outline: none;
    background-color: #1BCE57;
    color: white;
    cursor: pointer;
    padding: 0px;
    border-radius: 25px;
}

#myBtn:hover {
  background-color: #0D6EFD;
}
.nav-link:hover{
  color : #1CD059!important;
}
@media screen and (max-width : 480px) {
.navbar-collapse{
  background-color: #F4F7FB;
  padding: 0px 10px;
  border-radius: 10px;
}
  #myBtn{
    bottom: 9px;
    height: 7%;
    right: 27px;
    width: 13%;;
}
  
}
</style>