import './style.css'
import {createApp} from 'vue'
import App from './App.vue'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import '@mdi/font/css/materialdesignicons.css'
import {createI18n} from "vue-i18n";
import router from "./router";

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
})
export const i18n = createI18n({
        locale: navigator.language.split('-')[0],  // Extract the language code from the browser locale (e.g., 'en' from 'en-US')
        fallbackLocale: 'en',
        messages: {
            // en: en,
            // de: de,
            // es: es,
            // it: it
        }
    }
)
app.use(vuetify)
app.use(router)
app.use(i18n)
app.mount('#app')