<template>
    <div class="bg-white container" id="service">
        <div class="row justify-content-center py-5">
            <div class="col-lg-12">
                <div class="text-center">
                    <h1 class="fw-bold"><span class="text-primary">Services</span> We Offer</h1>
                    <h5 class="text-secondary py-3">We offer the best services around - from installations to repairs,
                        maintenance, and more</h5>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 service-card-container" v-for="service in services" :key="service.title">
                    <div class="service-card-main" data-aos="zoom-in">
                        <div class="service__thumb d-flex justify-content-center" >
                            <div class="service__thumb-inner">
                                <NuxtImg :src="service.img" class="img-fluid" alt="Nuxt Icon" />
                            </div>
                        </div>
                        <h4 class="p-3 fw-bold">{{ service.title }}</h4>
                        <p class="px-3">{{ service.text }}</p>
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
        title: "Secure Data Management",
        text: "Our blockchain technology ensures your medical records are securely stored and accessible only to authorized personnel, providing peace of mind and convenience."
    },
    {
        img: "/images/service2.png",
        title: "Pharmaceutical Traceability",
        text: "Track the journey of pharmaceuticals from manufacturer to patient, combating counterfeit drugs and ensuring you receive genuine medications."
    }, 
    {
        img: "/images/service3.png",
        title: "Clinical Trial Management",
        text: "Our platform enhances the reliability and transparency of clinical trials, ensuring all data is securely recorded and immutable, fostering trust in research."
    }, 
    {
        img: "/images/service4.png",
        title: "Supply Optimization",
        text: "Optimize your medical supply chain with our blockchain solutions, ensuring efficient, transparent, and reliable management from production to delivery."
    }, 
    {
        img: "/images/service5.png",
        title: "Smart Contract Development",
        text: "We develop smart contracts tailored to healthcare needs, automating processes like insurance claims, consent management, and payment settlements."
    }, 
    {
        img: "/images/service6.png",
        title: "Telemedicine Solutions",
        text: "Integrate blockchain into your telemedicine services to ensure secure, private, and reliable virtual consultations and data exchange."
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