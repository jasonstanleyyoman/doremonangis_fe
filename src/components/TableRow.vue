<template>
<sui-table-row>
    <sui-table-cell>1</sui-table-cell>
    <sui-table-cell>Strawberry</sui-table-cell>
    <sui-table-cell>Description</sui-table-cell>
    <sui-table-cell class="counter">
      <v-icon name="minus"></v-icon>
      <p>12</p>
      <v-icon name="plus"></v-icon>
    </sui-table-cell>
</sui-table-row>
</template>

<script>
export default {
  name: "TableRow",

}
</script>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.counter .icon {
  width: 18px;
  cursor: pointer;
}
.counter p {
  border-bottom: 1px solid black;
  
}
</style>