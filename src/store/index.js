import Vue from "vue";
import Vuex from "vuex";
import StoreModule from "./store";
import DorayakiModule from "./dorayaki";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    store: StoreModule,
    dorayaki: DorayakiModule,
  },
});
export default store;
