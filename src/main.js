/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import utilDictionary from './utils/utilDictionary'
import { createI18n } from 'vue-i18n'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const i18n = createI18n({
  legacy: false,
  messages: utilDictionary,
  fallbackLocale: 'en',
  locale: navigator.language.startsWith('es') ? 'es' : 'en'
})

const app = createApp(App)

registerPlugins(app)

app.use(i18n).mount('#app')
