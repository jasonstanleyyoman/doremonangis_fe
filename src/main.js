import Vue from 'vue'
import App from './App.vue'
import SemanticUi from "semantic-ui-vue";
import Vuex from "vuex";
import store from "./store";
import feather from 'vue-icon'

Vue.config.productionTip = false


Vue.use(SemanticUi);
Vue.use(feather, 'v-icon')
Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
