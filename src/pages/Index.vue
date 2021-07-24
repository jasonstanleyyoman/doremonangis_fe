<template>
  <div class="container">
    <sidebar />
    <Content />
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Content from "../components/Content.vue";
export default {
  name: "Index",
  components: {
    Sidebar,
    Content
  }
}
</script>
<style scoped>
.container {
  min-height: 100vh;
  display: flex;
}

.content {
  min-height: 100vh;
}

</style>