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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
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

  <div style="background-color: #F1F5F9;">
    <div class="container">
    <footer class="row pt-5 pb-2 justify-content-between" >
      <div class="col-4 mb-3">
        <h1>Crypto Website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore.</p>
      </div>
      <div class="col-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div class="d-flex flex-column flex-sm-row justify-content-between py-3 border-top">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <div class="d-flex">
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
    </footer>
    </div>
  </div>

</template>

<script setup>
const isSticky = ref(false);

const handleScroll = () => {
  if (window.pageYOffset > 200) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
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
}
</style>