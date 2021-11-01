import { request } from "./request";

export const getDetail = iid => {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
};
