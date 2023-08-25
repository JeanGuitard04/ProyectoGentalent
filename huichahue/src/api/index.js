import axios from "axios";

export const getProduct = async () => {
  return axios
    .get("http://localhost:8080/productos/listaProductos")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
