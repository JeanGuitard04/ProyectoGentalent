import { SET_CERVEZAS } from "./types";

export const setProducts = (cervezas) => ({
  type: SET_CERVEZAS,
  cervezas,
});
