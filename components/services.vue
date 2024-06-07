<template>
    <div class="bg-white container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center pt-5">
                    <h1 class="fw-bold"><span class="text-primary">Services</span> We Offer</h1>
                    <h5 class="text-secondary py-3">We offer the best services around - from installations to repairs,
                        maintenance, and more</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 service-card-container" v-for="service in services" :key="service.title">
                    <div class="service-card-main">
                        <div class="service__thumb d-flex justify-content-center">
                            <div class="service__thumb-inner">
                                <NuxtImg :src="service.img" class="img-fluid" alt="Nuxt Icon" />
                            </div>
                        </div>
                        <h4 class="py-3 fw-bold">{{ service.title }}</h4>
                        <p>{{ service.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const services = ref([
    {
        img: "/images/service1.png",
        title: "Strategy Consulting",
        text: "A social assistant that's flexible can accommodate your schedule and needs, making life easier."
    },
    {
        img: "/images/service2.png",
        title: "Financial Advisory",
        text: "Modules transform smart trading by automating processes and improving decision-making."
    }, {
        img: "/images/service3.png",
        title: "Management",
        text: "There, it's me, your friendly neighborhood reporter's news analyst processes and improving"
    }, {
        img: "/images/service4.png",
        title: "Supply Optimization",
        text: "Hey, have you checked out that new cryptocurrency platform? It's pretty cool and easy  to use!"
    }, {
        img: "/images/service5.png",
        title: "HR consulting",
        text: "Hey guys, just a quick update on exchange orders. There have been some changes currency!"
    }, {
        img: "/images/service6.png",
        title: "Marketing consulting",
        text: "Hey! Just wanted to let you know that the price notification module processes is now live"
    }
])
</script>

<style scoped>

.service-card-container {
    padding: 25px;
    text-align: center;
}

.service-card-main {
    background-color: #F4F7FB;
    border-radius: 20px;
    border: 1px solid #ddd;
    padding: 25px 0px;
    transition: transform 0.3s ease-in-out;
}

.service-card-main:hover {
    border: 2px solid #73E4AC;
    transform: scale(1.05);
}

.service__thumb {
    padding: 24px 0;
}

.service__thumb-inner {
    border-radius: 99px;
    background-color: #fff;
    box-shadow: 0px 8px 24px rgba(12, 52, 91, 0.04);
    width: 23%;
    padding: 24px;
}
</style>