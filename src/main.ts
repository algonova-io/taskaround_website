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
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {mdi},
    },

})
export const i18n = createI18n({
        locale: navigator.language.split('-')[0],  // Extract the language code from the browser locale (e.g., 'en' from 'en-US')
        fallbackLocale: 'en',
        messageLink: false,
        messages: {
            en: en,
            // de: de,
            // es: es,
            it: it
        }
    }
)
const firebaseConfig = {
    apiKey: "AIzaSyBMJv-wad4LJ7scvIghRkNKKrfMy-AA9LU",
    authDomain: "taskaround-f7d7b.firebaseapp.com",
    projectId: "taskaround-f7d7b",
    storageBucket: "taskaround-f7d7b.firebasestorage.app",
    messagingSenderId: "139007327645",
    appId: "1:139007327645:web:547f0308d6265ed0070374",
    measurementId: "G-Q9VNNBDGBH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
app.use(vuetify)
app.use(router)
app.use(i18n)
app.mount('#app')
export {db}