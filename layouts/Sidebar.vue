<template>
    <aside class="  dark:bg-slate-800 bg-white md:mx-6 lg:mx-6 mb-8 p-6 shadow-md rounded-md -mt-40">
        <div class="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
            <img src="pooriavakili.jpg" alt="shafiqhammad" class="w-full rounded-full" />
        </div>
        <div class="text-center">
            <button @click="toggle()">
                <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 fill-black dark:fill-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6 fill-black dark:fill-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
            </button>
            <form class="flex items-center justify-center ">
                <div>
                    <select v-model="selectedLang" @change="changeLocale">
                        <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
                    </select>

                </div>
            </form>
            <h1 dir="auto" class="text-xl dark:text-white mt-5 text-gray-800  mb-1">
                {{ $t('pooriavakili', { name: 'pooriavakili' }) }}
            </h1>
            <p dir="auto" class=" dark:text-white  text-gray-400 mb-3">
                {{ $t('frontend', { name: 'frontend' }) }}

            </p>

            <div class="flex flex-col">
                <div class="dark:text-white"> {{ $t('mobilePhone', { name: 'mobilePhone' }) }}
                </div>
                <div class="dark:text-white">
                    {{ $t('mobile', { name: 'mobile' }) }}

                </div>

            </div>

            <ul class="flex flex-wrap justify-center">
                <li class="m-2">
                    <a href="https://github.com/pooriaashkevarvakili"
                        class="w-8 h-8 bg-purple-100 rounded  flex items-center justify-center ">
                        <svg class="fill-black hover:fill-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"
                            width="20px" height="20px">
                            <path
                                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                        </svg>
                    </a>

                </li>
                <li class="m-2">
                    <a href="https://www.linkedin.com/in/pooriavakili"
                        class="w-8 h-8 bg-purple-100 rounded  flex items-center justify-center hover:text-white ">
                        <svg class="fill-black hover:fill-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"
                            width="20px" height="20px">
                            <path
                                d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" />
                        </svg>

                    </a>

                </li>
                <li class="m-2">
                    <a href="https://api.whatsapp.com/send/?phone=989376720694&text&type=phone_number&app_absent=0"
                        class="w-8 h-8 bg-purple-100 rounded  flex items-center justify-center hover:text-white ">
                        <svg class="fill-black hover:fill-purple-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            width="20px" height="20px">
                            <path
                                d="M19.077,4.928c-2.082-2.083-4.922-3.134-7.904-2.894C7.164,2.356,3.65,5.144,2.474,8.99 c-0.84,2.748-0.487,5.617,0.881,7.987L2.059,21.28c-0.124,0.413,0.253,0.802,0.67,0.691l4.504-1.207 c1.459,0.796,3.101,1.215,4.773,1.216h0.004c4.195,0,8.071-2.566,9.412-6.541C22.728,11.563,21.762,7.616,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767 c-0.125-0.167-1.019-1.353-1.019-2.581S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006 c0.178,0.007,0.375,0.016,0.562,0.431c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416 c-0.125,0.146-0.262,0.325-0.374,0.437c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728 c0.954,0.85,1.757,1.113,2.007,1.239c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978 s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812c0.25,0.125,0.416,0.187,0.478,0.291 C17.106,14.471,17.106,14.971,16.898,15.554z" />
                        </svg>
                    </a>

                </li>
                <li class="m-2">
                    <a href="mailto:pooriavakili09@gmail.com"
                        class="w-8 h-8  fill-black hover:fill-purple-500 bg-purple-100 rounded   flex items-center justify-center hover:text-white hover:bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            class="bi bi-envelope-fill fill-black hover:fill-purple-400" viewBox="0 0 16 16">
                            <path
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                    </a>

                </li>
            </ul>
        </div>

    </aside>
</template>
<script >
import { useDark, useToggle } from "@vueuse/core"

export default {
    data() {
        return {
            languages: [
                { code: 'en', name: 'English' },
                { code: 'fa', name: 'Farsi' }
            ],
            selectedLang: this.$i18n.locale
        };
    },
    methods: {
        changeLocale() {
            this.$i18n.locale = this.selectedLang;
        }
    }

};
</script>

<script setup>
const isDark = useDark()
const toggle = useToggle(isDark)
</script>
<style></style>