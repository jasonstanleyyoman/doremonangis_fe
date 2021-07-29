import AxiosBase from "./axios";

const GetDorayakis = () => {
  return AxiosBase.get("/v1/dorayaki/all").then((response) => response.data);
};

const AddDorayaki = (dorayaki) => {
  return AxiosBase.post("/v1/dorayaki/new", dorayaki).then(
    (response) => response.data
  );
};

const DeleteDorayaki = (id) => {
  return AxiosBase.delete(`/v1/dorayaki/${id}`).then(
    (response) => response.data
  );
};

export { GetDorayakis, AddDorayaki, DeleteDorayaki };
