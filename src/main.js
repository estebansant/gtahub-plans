import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPersonWalking } from '@fortawesome/free-solid-svg-icons'

library.add(faPersonWalking)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
