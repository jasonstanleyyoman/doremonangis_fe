<template>
  <modal @close="$emit('close')">
    <div class="modal">
      <sui-form>
        <sui-header dividing>Store Information</sui-header>
        <sui-form-field>
          <label>Store Name</label>
          <input placeholder="First Name" />
        </sui-form-field>
        <sui-form-field>
          <label>Address</label>
          <input placeholder="Last Name" />
        </sui-form-field>
        <sui-form-field>
          <label>Kecamatan</label>
          <input placeholder="Last Name" />
        </sui-form-field>
        <sui-form-field>
          <label>Provinsi</label>
          <input placeholder="Last Name" />
        </sui-form-field>
        <sui-button type="submit">Submit</sui-button>
      </sui-form>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal.vue"
export default {
  name: "AddStoreModal",
  emits: ["close"],
  components: {
    Modal
  }
}
</script>

<style>
.modal {
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 480px;
}
</style>