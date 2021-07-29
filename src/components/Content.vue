<template>
  <div class="content">
    <h1>Doremonangis</h1>
    <searchbar v-model="query"></searchbar>
    <div class="store-card-container">
      <store-card
        v-for="store in filteredStores"
        :key="store.ID"
        @click="goToStore(store.ID)"
      >
        <h3>{{ store.Name }}</h3>
        <img src="../assets/store.webp" />
        <p>{{ store.Address }}</p>
      </store-card>
      <store-card class="add-store" @click="open = true">
        <h3>Add more store</h3>
        <v-icon name="plus"></v-icon>
      </store-card>
    </div>
    <add-store-modal v-if="open" @close="open = false"> </add-store-modal>
  </div>
</template>

<script>
import Searchbar from "./Searchbar.vue";
import StoreCard from "./StoreCard.vue";
import AddStoreModal from "./AddStoreModal.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Content",
  components: {
    Searchbar,
    StoreCard,
    AddStoreModal,
  },
  data: function() {
    return {
      open: false,
      query: "",
    };
  },
  mounted() {
    this.updateStores();
  },
  methods: {
    ...mapActions("store/", ["updateStores"]),
    goToStore(storeId) {
      this.$router.push(`/store/${storeId}`);
    },
  },
  computed: {
    ...mapState("store/", {
      stores: (state) => state.stores,
    }),
    filteredStores() {
      const loweredCaseQuery = this.query.toLowerCase();
      return this.stores.filter(
        (store) =>
          store.Name.toLowerCase().includes(loweredCaseQuery) ||
          store.Address.toLowerCase().includes(loweredCaseQuery) ||
          store.Kecamatan.toLowerCase().includes(loweredCaseQuery) ||
          store.Province.toLowerCase().includes(loweredCaseQuery)
      );
    },
  },
};
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
  justify-items: center;
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
