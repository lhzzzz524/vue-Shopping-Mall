import { request } from "./request";

export const getDetail = iid => {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
};

export class Goods {
  constructor(itemInfo, columns, services,myServices) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.desc = itemInfo.discountDesc;
    this.color = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    this.myServices = myServices
  }
}
