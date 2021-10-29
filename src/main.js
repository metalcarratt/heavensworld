import Vue from 'vue'
import App from './App.vue'

import Heading from '@/components/Heading.vue';
import Message from '@/components/Message.vue';
import Choices from '@/components/Choices.vue';
import Choice from '@/components/Choice.vue';
import Modal from '@/components/Modal.vue';
import ImgBtn from '@/components/ImgBtn.vue';

Vue.config.productionTip = false

Vue.component('heading', Heading);
Vue.component('message', Message);
Vue.component('choices', Choices);
Vue.component('choice', Choice);
Vue.component('modal', Modal);
Vue.component('img-btn', ImgBtn);

new Vue({
  render: h => h(App)
}).$mount('#app')
