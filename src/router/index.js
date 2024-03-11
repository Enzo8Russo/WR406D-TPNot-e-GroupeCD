import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CardList from '@/views/CardList.vue';
import SetList from '@/views/SetList.vue';
import SearchCard from '@/views/SearchCard.vue';
import FilterCard from '@/views/FilterCard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cards', component: CardList },
  { path: '/sets', component: SetList },
  { path: '/search', component: SearchCard },
  { path: '/filter', component: FilterCard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
