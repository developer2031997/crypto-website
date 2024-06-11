<template>
    <div class="container" id="blog">
        <div class="row py-5 justify-content-center">
            <div class="col-lg-12">
                <div class="text-center ">
                    <h1 class="fw-bold"><span class="text-primary">Blog</span>'s</h1>
                    <h5 class="text-secondary py-3">Hey there! Got questions? We've got answers. Check out our FAQ page
                        for all the deets. Still not satisfied? Hit us up.</h5>
                </div>
                <hr />
            </div>

            <div class="col-lg-4 " v-for="blog in medicalCryptoContent"  data-aos="zoom-in">
                <nuxt-link to="/blog">
                <div class="blog-card card my-2 shadow text-center justify-content-center" >
                    <div class="">
                        <img src="/images/features02.png" class="p-2 w-50" alt="...">
                    </div>
                    <hr>
                    <div class="card-body">
                        <h5 class="card-title">{{ blog.title }}</h5>
                        <p class="card-text">{{ blog.description }}</p>
                    </div>
                </div>
            </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>

const medicalCryptoContent = [
    {
        src: '',
        title: 'Secure Data Management',
        description: 'Our platform ensures that all healthcare data is encrypted and securely stored on the blockchain, providing robust protection against unauthorized access and data breaches.'
    },
    {
        src: '',
        title: 'Pharmaceutical Traceability',
        description: 'Track every step of the pharmaceutical supply chain with our blockchain solutions, ensuring authenticity and preventing counterfeit drugs from reaching patients.'
    },
    {
        src: '',
        title: 'Enhanced Clinical Trials',
        description: 'Improve the integrity and transparency of clinical trials by maintaining an immutable record of all trial data on the blockchain.'
    },
    {
        src: '',
        title: 'Smart Contracts',
        description: 'Automate processes such as insurance claims, consent management, and payment settlements with self-executing smart contracts, reducing administrative overhead and increasing efficiency.'
    },
    {
        src: '',
        title: 'Regulatory Compliance',
        description: 'Our platform is designed to comply with major healthcare regulations such as HIPAA and GDPR, ensuring that all solutions meet legal standards for protecting patient information and maintaining regulatory compliance.'
    },
    {
        src: '',
        title: 'Patient Privacy',
        description: 'Maintain patient privacy and data integrity by using blockchain technology to secure and manage healthcare records, ensuring only authorized access to sensitive information while maintaining confidentiality.'
    },
    {
        src: '',
        title: 'Data Integrity',
        description: 'Guarantee the integrity of healthcare data by recording it on an immutable blockchain ledger, preventing any unauthorized alterations or tampering, thus ensuring data reliability and trustworthiness.'
    },
    {
        src: '', title: 'Increased Efficiency',
        description: 'Streamline healthcare processes by leveraging blockchain technology to reduce paperwork, eliminate redundancies, and ensure fast and accurate data processing, thereby enhancing overall operational efficiency.'
    },
    {
        src: '',
        title: 'Secure Data Management',
        description: 'Our platform ensures that all healthcare data is encrypted and securely stored on the blockchain, providing robust protection against unauthorized access and data breaches.'
    }
];



</script>

<style scoped>
.blog-card {
    border-radius: 20px;
}

.blog-card:hover {
    border: 2px solid #73E4AC;
}

a,
NuxtLink {
  text-decoration: none;
  color: #000 !important;

}
</style>