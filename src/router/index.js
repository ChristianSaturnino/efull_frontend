import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Entregas from '@/views/Entregas.vue';
import Registro from '@/views/Registro.vue';
import Redefinir from '@/views/Redefinir-senha.vue';
import About from '@/views/About.vue';
<<<<<<< HEAD

=======
import HereApiComponent from '@/components/HereApiComponent.vue'; // Adicione esta linha
>>>>>>> 86640dea86a296be0e60a9932c49aaef92bc140e

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/redefinir-senha',
    name: 'Redefinir',
    component: Redefinir
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Dashboard
  },
  {
    path: '/entregas',
    name: 'Entregas',
    component: Entregas
  },
  {
<<<<<<< HEAD
    path: '/here-api',
    name: 'HereApi',
=======
    path: '/here-api', // Adicione esta rota
    name: 'HereApi',
    component: HereApiComponent
>>>>>>> 86640dea86a296be0e60a9932c49aaef92bc140e
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
