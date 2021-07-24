<template>
  <div class="searchbar">
    <input placeholder="Search . . . . . "/>
    <v-icon name="search"></v-icon>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.searchbar {
  width: calc(100% - 48px);
  margin: 0 24px;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 8px;
  border: 1px solid rgb(182, 182, 182);
  overflow: hidden;
  padding: 0 12px;
}

.searchbar:focus-within {
  border: 1px solid black;
}

.searchbar input {
  width: calc(100% - 12px);
  height: 36px;
  border: none;
  outline: none;
  font-size: 14px;
}

.searchbar .icon-search {
  height: 24px;
}
</style>