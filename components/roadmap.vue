<template>
    <div style="background: linear-gradient(152deg, #edf2f838 0%, #edf2f8 100%);">
        <div class="container">
            <div class="row py-5">
                <div class="col-lg-12">
                    <div class="text-center ">
                        <h1 class="fw-bold">Product <span class="text-primary"> Roadmap</span></h1>
                        <h5 class="text-secondary py-3">A product roadmap shows the path ahead, helps teams plan, and
                            guides the delivery of the product.</h5>
                    </div>
                    <hr />
                </div>
            </div>
            <div class="row position-relative py-5">
                <div class="col-lg-1 position-absolute" style="left: 49%;">
                    <div class="roadmap-border"></div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center align-item-center">
                        <NuxtImg src="/images/shape01.png" class="img-fluid banner-coin" style="margin-top: 30px; width: 45%;" alt="Nuxt Icon" />
                    </div>
                </div>
                <div class="col-lg-6  py-3 roadmap-card-container">
                    <div class="roadmap-card-main p-4 text-start">
                        <div class="roadmap__thumb d-flex justify-content-between">
                            <h4 class="py-3 fw-bold">Project Research</h4>
                            <h4 class="py-3 fw-bold">1</h4>
                        </div>
                        <p>Project research is the backbone of any successful project. It involves gathering
                            information, setting objectives, and analyzing data to ensure the project is achievable.
                            Without proper research, projects can fail due to lack of knowledge.</p>
                    </div>
                </div>

                <div class="col-lg-6 py-3 roadmap-card-container">
                    <div class="roadmap-card-main p-4 text-start">
                        <div class="roadmap__thumb d-flex justify-content-between">
                            <h4 class="py-3 fw-bold">Framing Idea</h4>
                            <h4 class="py-3 fw-bold">2</h4>
                        </div>
                        <p>Project research is the backbone of any successful project. It involves gathering
                            information, setting objectives, and analyzing data to ensure the project is achievable.
                            Without proper research, projects can fail due to lack of knowledge.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center align-item-center">
                        <NuxtImg src="/images/shape01.png" class="img-fluid banner-coin" style="margin-top: 30px; width: 45%;" alt="Nuxt Icon" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center align-item-center">
                        <NuxtImg src="/images/shape01.png" class="img-fluid banner-coin" style="margin-top: 30px; width: 45%;" alt="Nuxt Icon" />
                    </div>
                </div>
                <div class="col-lg-6  py-3 roadmap-card-container">
                    <div class="roadmap-card-main p-4 text-start">
                        <div class="roadmap__thumb d-flex justify-content-between">
                            <h4 class="py-3 fw-bold">Design First Draft</h4>
                            <h4 class="py-3 fw-bold">3</h4>
                        </div>
                        <p>Project research is the backbone of any successful project. It involves gathering
                            information, setting objectives, and analyzing data to ensure the project is achievable.
                            Without proper research, projects can fail due to lack of knowledge.</p>
                    </div>
                </div>

                <div class="col-lg-6  py-3 roadmap-card-container">
                    <div class="roadmap-card-main p-4 text-start">
                        <div class="roadmap__thumb d-flex justify-content-between">
                            <h4 class="py-3 fw-bold">Final Design</h4>
                            <h4 class="py-3 fw-bold">4</h4>
                        </div>
                        <p>So after lots of reiterations, and endless tweaking, we finally landed on the final design.
                            It's slick, it's modern, and it perfectly captures the essence of what we were aiming for.
                            We couldn't be more excited to launch it!</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center align-item-center">
                        <NuxtImg src="/images/shape01.png" class="img-fluid banner-coin" style="margin-top: 30px; width: 45%;" alt="Nuxt Icon" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center align-item-center">
                        <NuxtImg src="/images/shape01.png" class="img-fluid banner-coin" style="margin-top: 30px; width: 45%;" alt="Nuxt Icon" />
                    </div>
                </div>

                <div class="col-lg-6  py-3 roadmap-card-container">
                    <div class="roadmap-card-main p-4 text-start">
                        <div class="roadmap__thumb d-flex justify-content-between">
                            <h4 class="py-3 fw-bold">Project Development</h4>
                            <h4 class="py-3 fw-bold">5</h4>
                        </div>
                        <p>So we're deep in project development here, and things are coming along nicely. We've got a
                            solid plan in place and our team is firing on all cylinders. There's still work to be done,
                            but we're excited about what we're building.</p>
                    </div>
                </div>
                <div class="col-lg-6  py-3 roadmap-card-container">
                    <div class="roadmap-card-main p-4 text-start">
                        <div class="roadmap__thumb d-flex justify-content-between">
                            <h4 class="py-3 fw-bold">Launch Project</h4>
                            <h4 class="py-3 fw-bold">6</h4>
                        </div>
                        <p>Alright folks, it's time to get this project off the ground! We've been talking about it for
                            weeks, and now it's time to launch. We've got all the pieces in place, so let's get to work
                            and make this thing happen!</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="d-flex justify-content-center align-item-center">
                        <NuxtImg src="/images/shape01.png" class="img-fluid banner-coin" style="margin-top: 30px; width: 45%;" alt="Nuxt Icon" />
                    </div>
                </div>
 
            </div>
        </div>
    </div>
