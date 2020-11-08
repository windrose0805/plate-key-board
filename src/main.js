import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Popup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Popup);

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
