<template>
    <div class="md:mx-4">
        <div class="sm:text-center md:ml-6 4xl:text-center 5xl:text-center " dir="auto">
            <h3 class="text-2xl   dark:text-white text-gray-800 font-bold mb-4"> {{ $t('who', {
                name: 'WhoamI?'
            }) }}
            </h3>
        </div>

        <div class=" flex items-center">
            <div
                class="hidden 5xl:ml-48 4xl:ml-40 sm:ml-56 md:ml-64 2xl:hidden xl:hidden lg:hidden md:block sm:block 5xl:block 4xl:block">
                <div class="mb-2 w-36 h-12 rounded-lg flex items-center justify-center bg-blue-400">
                    <a class=" text-white" href="#openModal-about">{{ $t('aboutNavbar') }}</a>

                </div>
                <!--modals-->
                <div id="openModal-about"
                    class="modalDialog  fixed top-0 left-0 pointer-events-none	 opacity-0	 right-0 bottom-0">
                    <div>
                        <a href="#close" title="Close"
                            class="close bg-red-400 hover:bg-red-500 absolute -right-3 -top-2.5 no-underline pt-1 font-bold rounded-full leading-6 w-9 h-9	text-center text-white">X</a>
                        <h2>{{ $t('aboutNavbar') }}</h2>
                        <hr class="mt-2" />
                        <p class="mt-5">{{
                            $t('about', {
                                name:
                                    'about'
                            }) }}</p>
                    </div>
                </div>
            </div>
            <div dir="auto" class=" 2xl:block xl:block lg:block hidden ">
                <p class="text-base  dark:text-white font-medium text-slate-700 group-hover:text-slate-900">
                    {{
                        $t('about', {
                            name:
                                'about'
                        }) }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
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
    @apply w-11/12 relative rounded-sm bg-white max-w-xs p-5;
    margin: 10% auto;



}


.close {
    font-family: Arial, Helvetica, sans-serif;

    -moz-box-shadow: 1px 1px 3px #000;
    -webkit-box-shadow: 1px 1px 3px #000;
    box-shadow: 1px 1px 3px #000;


}
</style>