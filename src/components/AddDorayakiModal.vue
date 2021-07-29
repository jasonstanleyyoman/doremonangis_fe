<template>
  <modal @close="$emit('close')">
    <div class="modal">
      <sui-form @submit.prevent="submitForm">
        <sui-header dividing>Dorayaki Information</sui-header>
        <sui-form-field>
          <label>Flavor</label>
          <input v-model="flavor" />
        </sui-form-field>
        <sui-form-field>
          <label>Description</label>
          <input v-model="description" />
        </sui-form-field>
        <sui-form-field>
          <label>Image Path</label>
          <input v-model="imagePath" />
        </sui-form-field>
        <sui-button type="submit">Submit</sui-button>
        <sui-message>
          <sui-message-header>Note</sui-message-header>
          <sui-message-list>
            <sui-message-item>
              Please host your image first then input the image link
            </sui-message-item>
          </sui-message-list>
        </sui-message>
      </sui-form>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";
import { mapActions } from "vuex";
export default {
  name: "AddDorayakiModal",
  emits: ["close"],
  components: {
    Modal,
  },
  data: function() {
    return {
      flavor: "",
      description: "",
      imagePath: "",
    };
  },
  methods: {
    ...mapActions("dorayaki/", ["addDorayaki"]),
    submitForm() {
      if (
        this.flavor.length === 0 ||
        this.description.length === 0 ||
        this.imagePath.length === 0
      ) {
        this.$toasted.error("Please fill all field");
        return;
      }
      this.addDorayaki({
        flavor: this.flavor,
        description: this.description,
        image_path: this.imagePath,
      }).then(() => this.$emit("close"));
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
