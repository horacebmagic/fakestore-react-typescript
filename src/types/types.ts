import React from "react";

export interface IRoutes {
  name: string;
  path: string;
  component: any;
  exact: boolean;
  props: {
    title: string;
    icon?: React.FC;
    visible: boolean;
    auth: boolean;
  };
}

export interface IPageTitle {
  title: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface IUserToken {
  token: string | null;
  isLoggedin: boolean;
  storeToken: (tokenParam: string) => void;
  removeToken: () => void;
}

// Cart Reducer Type and Action

export interface ICartReducerType {
  type: string,
  payload: IProduct
}

export interface IProductWithQty extends IProduct {
  qty: number;
}

export interface CartState {
  products: IProductWithQty[];
}

export const initialCartState: CartState = {
  products: []
}

export enum ActionType {
  addToCart,
  getCart,
  resetCart,
  removeSingleCart,
  decreaseQty
}

export interface addToCart {
  type: ActionType.addToCart;
  payload: IProduct;
}

export interface getCart {
  type: ActionType.getCart;
}

export interface resetCart {
  type: ActionType.resetCart;
}

export interface removeSingleCart {
  type: ActionType.removeSingleCart;
  payload: IProduct;
}

export interface decreaseQty {
  type: ActionType.decreaseQty;
  payload: IProduct;
}

export type CartAction = addToCart | getCart | resetCart | removeSingleCart | decreaseQty;

//Alert Type
export enum AlertType {
  SuccessLogin,
  SuccessAddedToCart,
  SuccessRemovedFromCart,
}

export interface IShowAlert {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

//Loading While Request Context type

export interface ILoadingWhileRequest {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

//Cart Alert Message Context type
export interface ICartAlertMessage {
  message: string;
  setCartAlertMessage: React.Dispatch<React.SetStateAction<string>>;
}

// export interface ISetState<T>(param: T) {
//   React.Dispatch<React.SetStateAction<param>>
// }