/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css' 
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          background: '#121212', // Color de fondo
          surface: '#1d1d1d', // Color de superficie (tarjetas, modales, etc.)
          primary: '#1e88e5', // Color primario
          secondary: '#ff4081', // Color secundario
          accent: '#ff5722', // Color de acento
          error: '#f44336', // Color para errores
          info: '#2196f3', // Color de información
          success: '#4caf50', // Color de éxito
          warning: '#ff9800', // Color de advertencia
        },
      },
      light: {
        colors: {
          background: '#ffffff', // Color de fondo
          surface: '#f5f5f5', // Color de superficie (tarjetas, modales, etc.)
          primary: '#1976d2', // Color primario
          secondary: '#424242', // Color secundario
          accent: '#e91e63', // Color de acento
          error: '#f44336', // Color para errores
          info: '#2196f3', // Color de información
          success: '#4caf50', // Color de éxito
          warning: '#ff9800', // Color de advertencia
        },
      },
  },
},
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})
