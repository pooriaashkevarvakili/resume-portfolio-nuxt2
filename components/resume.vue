<template>
    <div class="flex flex-wrap  md:px-4">
        <div
            class="w-full md:w-11/12 4xl:w-11/12 sm:w-10/12 lg:w-1/2 4xl:ml-6 md:ml-6 2xl:ml-0 xl:ml-0 lg:ml-0  sm:ml-12 5xl:w-8/12">
            <div class="my-4 md:mx-4 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 dark:bg-black  bg-purple-200 rounded-md overflow-hidden">
                    <img src="pdf.png" download="resumefrontenddeveloper" alt="coverImage"
                        class="w-full h-full object-cover object-center" />
                    <div
                        class="absolute dark:bg-green-400  transition duration-200  bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0  ">
                        <ul class="flex flex-wrap ">
                            <li class="m-2 ">
                                <a href="resumepersian.pdf" target="_blank" download rel="noreferrer"
                                    class=" text-xl   text-white flex items-center justify-center    ">
                                    <div class="text-justify">

                                        <h1 class="text-amber-800 dark:text-white">
                                            {{ $t('openLink', {
                                                name:
                                                    'openLink'
                                            }) }}
                                        </h1>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div
            class="w-full lg:w-1/2 4xl:w-11/12 sm:w-10/12 md:w-11/12  5xl:w-8/12 md:ml-6 2xl:ml-0 xl:ml-0 lg:ml-0 4xl:ml-6  sm:ml-12  ml-20">
            <div class="my-4 md:mx-4 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 dark:bg-black  bg-purple-200 rounded-md overflow-hidden">
                    <img src="pdf.png" download="resumefrontenddeveloper" alt="coverImage"
                        class="w-full h-full object-cover object-center" />
                    <div
                        class="absolute dark:bg-green-400  transition duration-200  bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0  ">
                        <ul class="flex flex-wrap ">
                            <li class="m-2 ">
                                <a href="resumeenglish.pdf" target="_blank" download rel="noreferrer"
                                    class=" text-xl   text-white flex items-center justify-center    ">
                                    <div class="text-justify">

                                        <h1 class="text-amber-800 dark:text-white">
                                            {{ $t('openLinkEnlish', {
                                                name:
                                                    'openLinkEnlish'
                                            }) }}
                                        </h1>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div
            class="w-full md:w-11/12 4xl:w-11/12 sm:w-10/12 lg:w-1/2 5xl:w-8/12 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-6 4xl:ml-6 sm:ml-12  ml-20">
            <div class="my-4 md:mx-4 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                <div class="relative mb-6 w-full h-48 dark:bg-black  bg-purple-200 rounded-md overflow-hidden">

                    <div
                        class="absolute dark:bg-green-400  transition duration-200  bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0  ">
                        <ul class="flex flex-wrap ">
                            <li class=" ">
                                <a class="dark:text-white text-xl text-amber-800" href="#openModal-about">{{
                                    $t('openVideo') }}</a>

                                <div id="openModal-about"
                                    class="modalDialog fixed top-0 left-0 pointer-events-none	 opacity-0	 right-0 bottom-0 ">
                                    <div dir="auto">
                                        <a href="#close" title="Close"
                                            class="close bg-red-400 hover:bg-red-500 absolute -right-3 -top-2.5 no-underline pt-1 font-bold rounded-full leading-6 w-9 h-9	text-center text-white">X</a>
                                        <h2>{{ $t('resumeVideo') }}</h2>
                                        <hr class="mt-2" />
                                        <div class="flex items-center justify-center">
                                            <video class="mt-5" width="400" height="240" controls>
                                                <source src="video.mp4" type="video/mp4">
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>


</script>

<style>
.modalDialog {

    background: rgba(0, 0, 0, 0.8);
    z-index: 99999;

    -webkit-transition: opacity 100ms ease-in;
    -moz-transition: opacity 100ms ease-in;
    transition: opacity 100ms ease-in;

}

.modalDialog:target {
    @apply pointer-events-auto opacity-100;


}

.modalDialog>div {
    @apply w-11/12 relative rounded-sm bg-white max-w-xl p-5;
    margin: 10% auto;



}

@media only screen and (max-width: 540px) {
    .modalDialog>div {
        @apply w-11/12 relative rounded-sm bg-white p-5;
        margin: 10% auto;
        max-width: 250px;



    }
}

@media only screen and (max-width: 412px) {
    .modalDialog>div {
        @apply w-11/12 relative rounded-sm bg-white p-5;
        margin: 10% auto;
        max-width: 250px;



    }
}

@media only screen and (max-width: 360px) {
    .modalDialog>div {
        @apply w-11/12 relative rounded-sm bg-white p-5;
        margin: 10% auto;
        max-width: 250px;



    }
}

.close {
    font-family: Arial, Helvetica, sans-serif;

    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;


}
</style>