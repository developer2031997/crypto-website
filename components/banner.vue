<template>
    <div class="bannner-bg" id="banner">
        <div class="container">
            <div class="row justify-content-between pt-5">
                <div class="col-lg-6 ">
                    <div class="">
                        <NuxtImg src="/images/banner-coin.png" class="img-fluid w-25 banner-coin" alt="Nuxt Icon" />
                    </div>
                    <div class="">
                        <h1 class="banner-heading">Transforming Healthcare with Blockchain Technology</h1>
                    </div>
                    <div class="py-3">
                        <p>Secure, transparent, and efficient solutions for the future of healthcare. Join us in revolutionizing the medical industry.</p>
                    </div>
                    <div class="">
                        <a class="btn banner-btn-1 text-white fw-bold" href="">Learn More</a>
                        <a class="btn banner-btn-2 btn-outline-primary fw-bold mx-3" href="">Watch Video</a>
                    </div>

                    <div class="pt-5">
                        <h4 class="fw-bolder">Follow Us</h4>
                        <div class="row py-3 social-media">
                            <div class=" col-2 col-lg-1  mx-1 text-center social-icons">
                                <Icon name="uil:facebook" color="black" size='24px' />
                            </div>
                            <div class=" col-2 col-lg-1  mx-1 text-center social-icons">
                                <Icon name="uil:linkedin" color="black" size='24px' />
                            </div>
                            <div class=" col-2 col-lg-1  mx-1 text-center social-icons">
                                <Icon name="uil:instagram" color="black" size='24px' />
                            </div>
                            <div class=" col-2 col-lg-1  mx-1 text-center social-icons">
                                <Icon name="uil:youtube" color="black" size='24px' />
                            </div>
                            <div class=" col-2 col-lg-1  mx-1 text-center social-icons">
                                <Icon name="uil:twitter" color="black" size='24px' />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 py-5">
                    <div class="banner-img">
                        <NuxtImg src="/images/banner-img.png" class="banner-img-img img-fluid w-100" alt="Nuxt Icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.banner-heading {
    font-size: 42px;
}

.banner-btn-1 {
    background-color: #00D094;
}

.banner-btn-1,
.banner-btn-2 {
    font-size: 20px;
}

.bannner-bg {
    background-image: url('/images/banner-bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: -60px;
}

.banner-coin {
    -webkit-animation: rotate-center 5s ease-in-out infinite alternate-reverse both;
    animation: rotate-center 5s ease-in-out infinite alternate-reverse both;
}

.banner-img-img {
    -webkit-animation: slide-left 5s ease-out infinite alternate-reverse both;
    animation: slide-left 5s ease-out infinite alternate-reverse both;
}

.social-icons {
    border: 1px solid #ddd;
    padding: 2px;
    border-radius: 50px
}

.social-icons:hover {
    background-color: #6CE0A6;
}

@-webkit-keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
    }
}

@keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
    }
}
@media screen and (max-width:480px) {
    .social-media{
        justify-content: space-around;
    }
    @keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-70px);
    }
}
    
}
</style>