<template>
  <modal @close="$emit('close')">
    <div class="modal">
      <sui-form @submit.prevent="addStock">
        <sui-header dividing>Dorayaki Information</sui-header>
        <sui-form-field>
          <label>Dorayaki Flavor</label>
          <sui-dropdown selection :options="options" v-model="current" />
        </sui-form-field>
        <sui-form-field>
          <label>Amount</label>
          <input v-model="amount" />
        </sui-form-field>
        <sui-button type="submit">Submit</sui-button>
      </sui-form>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";
import { AddStock } from "../api/stock";
export default {
  name: "AddStockModal",
  emits: ["close"],
  props: ["options", "storeId"],
  components: {
    Modal,
  },
  data: function() {
    return {
      current: null,
      amount: "",
    };
  },
  methods: {
    addStock() {
      AddStock(this.storeId, this.current, parseInt(this.amount)).then(
        (data) => {
          this.$store.commit("store/refreshStore", data);
          this.$emit("close");
        }
      );
    },
  },
};
</script>

<style>
.modal {
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 480px;
}
</style>
