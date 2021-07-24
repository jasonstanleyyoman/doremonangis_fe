<template>
  <div class="content">
    <h1>Doremonangis</h1>
    <searchbar></searchbar>
    <div class="store-card-container">
      <store-card>
        <h3>Judul Toko</h3>
        <img src="../assets/dorayaki.png"/>
        <p>Deskripsi</p>
      </store-card>
      <store-card>
        <h3>Judul Toko</h3>
        <img src="../assets/dorayaki.png"/>
        <p>Deskripsi</p>
      </store-card>
      <store-card class="add-store" @click="open = true">
        <h3>Add more store</h3>
        <v-icon name="plus"></v-icon>
      </store-card>
    </div>
    <add-store-modal v-if="open" @close="open = false">

    </add-store-modal>
  </div>
</template>

<script>
import Searchbar from "./Searchbar.vue";
import StoreCard from "./StoreCard.vue";
import AddStoreModal from "./AddStoreModal.vue"
export default {
  name: "Content",
  components: {
    Searchbar,
    StoreCard,
    AddStoreModal
  },
  data: function() {
    return {
      open: false
    }
  }
}
</script>

<style>
.content {
  width: 100%;
  padding-top: 24px;
}

.content h1 {
  text-align: center;
}

.content .store-card-container {
  display: grid;
  padding: 24px 36px;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.add-store {
  background: transparent !important;
  border: 2px dashed #000;
  justify-content: center;
}

.add-store .icon-plus {
  width: 48px;
}
</style>