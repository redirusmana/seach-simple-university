import { apiGet } from "./api";

export const apiUnivIndex = "/search";
export const apiUnivGet = params => {
  const url = `${apiUnivIndex}`;
  return apiGet(url, { params });
};
