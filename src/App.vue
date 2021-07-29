<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  methods: {
    ...mapActions("store/", ["updateStores"]),
    ...mapActions("dorayaki/", ["updateDorayakis"]),
  },
};
</script>

<style>
body {
  background-color: rgb(248, 248, 248);
  font-family: "Poppins", sans-serif !important;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
