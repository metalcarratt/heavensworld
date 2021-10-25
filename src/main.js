import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Inspiration from '@/pages/Inspiration.vue';
import NewFollower from '@/pages/NewFollower.vue';
import Mountain from '@/pages/Mountain.vue';
import Promote from '@/pages/Promote.vue';
import GameMap from '@/pages/Map.vue';

import Heading from '@/components/Heading.vue';
import Message from '@/components/Message.vue';
import Choices from '@/components/Choices.vue';
import Choice from '@/components/Choice.vue';
import Modal from '@/components/Modal.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Inspiration },
  { path: '/follower', component: NewFollower },
  { path: '/mountain', component: Mountain },
  { path: '/promote', component: Promote },
  { path: '/map', component: GameMap }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.config.productionTip = false


Vue.component('heading', Heading);
Vue.component('message', Message);
Vue.component('choices', Choices);
Vue.component('choice', Choice);
Vue.component('modal', Modal);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
