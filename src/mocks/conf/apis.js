import { rest } from "msw";

const api = (base) => ({
  get: (path, handler, enabled = true) =>
    enabled ? rest.get(`${base}${path}`, handler) : null,
  put: (path, handler, enabled = true) =>
    enabled ? rest.put(`${base}${path}`, handler) : null,
  head: (path, handler, enabled = true) =>
    enabled ? rest.head(`${base}${path}`, handler) : null,
  post: (path, handler, enabled = true) =>
    enabled ? rest.post(`${base}${path}`, handler) : null,
  patch: (path, handler, enabled = true) =>
    enabled ? rest.patch(`${base}${path}`, handler) : null,
  delete: (path, handler, enabled = true) =>
    enabled ? rest.delete(`${base}${path}`, handler) : null,
  options: (path, handler, enabled = true) =>
    enabled ? rest.options(`${base}${path}`, handler) : null,
});


const BASE_URL = process.env.REACT_APP_API_URL;

const baseApi = api(BASE_URL);

export { baseApi };
