import AxiosBase from "./axios";

const GetAllStores = () => {
  return AxiosBase.get("/v1/store/all").then((response) => response.data);
};

const AddStore = (newStore) => {
  return AxiosBase.post("/v1/store/new", newStore).then(
    (response) => response.data
  );
};

const DeleteStore = (id) => {
  return AxiosBase.delete(`/v1/store/${id}`).then((response) => response.data);
};

export { GetAllStores, AddStore, DeleteStore };
