<template>
  <div class="sidebar">
    <p class="title">Dorayaki</p>

    <sidebar-button
      v-for="(dorayaki, idx) in dorayakis"
      :key="dorayaki.ID"
      @click="toggleModal(idx)"
    >
      <template v-slot:icon>
        <img :src="dorayaki.ImagePath" />
      </template>
      {{ dorayaki.Flavor }}
    </sidebar-button>

    <sidebar-button @click="toggleAddModal">
      <template v-slot:icon>
        <v-icon name="plus"></v-icon>
      </template>
      Add dorayaki
    </sidebar-button>

    <modal v-if="open" @close="open = false">
      <div class="modal">
        <img :src="shownDorayaki.ImagePath" />
        <h4>{{ shownDorayaki.Flavor }}</h4>
        <sui-button color="red" inverted @click="delDorayaki"
          >Delete</sui-button
        >
      </div>
    </modal>
    <add-dorayaki-modal v-if="isAddModalOpen" @close="isAddModalOpen = false">
    </add-dorayaki-modal>
  </div>
</template>

<script>
import SidebarButton from "./SidebarButton.vue";
import Modal from "./Modal.vue";
import AddDorayakiModal from "./AddDorayakiModal.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Sidebar",
  components: {
    SidebarButton,
    Modal,
    AddDorayakiModal,
  },
  data: function() {
    return {
      open: false,
      isAddModalOpen: false,
      shownDorayakiIndex: 0,
    };
  },
  methods: {
    toggleModal(idx) {
      this.shownDorayakiIndex = idx;
      this.open = !this.open;
    },
    toggleAddModal() {
      this.isAddModalOpen = !this.isAddModalOpen;
    },
    delDorayaki() {
      this.deleteDorayaki(this.dorayakis[this.shownDorayakiIndex].ID).then(
        () => (this.open = false)
      );
    },
    ...mapActions("dorayaki/", ["updateDorayakis", "deleteDorayaki"]),
  },
  computed: {
    ...mapState("dorayaki/", {
      dorayakis: (state) => state.dorayakis,
    }),

    shownDorayaki: function() {
      return this.dorayakis[this.shownDorayakiIndex];
    },
  },

  mounted() {
    this.updateDorayakis();
    console.log(this.dorayakis);
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right: 3px solid rgb(196, 196, 196);
  padding-top: 24px;
}
.sidebar .title {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: rgb(119, 119, 119);
}

.modal {
  width: 640px;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 24px;
}

.modal img {
  width: 240px;
  height: 240px;
  object-fit: contain;
  border-radius: 50%;
  background-color: rgb(224, 224, 224);
}
</style>
