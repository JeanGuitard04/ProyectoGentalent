import { SET_PRODUCTS } from "@/actions/types";

const initialState = {
  productos: [],
};

export const productosReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, productos: action.cervezas };
  }
};