</template>

<script setup>
// const roadmaps = ref([
//   {
//     id: 1,
//     title: 'Project Research',
//     text: 'Project research is the backbone of any successful project. It involves gathering information, setting objectives, and analyzing data to ensure the project is achievable. Without proper research, projects can fail due to lack of knowledge.'
//   },
//   {
//     id: 2,
//     title: 'Framing Idea',
//     text: 'Project research is the backbone of any successful project. It involves gathering information, setting objectives, and analyzing data to ensure the project is achievable. Without proper research, projects can fail due to lack of knowledge.'
//   },
//   {
//     id: 3,
//     title: 'Design First Draft',
//     text: 'Project research is the backbone of any successful project. It involves gathering information, setting objectives, and analyzing data to ensure the project is achievable. Without proper research, projects can fail due to lack of knowledge.'
//   },
//   {
//     id: 4,
//     title: 'Final Design',
//     text: 'So after lots of reiterations, and endless tweaking, we finally landed on the final design. It\'s slick, it\'s modern, and it perfectly captures the essence of what we were aiming for. We couldn\'t be more excited to launch it!'
//   },
//   {
//     id: 5,
//     title: 'Project Development',
//     text: 'So we\'re deep in project development here, and things are coming along nicely. We\'ve got a solid plan in place and our team is firing on all cylinders. There\'s still work to be done, but we\'re excited about what we\'re building.'
//   },
//   {
//     id: 6,
//     title: 'Launch Project',
//     text: 'Alright folks, it\'s time to get this project off the ground! We\'ve been talking about it for weeks, and now it\'s time to launch. We\'ve got all the pieces in place, so let\'s get to work and make this thing happen!'
//   }
// ]);
</script>

<style scoped>
.roadmap-card-container {
    padding: 25px;
    text-align: center;
}

.roadmap-card-main {
    background-color: #fff;
    border-radius: 20px;
    border: 1px solid #ddd;
    padding: 25px 0px;
}

.roadmap-card-main:hover {
    border: 2px solid #74E4AC;
    background-color: #00000040;
}

.roadmap__thumb {
    padding: 24px 0;
}

.roadmap__thumb-inner {
    border-radius: 99px;
    background-color: #fff;
    box-shadow: 0px 8px 24px rgba(12, 52, 91, 0.04);
    width: 23%;
    padding: 24px;
}

.roadmap-border {
    border-left: 10px solid #74E4AC !important;
    box-shadow: 0 0 10px #ddd;
    width: 0px !important;
    height: 311vh;
    border-radius: 15px;
}

.banner-coin {
    -webkit-animation: rotate-center 5s ease-in-out infinite alternate-reverse both;
    animation: rotate-center 5s ease-in-out infinite alternate-reverse both;
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
</style>