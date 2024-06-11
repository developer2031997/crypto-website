<template>
    <div style="background: linear-gradient(152deg, #edf2f838 0%, #edf2f8 100%);">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center ">
                        <h1 class="fw-bold"><span class="text-primary">Benefits</span> We Offer</h1>
                        <h5 class="text-secondary py-3">Unlock the full potential of our product with our amazing
                            features
                            and top-notch.</h5>
                    </div>
                    <hr/>
                </div>
                
            </div>
       
            <div class="row justify-content-sm-center justify-content-between ">
                <div class="col-lg-5">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                        aria-orientation="vertical">
                        <button class="nav-link btn-bg my-2  active" id="v-pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                            aria-selected="true">Enhanced Data Security</button>
                        <button class="nav-link btn-bg my-2 " id="v-pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                            aria-selected="false">Improved Patient Privacy</button>
                        <button class="nav-link btn-bg my-2 " id="v-pills-messages-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                            aria-selected="false">Transparent and Efficient Processes</button>
                        <button class="nav-link btn-bg my-2 " id="v-pills-settings-tab" data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                            aria-selected="false">Pharmaceutical Traceability</button>
                    </div>
                </div>
                <div class="col-lg-1 d-none d-sm-block">
                    <div class="offers-border"></div>
                </div>
                <div class="col-lg-6 my-3 text-center">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div  class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                            aria-labelledby="v-pills-home-tab" tabindex="0">
                            <NuxtImg src="/images/features01.png" class="about-img img-fluid w-75" alt="Nuxt Icon" />

                        </div>
                        <div  class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                            aria-labelledby="v-pills-profile-tab" tabindex="0">
                            <NuxtImg src="/images/features02.png" class="about-img img-fluid w-75" alt="Nuxt Icon" />

                        </div>

                        <div  class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                            aria-labelledby="v-pills-messages-tab" tabindex="0">
                            <NuxtImg src="/images/features01.png" class="about-img img-fluid w-75" alt="Nuxt Icon" />

                        </div>
                        <div  class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                            aria-labelledby="v-pills-settings-tab" tabindex="0">
                            <NuxtImg src="/images/features02.png" class="about-img img-fluid w-75" alt="Nuxt Icon" />

                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.nav-link {
    font-size: 19px;
    font-weight: 600;
}
.nav-link.active {
    background-color: #fff !important;
    color: #000 !important;
    box-shadow: 0 0 10px #ddd;
}
.btn-bg {
    border: 1px solid #fff;
    /* width: 350px; */
    padding: 20px 0px;
    border-radius: 12px;
}
.offers-border{
    border-left: 10px solid #74E4AC !important;
    box-shadow: 0 0 10px #ddd;
    width: 0px !important;
    height: 74vh;
    border-radius: 15px;
}
</style>