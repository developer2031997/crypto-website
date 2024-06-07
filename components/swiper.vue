<template>
    <div class="partner-main">
    <div class="partner">
        <div class="container">
            <div class="row">
                <swiper :slidesPerView="5" :centeredSlides="true" :spaceBetween="60" :modules="modules" :autoplay="{
                    delay: 1000,
                    disableOnInteraction: false,
                }" class="mySwiper">
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner1.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner2.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner3.png" class="img-fluid pt-2 w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner4.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner5.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner1.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner2.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner3.png" class="img-fluid pt-2 w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide> 
                    <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner4.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
                    </swiper-slide>
                     <swiper-slide class="pt-4">
                        <NuxtImg src="/images/partner5.png" class="img-fluid w-75 partner" alt="Nuxt Icon" />
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
  top: -17px;
  height: 130px; /* Adjust the height as needed */
  width: 100%; /* Adjust the width to cover the parent element's width with some extra for the rotation */
  background: #edf2f8;
  z-index: -2;
  position: absolute;
  overflow: hidden;
}
</style>