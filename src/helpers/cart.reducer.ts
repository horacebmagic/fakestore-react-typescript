import { CartState, CartAction, ActionType, IProduct, addToCart, getCart, resetCart, removeSingleCart, IProductWithQty, decreaseQty } from "../types/types";

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case ActionType.addToCart:
      //console.log('state:', state.products, state.products.length);
      const findById: IProductWithQty[] = state.products.filter(({id}) => id === action.payload.id);
      if (findById.length > 0) {
        const increaseQty: IProductWithQty[] = state.products.map(prod => {
          if (prod.id === action.payload.id) {
            //console.log('true', { ...prod, qty: prod.qty + 1 })
            return { ...prod, qty: prod.qty + 1 } 
          } else {
            //console.log('false')
            return { ...prod }
          }
        });
        //console.log('update qty:', { products: [...updateQty] });
        return { products: [...increaseQty] };
      }
      //console.log('first item:', { products: [...state.products, {...action.payload, qty: 1}] });
      return { products: [...state.products, {...action.payload, qty: 1}] };
    case ActionType.getCart:
      console.log('euy', { products: [...state.products] });
      return { products: [...state.products] };
    case ActionType.resetCart:
      return { products: [] };
    case ActionType.removeSingleCart:
      const filterCart: CartState = { products: state.products.filter(product => { return product.id !== action.payload.id }) };
      //console.log('remove single item from cart:', filterCart);
      return filterCart;
    case ActionType.decreaseQty:
      const getQtyById: number[] = state.products.filter(({id}) => id === action.payload.id).map(prod => prod.qty);
      if (getQtyById[0] > 1) {
        const decreaseQty: IProductWithQty[] = state.products.map(prod => {
          if (prod.id === action.payload.id) {
            //console.log('true', { ...prod, qty: prod.qty + 1 })
            return { ...prod, qty: prod.qty - 1 } 
          } else {
            //console.log('false')
            return { ...prod }
          }
        });
        //console.log('update qty:', { products: [...updateQty] });
        return { products: [...decreaseQty] };
      }
      return { products: state.products.filter(product => { return product.id !== action.payload.id }) };
    default:
      return state;
  }
}

export const AddToCart = (product: IProduct): addToCart => ({
  type: ActionType.addToCart,
  payload: product
});

export const GetCart = (): getCart => ({
  type: ActionType.getCart
});

export const ResetCart = (): resetCart => ({
  type: ActionType.resetCart
});

export const RemoveSingleCart = (product: IProduct): removeSingleCart => ({
  type: ActionType.removeSingleCart,
  payload: product
});

export const DecreaseQty = (product: IProduct): decreaseQty => ({
  type: ActionType.decreaseQty,
  payload: product
});

export { cartReducer }