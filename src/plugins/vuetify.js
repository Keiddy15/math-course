// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa'

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#00796B",
        secondary: "#EEE",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
});
