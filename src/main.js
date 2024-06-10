import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import axios from 'axios';
<<<<<<< HEAD
// src/main.js
=======
>>>>>>> 86640dea86a296be0e60a9932c49aaef92bc140e

// Criação de uma instância de axios
const axiosInstance = axios.create({
  baseURL: 'https://localhost:7044',
});

<<<<<<< HEAD
// Criação de uma instância de axios
const axiosInstance = axios.create({
  baseURL: 'https://localhost:7044',
});

// Criação da aplicação Vue
const app = createApp(App);

=======
// Criação da aplicação Vue
const app = createApp(App);

>>>>>>> 86640dea86a296be0e60a9932c49aaef92bc140e
// Configuração global do axios
app.config.globalProperties.$axios = axiosInstance;

// Uso do roteador
app.use(router);

// Montagem da aplicação
app.mount('#app');
