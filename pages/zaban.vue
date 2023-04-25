<template>
    <div>
        <select v-model="selectedLang" @change="changeLocale">
            <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
        </select>

    </div>
</template>
  
<script>
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