import { mockDorayaki } from "./data";
import { AddDorayaki, GetDorayakis, DeleteDorayaki } from "../api/dorayaki";
const DorayakiModule = {
  namespaced: true,
  state: () => ({
    dorayakis: mockDorayaki,
  }),
  getters: {
    getDorayakiById: (state) => (id) => {
      return state.dorayakis.find((dorayaki) => dorayaki.ID === id);
    },
  },
  mutations: {
    updateDorayaki(state, newDorayakis) {
      state.dorayakis = newDorayakis;
    },
    addDorayaki(state, newDorayaki) {
      state.dorayakis = [...state.dorayakis, newDorayaki];
    },
    deleteDorayaki(state, id) {
      state.dorayakis = state.dorayakis.filter(
        (dorayaki) => dorayaki.ID !== id
      );
    },
  },
  actions: {
    updateDorayakis({ commit }) {
      return GetDorayakis().then((response) =>
        commit("updateDorayaki", response)
      );
    },
    addDorayaki({ commit }, dorayaki) {
      return AddDorayaki(dorayaki).then((response) =>
        commit("addDorayaki", response)
      );
    },
    deleteDorayaki({ commit, dispatch }, id) {
      return DeleteDorayaki(id)
        .then(() => commit("deleteDorayaki", id))
        .then(() => dispatch("store/updateStores", {}, { root: true }));
    },
  },
};

export default DorayakiModule;
