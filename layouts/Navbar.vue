<template>
    <nav class="md:mx-8 2xl:block xl:block lg:block   hidden px-6 py-2 dark:bg-slate-800   top-0 bg-white shadow rounded">
        <ul class="flex flex-wrap">
            <li class="m-3 lg:mx-5">
                <nuxt-link dir="auto" class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/resume">
                    {{ $t('resume', { name: 'resume' }) }}
                </nuxt-link>
            </li>
            <li class="m-3 lg:mx-5">
                <nuxt-link dir="auto" class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/">
                    {{ $t('aboutNavbar', { name: 'about' }) }}
                </nuxt-link>
            </li>

            <li class="m-3 lg:mx-5">
                <nuxt-link dir="auto" class="text-gray-800 dark:text-white text-medium hover:text-purple-600"
                    to="/portfolio">
                    {{ $t('portfolio', { name: 'portfolio' }) }}
                </nuxt-link>
            </li>
            <li class="m-3 lg:mx-5">
                <nuxt-link dir="auto" class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/work">
                    {{ $t('work', { name: 'work' }) }}
                </nuxt-link>
            </li>
            <li class="m-3 lg:mx-5">
                <nuxt-link dir="auto" class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/blog">
                    {{ $t('blog', { name: 'blog' }) }}
                </nuxt-link>
            </li>
            <li class="m-3 lg:mx-5">
                <nuxt-link dir="auto" class="text-gray-800 dark:text-white text-medium hover:text-purple-600" to="/video">
                    {{ $t('video', { name: 'video' }) }}
                </nuxt-link>
            </li>

        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style></style>