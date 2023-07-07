import './assets/main.css';
import './main.d.ts';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import focusable from 'vue-tv-focusable';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(focusable);

app.mount('#app');
