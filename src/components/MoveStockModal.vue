<template>
  <modal @close="$emit('close')">
    <div class="modal">
      <sui-form @submit.prevent="move">
        <sui-header dividing>Moving {{ dorayaki.Flavor }}</sui-header>
        <sui-form-field>
          <label>Target Store</label>
          <sui-dropdown selection :options="storeOption" v-model="current" />
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
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "MoveStockModal",
  emits: ["close"],
  props: ["storeId", "dorayaki"],
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
    move() {
      const amount = parseInt(this.amount);
      if (isNaN(amount)) {
        this.$toasted.error("Amount must be a number");
        return;
      }

      if (amount <= 0) {
        this.$toasted.error("Amount must be a greater than zero");
        return;
      }

      if (amount > this.dorayaki.Amount) {
        this.$toasted.error(
          `Moving stock only can be done when amount less than or equal ${this.dorayaki.Amount}`
        );
        return;
      }

      if (this.current === null) {
        this.$toasted.error("Please fill destination store");
        return;
      }
      const data = {
        srcId: this.storeId,
        destId: this.current,
        dorayakiId: this.dorayaki.ID,
        amount: amount,
      };

      this.moveStock(data).then(() => this.$emit("close"));
    },
    ...mapActions("store/", ["moveStock"]),
  },
  computed: {
    ...mapState("store/", {
      stores: (state) => state.stores,
    }),
    ...mapGetters("store/", ["getStoreById"]),
    storeOption: function() {
      return this.stores
        .filter((store) => store.ID !== this.storeId)
        .map((store) => ({ text: store.Name, value: store.ID }));
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
