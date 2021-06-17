import React, { useContext, useEffect } from 'react'
import ImageCard from '../components/ImageCard';
import { CartAlertMessageContext, ShowAlertContext } from '../contexts/CartAlertMessageContext';
import { DispatchCartContext, UserCartContext } from '../contexts/UserCartContext';
import { ResetCart } from '../helpers/cart.reducer';
import { IPageTitle } from '../types/types';

const Cart: React.FC<IPageTitle> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });
  
  const { state } = useContext(UserCartContext);
  const { dispatch } = useContext(DispatchCartContext);
  const { setIsVisible } = useContext(ShowAlertContext);
  const { setCartAlertMessage } = useContext(CartAlertMessageContext);

  const handleClearCart = (): void => {
    dispatch(ResetCart());
    setIsVisible(true);
    setCartAlertMessage('Item(s) sucesfully removed from cart');
  }

  return (
    <div>
      <div className="py-3">
        {state.products.length > 0 && (
          <button className="text-gray-300 text-xs uppercase bg-indigo-600 px-1 p-0.5 rounded-sm" onClick={ handleClearCart }>Clear All Cart</button>
        )}
      </div>
      <div className="flex flex-wrap flex-row gap-x-3 gap-y-5">
        {state.products.length > 0 
          ? state.products.map(product => (
              <ImageCard key={ product.id } product={ product } cart={ product } routeFrom='cart' />
            ))
          : (
              <span>No Item on The Cart</span>
            )
        }
      </div>
    </div>
  )
}

export default Cart;