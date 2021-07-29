import AxiosBase from "./axios";
// type AlterStockRequest struct {
// 	StoreId    uint `json:"store_id" binding:"required"`
// 	DorayakiId uint `json:"dorayaki_id" binding:"required"`
// 	Amount     int  `json:"amount" binding:"required,gt=0"`
// }

const AddStock = (storeId, dorayakiId, amount) => {
  const data = {
    store_id: storeId,
    dorayaki_id: dorayakiId,
    amount: amount,
  };

  return AxiosBase.post("/v1/store/dorayaki/add", data).then(
    (response) => response.data
  );
};

const RemoveStock = (storeId, dorayakiId, amount) => {
  const data = {
    store_id: storeId,
    dorayaki_id: dorayakiId,
    amount: amount,
  };
  return AxiosBase.post("/v1/store/dorayaki/remove", data).then(
    (response) => response.data
  );
};

const MoveStock = (srcId, destId, dorayakiId, amount) => {
  const data = {
    src: srcId,
    dest: destId,
    dorayaki_id: dorayakiId,
    amount: amount,
  };

  return AxiosBase.post("/v1/store/dorayaki/move", data).then(
    (response) => response.data
  );
};

export { AddStock, RemoveStock, MoveStock };
