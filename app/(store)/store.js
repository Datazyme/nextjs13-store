import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  product: {},
  opneModal: false,
  setOpenModal: () => {
    set((state) => {
      return {
        ...state,
        opneModal: !state.opneModal
      };
    });
  },

  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return {
        ...state,
        product: newProduct
      };
    });
  },
  addItemsToCart: (params) => {
    const { newItem } = params;
    set((state) => {
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart
      };
    });
  },
  removeItemsFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart
      };
    });
  },
  emptyCart: () => {
    set((state) => {
      const newCart = [];
      return {
        ...state,
        cart: newCart
      };
    });
  }
}));
export default useCart;
