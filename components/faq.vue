<template>
    <div class="container py-5" id="faq">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center ">
                    <h1 class="fw-bold"><span class="text-primary">Frequently</span> Asked Questions</h1>
                    <h5 class="text-secondary py-3">Hey there! Got questions? We've got answers. Check out our FAQ page
                        for all the deets. Still not satisfied? Hit us up.</h5>
                </div>
                <hr />
            </div>
            <div class="col-lg-6 py-4 pt-5 accordion-parent">
                <div v-for="faq in faqs" :key="faq.question" class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapse' +faq.id" aria-expanded="false"
                                :aria-controls="'flush-collapse' +faq.id">
                                {{ faq.question }}
                            </button>
                        </h2>
                        <div :id="'flush-collapse' +faq.id" class="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">{{ faq.answer }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 py-4 text-center faq-img" data-aos="fade-right">
                <NuxtImg src="/images/faq.png" class="about-img img-fluid w-75" alt="Nuxt Icon" draggable="false"/>
            </div>
        </div>
    </div>
</template>
    
<script setup>
const faqs = ref([  
    {
        id:"One",
        question: "What is Medical Crypto and how does it work?",
        answer: "Medical crypto involves using blockchain technology to secure, manage, and streamline healthcare data and processes. It ensures data integrity, privacy, and transparency, making healthcare systems more efficient and trustworthy."
    },
    {
        id:"Two",
        question: "How does blockchain technology enhance data security in healthcare?",
        answer: "Blockchain encrypts health data and stores it in a decentralized ledger, making it tamper-proof and accessible only to authorized users. This prevents unauthorized access and data breaches."
    },
    {
        id:"Three",
        question: "What are the benefits of using blockchain for pharmaceutical traceability?",
        answer: "Blockchain ensures that every step of the pharmaceutical supply chain is recorded and verifiable. This combats counterfeit drugs, ensures authenticity, and enhances patient safety by tracking medications from production to delivery."
    },
    {
        id:"Four",
        question: "How can blockchain improve clinical trials?",
        answer: "Blockchain maintains an immutable record of all clinical trial data, ensuring transparency and integrity. This prevents data manipulation and enhances trust in the results, making clinical trials more reliable."
    },
    {
        id:"Five",
        question: "What are smart contracts and how are they used in healthcare?",
        answer: "Smart contracts are self-executing contracts with the terms directly written into code. In healthcare, they can automate processes such as insurance claims, consent management, and payment settlements, reducing administrative overhead and increasing efficiency."
    },
    {
        id:"Six",
        question: "Is your platform compliant with healthcare regulations like HIPAA and GDPR?",
        answer: "Yes, our platform is designed to comply with major healthcare regulations such as HIPAA and GDPR. We prioritize data security and privacy, ensuring that our solutions meet all legal standards for protecting patient information."
    }
]);
</script>

<style scoped>
.accordion-button:not(.collapsed) {
    background-color: #72E4AB;
    /* color:white; */
}
.accordion-body {
    background: #46cc872e;
}

@media screen and (max-width : 840px) {
    .accordion-parent{
        order: 2;
    }
    .faq-img{
        order: 1;
    }
    
}
</style>