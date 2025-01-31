import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

// Importation de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import des packs d'icônes nécessaires
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular icons

// Ajout des icônes à la bibliothèque
library.add(fas, far);

// Création de l'application Vue
createApp(App)
  .use(router) // Utilisation du routeur
  .component('font-awesome-icon', FontAwesomeIcon) // Déclaration du composant global
  .mount('#app');
