<template>
  <div class="store-card" v-bind="$attrs" @click="$emit('click')">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "StoreCard",
  emits: ["click"]
}
</script>

<style scoped>
.store-card {
  width: 200px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(228, 228, 228);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding-top: 24px;
}

.store-card h3,
.store-card p {
  text-align: center;
}

.store-card img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 0 auto;
  border: 3px solid rgb(131, 131, 131);
  border-radius: 50%;
}

.store-card:hover {
  transform: translateY(-4px);
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3);
}

</style>