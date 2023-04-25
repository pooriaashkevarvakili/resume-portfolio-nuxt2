<template>
    <main class="min-h-screen dark:bg-slate-800 relative bg-gray-50 pb-10">
        <PortfolioCover />
        <div class="container px-4">
            <div class="flex flex-wrap px-4">
                <div
                    class="w-full sm:ml-12 lg:w-1/3 md:w-11/12 4xl:ml-6 sm:w-10/12 2xl:ml-0 lg:ml-0 xl:ml-0 md:ml-4  5xl:w-full   4xl:w-11/12  2xl:w-1/3 xl:w-1/3 7xl:w-full  6xl:w-full">
                    <Sidebar />
                </div>
                <div class="w-full lg:w-2/3 ">
                    <div dir="auto" class="2xl:hidden xl:hidden lg:hidden ">

                        <div dir="auto"
                            class="bg-gray-400 rounded-xl 4xl:w-11/12 4xl:ml-6 sm:ml-12 md:w-10/12 sm:w-10/12 2xl:w-11/12 xl:w-11/12  2xl:ml-6 xl:ml-6 lg:ml-6 md:ml-12 ml-12  w-9/12 h-20 dark:bg-slate-800 mt-3">
                            <button
                                class="overflow-y-auto ml-10 text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example"
                                data-drawer-placement="top" aria-controls="drawer-top-example">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            </button>
                        </div>
                        <div id="drawer-top-example"
                            class="fixed top-0 left-0 right-0 z-40 2xl:w-full xl:w-full lg:w-full w-full md:w-full  p-4 transition-transform -translate-y-full bg-white dark:bg-gray-800"
                            tabindex="-1" aria-labelledby="drawer-top-label">

                            <button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example"
                                class="text-gray-400 5xl:mr-24 mt-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-5 h-5 " fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close menu</span>
                            </button>

                            <ul dir="auto" class="flex items-center justify-center flex-wrap">
                                <li class="m-3 lg:mx-5">
                                    <nuxt-link dir="auto"
                                        class="text-gray-800 dark:text-white text-medium hover:text-purple-600"
                                        to="/resume">
                                        <pdf />
                                    </nuxt-link>
                                </li>
                                <li class="m-3 lg:mx-5">
                                    <nuxt-link dir="auto"
                                        class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/">
                                        <home />

                                    </nuxt-link>
                                </li>
                                <li class="m-3 lg:mx-5">
                                    <nuxt-link dir="auto"
                                        class="text-gray-800 dark:text-white text-medium hover:text-purple-600"
                                        to="/portfolio">
                                        <portfolio />
                                    </nuxt-link>
                                </li>
                                <li class="m-3 lg:mx-5">
                                    <nuxt-link dir="auto"
                                        class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/work">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                        </svg>

                                    </nuxt-link>
                                </li>
                                <li class="m-3 lg:mx-5">
                                    <nuxt-link dir="auto"
                                        class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/blog">
                                        <blog />
                                    </nuxt-link>
                                </li>
                                <li class="m-3 lg:mx-5">
                                    <nuxt-link dir="auto"
                                        class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/video">
                                        <video-svg />
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Navbar />
                    <nuxt />
                </div>
            </div>
        </div>
        <Footer />
    </main>
</template>



<script>
import Navbar from "./Navbar.vue"
import videoSvg from "./svg/videoSvg.vue"
import home from "./svg/home.vue"
import portfolio from "./svg/portfolio.vue"
import pdf from "./svg/pdf.vue"
import PortfolioCover from "./PortfolioCover.vue"
import Sidebar from "./Sidebar.vue"
import Footer from "./Footer.vue"
import blog from "./svg/blog.vue"
import {
    initAccordions,
    initCarousels,
    initCollapses,
    initDials,
    initDismisses,
    initDrawers,
    initDropdowns,
    initModals,
    initPopovers,
    initTabs,
    initTooltips
} from 'flowbite'
export default {
    components: { PortfolioCover, Sidebar, Navbar, videoSvg, home, portfolio, Footer, blog },
    mounted() {
        initAccordions();
        initCarousels();
        initCollapses();
        initDials();
        initDismisses();
        initDrawers()
        initDropdowns();
        initModals()
        initPopovers();
        initTabs();
        initTooltips();
    }
}



</script>

<style></style>