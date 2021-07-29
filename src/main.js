import Vue from "vue";
import SemanticUi from "semantic-ui-vue";
import router from "./routes";
import store from "./store";
import feather from "vue-icon";
import App from "./App.vue";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;

Vue.use(SemanticUi);
Vue.use(Toasted, {
  duration: 2000,
});
Vue.use(feather, "v-icon");

async function Mount() {
  await store.dispatch("dorayaki/updateDorayakis");
  await store.dispatch("store/updateStores");
  new Vue({
    router,
    store: store,
    render: (h) => h(App),
  }).$mount("#app");
}

Mount();
