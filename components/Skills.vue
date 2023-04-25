<template>
    <div class="py-4">
        <div class="flex flex-wrap">
            <div class="w-full">
                <div class="md:mx-4 ">
                    <h3 dir="auto"
                        class="text-2xl sm:text-center md:ml-6 4xl:text-center 5xl:text-center dark:text-white text-gray-800 font-bold mb-4">
                        {{ $t('Skills', {
                            name:
                                'Skills'
                        })
                        }}</h3>
                </div>
            </div>
            <section class="pb-10">
                <div class="flex flex-wrap md:px-4">
                    <div v-for="item in skills" :key="item.id"
                        class="w-full 4xl:ml-6 4xl:w-11/12 sm:w-10/12 md:w-full lg:w-1/2 5xl:w-8/12 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-14 sm:ml-12 ml-20">
                        <div class="my-4 md:mx-4 shadow p-6 rounded-md dark:bg-slate-800 bg-white group hover:shadow-md">
                            <div class="relative mb-6 w-full h-48 bg-purple-200 rounded-md overflow-hidden">
                                <img :src="item.src" alt="coverImage" class="w-full h-full object-cover object-center" />
                                <div
                                    class="absolute opacity-0 transition duration-200 bg-purple-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                                    <ul class="flex flex-wrap">

                                    </ul>
                                </div>
                            </div>
                            <h3 class="text-lg text-center dark:text-white font-medium text-gray-800 mb-2">
                                {{ item.title }}
                            </h3>

                        </div>
                    </div>



                </div>
            </section>

        </div>
    </div>
</template>

<script setup>

const skills = [
    {
        id: 0,
        src: 'html.png',
        title: "html"


    },
    {
        id: 1,
        src: "css.png",
        title: 'css'


    },
    {
        id: 2,
        src: "bootstrap.png",
        title: 'bootstrap'


    },
    {
        id: 3,
        src: "tailwind.png",
        title: 'tailwind'


    },
    {
        id: 4,
        src: "supabase.jpg",
        title: 'supabase'


    }, {
        id: 5,
        src: "javascript.png",
        title: 'javascript'


    },
    {
        id: 6,
        src: "typescript.png",
        title: 'typescript'

    },
    {
        id: 7,
        src: "vue.png",
        title: "vue"


    },
    {
        id: 8,
        src: "nuxt.png",
        title: "nuxt"


    },
    {
        id: 9,
        src: "git.png",
        title: "git"



    },
    {
        id: 10,
        src: "vuetify.png",
        title: "vuetify"


    },




    {
        id: 11,
        src: "postman.png",
        title: 'postman'

    },

    {
        id: 12,
        src: "pinia.png",
        title: 'pinia'

    },

]
</script>

<style></style>