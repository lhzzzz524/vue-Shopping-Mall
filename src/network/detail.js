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
  constructor(itemInfo, columns, services, myServices) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.desc = itemInfo.discountDesc;
    this.color = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
    this.myServices = myServices;
  }
}

export class Shop {
  constructor(shopInfo, myTotal) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.allTreasure = shopInfo.cFans;
    this.score = shopInfo.score;
    this.total = myTotal;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // images可能没有值，所以要判断一下
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables
  }
}