<template>
  <sui-table-row>
    <sui-table-cell>{{ idx }}</sui-table-cell>
    <sui-table-cell>{{ initialDorayaki.Flavor }}</sui-table-cell>
    <sui-table-cell>{{ initialDorayaki.Description }}</sui-table-cell>
    <sui-table-cell class="counter">
      <div @click="alterDorayaki(-1)">
        <v-icon name="minus"></v-icon>
      </div>
      <p>{{ updatedDorayaki.Amount }}</p>
      <div @click="alterDorayaki(1)">
        <v-icon name="plus"></v-icon>
      </div>
    </sui-table-cell>
    <sui-table-cell>
      <sui-button color="red" @click="deleteDorayaki">Delete</sui-button>
      <sui-button color="orange" @click="isMoveStockModalOpen = true"
        >Move</sui-button
      >
      <sui-button
        color="green"
        v-if="initialDorayaki.Amount !== updatedDorayaki.Amount"
        @click="saveDorayaki"
        >Save</sui-button
      >
    </sui-table-cell>
    <move-stock-modal
      v-if="isMoveStockModalOpen"
      @close="isMoveStockModalOpen = false"
      :storeId="storeId"
      :dorayaki="initialDorayaki"
    />
  </sui-table-row>
</template>

<script>
import MoveStockModal from "./MoveStockModal.vue";
import { RemoveStock, AddStock } from "../api/stock";
export default {
  name: "TableRow",
  props: ["initialDorayaki", "idx", "storeId"],
  data: function() {
    return {
      updatedDorayaki: this.initialDorayaki,
      isMoveStockModalOpen: false,
    };
  },
  methods: {
    alterDorayaki(amount) {
      this.updatedDorayaki.Amount += amount;
    },
    deleteDorayaki() {
      RemoveStock(
        this.storeId,
        this.initialDorayaki.ID,
        this.initialDorayaki.Amount
      ).then((data) => this.$store.commit("store/refreshStore", data));
    },
    saveDorayaki() {
      let task = null;
      if (this.updatedDorayaki.Amount > this.initialDorayaki.Amount) {
        const amount =
          this.updatedDorayaki.Amount - this.initialDorayaki.Amount;
        task = AddStock(this.storeId, this.initialDorayaki.ID, amount);
      } else if (this.updatedDorayaki.Amount < this.initialDorayaki.Amount) {
        const amount =
          this.initialDorayaki.Amount - this.updatedDorayaki.Amount;
        task = RemoveStock(this.storeId, this.initialDorayaki.ID, amount);
      }

      if (task === null) {
        return;
      }

      task.then((data) => this.$store.commit("store/refreshStore", data));
    },
  },
  watch: {
    initialDorayaki: function(newValue) {
      this.updatedDorayaki = { ...newValue };
    },
  },
  components: {
    MoveStockModal,
  },
};
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
