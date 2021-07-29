<template>
  <modal @close="$emit('close')">
    <div class="modal">
      <sui-form @submit.prevent="submitForm">
        <sui-header dividing>Store Information</sui-header>
        <sui-form-field>
          <label>Store Name</label>
          <input v-model="name" />
        </sui-form-field>
        <sui-form-field>
          <label>Address</label>
          <input v-model="address" />
        </sui-form-field>
        <sui-form-field>
          <label>Kecamatan</label>
          <input v-model="kecamatan" />
        </sui-form-field>
        <sui-form-field>
          <label>Provinsi</label>
          <input v-model="province" />
        </sui-form-field>
        <sui-button type="submit">Submit</sui-button>
      </sui-form>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";
import { mapActions } from "vuex";
export default {
  name: "AddStoreModal",
  emits: ["close"],
  data: function() {
    return {
      name: "",
      address: "",
      kecamatan: "",
      province: "",
    };
  },
  methods: {
    submitForm() {
      if (
        this.name.length === 0 ||
        this.address.length === 0 ||
        this.kecamatan.length === 0 ||
        this.province.length === 0
      ) {
        this.$toasted.error("Please fill all field");
        return;
      }
      const data = {
        name: this.name,
        address: this.address,
        kecamatan: this.kecamatan,
        province: this.province,
      };
      this.addStore(data).then(() => this.$emit("close"));
    },
    ...mapActions("store/", ["addStore"]),
  },
  components: {
    Modal,
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
