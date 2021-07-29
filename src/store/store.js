import { mockStores } from "./data";
import { GetAllStores, AddStore, DeleteStore } from "../api/store";
import { MoveStock } from "../api/stock";
const StoreModule = {
  namespaced: true,
  state: () => ({
    stores: mockStores,
  }),
  getters: {
    getStoreById: (state) => (id) => {
      return state.stores.find((store) => store.ID === id);
    },
  },
  mutations: {
    updateStores(state, newStores) {
      state.stores = [...newStores];
    },
    addStore(state, newStore) {
      state.stores = [...state.stores, newStore];
    },
    deleteStore(state, id) {
      state.stores = state.stores.filter((store) => store.ID !== id);
    },
    refreshStore(state, newStore) {
      let tempStores = [...state.stores];
      for (let i = 0; i < tempStores.length; i++) {
        if (tempStores[i].ID === newStore.ID) {
          tempStores[i] = { ...newStore };
        }
      }
      state.stores = [...tempStores];
    },
  },
  actions: {
    sampleAction(context) {
      console.log(context);
    },
    updateStores({ commit }) {
      return GetAllStores().then((response) =>
        commit("updateStores", response)
      );
    },
    addStore({ commit }, newStore) {
      return AddStore(newStore).then((response) =>
        commit("addStore", response)
      );
    },
    deleteStore({ commit }, id) {
      return DeleteStore(id).then(() => commit("deleteStore", id));
    },
    moveStock({ commit }, payload) {
      return MoveStock(
        payload.srcId,
        payload.destId,
        payload.dorayakiId,
        payload.amount
      ).then((data) => {
        commit("refreshStore", data.src);
        commit("refreshStore", data.dest);
      });
    },
  },
};

export default StoreModule;
