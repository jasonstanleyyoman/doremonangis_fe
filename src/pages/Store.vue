<template>
  <div class="store">
    <h1 is="sui-header">{{ store.Name && store.Name }}</h1>
    <sui-button basic negative @click="delStore">Delete Store</sui-button>
    <h2 is="sui-header" dividing class="divide-header">
      Dorayaki
      <sui-button primary @click="openAddStockModal">Add Dorayaki</sui-button>
    </h2>
    <sui-table single-line celled>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell :width="1">No.</sui-table-header-cell>
          <sui-table-header-cell :width="4">Flavor</sui-table-header-cell>
          <sui-table-header-cell :width="4">Description</sui-table-header-cell>
          <sui-table-header-cell :width="4">Amount</sui-table-header-cell>
          <sui-table-header-cell :width="7">Action</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body>
        <table-row
          v-for="(dorayaki, idx) in store.DorayakisAmount"
          :key="dorayaki.ID"
          :initialDorayaki="dorayaki"
          :idx="idx + 1"
          :storeId="store.ID"
        ></table-row>
      </sui-table-body>
    </sui-table>
    <add-store-dorayaki-modal
      :options="dorayakiOptions"
      :storeId="store.ID"
      v-if="isAddStockModalOpen"
      @close="isAddStockModalOpen = false"
    ></add-store-dorayaki-modal>
  </div>
</template>

<script>
import TableRow from "../components/TableRow.vue";
import AddStoreDorayakiModal from "../components/AddStockModal.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Store",
  components: {
    TableRow,
    AddStoreDorayakiModal,
  },
  computed: {
    ...mapGetters("store/", ["getStoreById"]),
    ...mapState("dorayaki/", {
      dorayakis: (state) => state.dorayakis,
    }),
    store: function() {
      return this.getStoreById(parseInt(this.$route.params.id));
    },
    notOwnedDorayaki: function() {
      const ownedDorayaki = this.store.Dorayakis;
      return this.dorayakis.filter(
        (dorayaki) =>
          ownedDorayaki.find((owned) => owned.ID === dorayaki.ID) === undefined
      );
    },
    dorayakiOptions: function() {
      return this.notOwnedDorayaki.map((dorayaki) => ({
        text: dorayaki.Flavor,
        value: dorayaki.ID,
      }));
    },
  },
  data: function() {
    return {
      isAddStockModalOpen: false,
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    if (isNaN(id) || this.store === undefined) {
      this.$router.push("/");
    }
    console.log(this.notOwnedDorayaki);
  },
  methods: {
    ...mapActions("store/", ["deleteStore"]),
    delStore() {
      this.deleteStore(this.store.ID);
    },
    openAddStockModal() {
      if (this.dorayakiOptions.length === 0) {
        this.$toasted.error("No possible dorayaki can be added");
        return;
      }

      this.isAddStockModalOpen = true;
    },
  },
  watch: {
    store: function(newStore) {
      if (newStore === undefined) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.store {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
}

.store h2 {
  width: 100%;
}

.divide-header {
  display: flex;
  justify-content: space-between;
}
</style>
