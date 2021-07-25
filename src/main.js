import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// tailwind css
import './tailwindcss/index.scss';

createApp(App)
  .use(router)
  .mount('#app');
