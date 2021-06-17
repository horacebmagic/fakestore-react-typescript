import React, { createContext, ReactNode, useReducer } from 'react';
import { cartReducer } from '../helpers/cart.reducer';
import { CartState, CartAction, initialCartState } from '../types/types';

interface Props {
  children: ReactNode;
}

interface ICart {
  state: CartState;
}

interface IDispatch {
  dispatch: React.Dispatch<CartAction>;
}

export const UserCartContext = createContext<ICart>({ state: initialCartState });
export const DispatchCartContext = createContext<IDispatch>({ dispatch: () => null });

const UserCartContextProvider: React.FC<Props> = ({ children }) => {
  //const [state, dispatch] = useLocalStorageReducer('cart', initialCartState, cartReducer);
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const vstate = React.useMemo(() => ({state}), [state]);
  const vdispatch = React.useMemo(() => ({dispatch}), [dispatch]);
  
  return (
    <UserCartContext.Provider value={ vstate }>
      <DispatchCartContext.Provider value={ vdispatch }>
        { children }
      </DispatchCartContext.Provider>
    </UserCartContext.Provider>
  )
}

export default UserCartContextProvider;