<template>
  <button @click="$emit('click')">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "SidebarButton",
  emits: ["click"]
}
</script>

<style scoped>
img {
  --image-size: 36px;
  width: var(--image-size);
  height: var(--image-size);
  margin-right: 8px;
  border-radius: 50%;
  object-fit: contain;
}

button {
  height: 50px;
  width: 100%;
  border-radius: 6px;
  margin: 2px 0;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 8px;
  font-size: 16px;
}

button:hover {
  background: rgb(221, 221, 221);
}

.icon {
  width: 36px;
  height: 36px;
  margin-right: 8px;
}
</style>