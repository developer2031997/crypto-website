<template>
    <div class="partner-main">
    <div class="partner">
        <div class="container">
            <div class="row">
                <swiper :breakpoints="breakpoints" :centeredSlides="true" :spaceBetween="60" :modules="modules" :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false, 
                }" class="mySwiper">
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner1.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner2.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner3.png" class="img-fluid w-75 slider-imgpt-2  partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner4.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner5.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner1.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner2.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner3.png" class="img-fluid w-75 slider-imgpt-2  partner" alt="Nuxt Icon" />
                    </swiper-slide> 
                    <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner4.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                     <swiper-slide class="pt-4">
                        <NuxtImg  loading="lazy" src="/images/partner5.png" class="img-fluid w-75 slider-img partner" alt="Nuxt Icon" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

const modules = [Autoplay];

const breakpoints = {
  // when window width is >= 320px
  320: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  // when window width is >= 1024px
  1024: {
    slidesPerView: 5,
    spaceBetween: 60,
  },
};
</script>

<style scoped>
.mySwiper {
    width: 100%;
    height: 100%;
}
.partner-main{
    /* overflow-x: hidden; */
}
.partner {
    background-color: #E0FAF2;
    position: relative;
}
.partner:before {
    content: "";
    left: 0;
    top: -6px;
    height: 113%;
    width: 100%;
    background-color: #fff;
    border-top: 8px solid #fff;
    border-bottom: 8px solid #fff;
    z-index: -1;
    position: absolute;
}
.partner::after {
content: "";
  left: 0;
  top: -24px;
  height: 140px; /* Adjust the height as needed */
  width: 100%; /* Adjust the width to cover the parent element's width with some extra for the rotation */
  background: #edf2f8;
  z-index: -2;
  position: absolute;
  /* overflow: hidden; */
}

@media screen and (max-width: 480px) {
    .partner::after {
        height: 127px!important;
        top: -19px;
    } 
    .partner::before{
    top: -6px;
    /* height: 130%; */
    }
    .slider-img {
        width: 100%!important;
    }
}
</style>