import './style.css'
import {createApp} from 'vue'
import App from './App.vue'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import {createI18n} from "vue-i18n";
import 'vuetify/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import en from "./i18n/en.ts";
import it from "./i18n/it.ts";
import router from "./router";
import {mdi} from "vuetify/iconsets/mdi";


const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: { mdi },
    },

})
export const i18n = createI18n({
        locale: navigator.language.split('-')[0],  // Extract the language code from the browser locale (e.g., 'en' from 'en-US')
        fallbackLocale: 'en',
        messages: {
             en: en,
            // de: de,
            // es: es,
             it: it
        }
    }
)
app.use(vuetify)
app.use(router)
app.use(i18n)
app.mount('#app')