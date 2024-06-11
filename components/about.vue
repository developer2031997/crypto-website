<template>
    <div id="about">
        <div class="container justify-content-between">
            <div class="row overflow-hidden">
                <div class="col-lg-6" data-aos="fade-left">   
                    <NuxtImg src="/images/about.png" class="about-img img-fluid w-100" alt="Nuxt Icon" draggable="false" />
                    <div class="floating-content__top-left">
                        <div class="floating-content__item">
                            <h1 class="text-primary"><b>10 Years</b></h1>
                            <p class="h6">Consulting Experience</p>
                        </div>
                    </div>
                    <div class="floating-content__top-right">
                        <div class="floating-content__item">
                            <h1 class="text-primary"><b>20K+</b></h1>
                            <p class="h6">Happy Users</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 d-flex flex-column justify-content-center overflow-x-hidden" data-aos="fade-right">
                    <div class="">
                        <h1 class="banner-heading"> <span class="text-primary">About</span> <br> MedCrypto Solutions :
                        </h1>
                    </div>
                    <div class="py-3">
                        <p>Innovative blockchain technology for secure healthcare. Our mission is to enhance patient
                            privacy, streamline processes, and ensure data integrity.</p>
                    </div>
                    <div class="">
                        <a class="btn banner-btn-1 text-white fw-bold" href="">Explore More</a>
                    </div>
                </div>
                <div class="col-lg-12 py-3"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.banner-btn-1 {
    background-color: #00D094;
    font-size: 20px;
    border: 1px solid #000;
    padding: 10px;
}

.banner-btn-1:hover {
    transform: translateY(-3px);
    background-color: #00D094;

}

.floating-content__top-left,
.floating-content__top-right {
    position: absolute !important;
}

.floating-content__top-left {
    left: 5%;
    top: 11%;
    width: 40%;
}

.floating-content__top-right {
    top: 60%;
    right: 4%;
    width: 40%;
}

.floating-content__item {
    background-color: #ffffffe6;
    border: 1px solid #ddd;
    box-shadow: -40px 40px 60px 0px rgba(5, 30, 54, 0.05);
    border-radius: 16px;
    padding: 20px;
}
</style>