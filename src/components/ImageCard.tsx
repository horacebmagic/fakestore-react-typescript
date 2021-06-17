import React, { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { CartAlertMessageContext, ShowAlertContext } from '../contexts/CartAlertMessageContext';
import { DispatchCartContext } from '../contexts/UserCartContext';
import { AddToCart, RemoveSingleCart, DecreaseQty } from '../helpers/cart.reducer';
import { IProduct, IProductWithQty } from '../types/types';
import { CartIcon, RemoveIcon, MinusIcon, PlusIcon } from './Icons';

interface Props {
  product: IProduct;
  routeFrom: string;
  cart?: IProductWithQty;
}

const ImageCard:React.FC<Props> = ({ product, routeFrom, cart }) => {
  const { dispatch } = useContext(DispatchCartContext);
  const { setCartAlertMessage } = useContext(CartAlertMessageContext);
  const { setIsVisible } = useContext(ShowAlertContext);
  //const [cart, setCart] = UseLocalStrorage('cart', {});

  console.log('img card');

  const handleAddToCart = (product: IProduct) => {
    dispatch(AddToCart(product));
    setIsVisible(true);
    setCartAlertMessage('Item sucesfully added to cart');
    //setCart({ ...product, product });
  }

  const handleAddQty = (product: IProduct) => {
    dispatch(AddToCart(product));
    //setCart({ ...product, product });
  }

  const handleDecreaseQty = (product: IProduct) => {
    if (cart?.qty && cart?.qty === 1) {
      dispatch(DecreaseQty(product));
      setIsVisible(true);
      setCartAlertMessage('Item sucesfully removed to cart');
    }
    dispatch(DecreaseQty(product));
    //setCart({ ...product, product });
  }

  const handleRemoveSingleCart = (product: IProduct) => {
    dispatch(RemoveSingleCart(product));
    setIsVisible(true);
    setCartAlertMessage('Item sucesfully removed from cart');
    //setCart({ ...product, product });
  }

  return (
    <div className="w-40 bg-white border-gray-300 rounded-md tracking-wide shadow-lg">
      <div id="header" className="flex flex-col"> 
        <img alt={ product.title } className="w-full h-32 object-cover rounded-t-md" src={ product.image } />
        <div id="body" className="flex flex-col px-2">
            <div className="h-14 overflow-ellipsis overflow-hidden">
            {routeFrom === 'cart' 
              ? (
                <p className="text-xs font-semibold py-1 cursor-pointer hover:underline">
                  <span className="cursor-pointer">{ product.title }</span>
                </p>
              )
              : (
                <p className="text-xs font-semibold py-1 cursor-pointer hover:underline">
                  <Link to={routeFrom+'/'+product.id} target="_blank" rel="noopener noreferrer">{ product.title }</Link>
                </p>
              )
            }
            </div>
            <div className="py-1 flex justify-between">
              {routeFrom === 'cart' 
                ? (
                  <p className="font-semibold text-sm text-blue-600">
                    ${ cart?.price }  
                  </p>
                )
                : (
                  <p className="font-semibold text-sm text-blue-600">${ product.price }</p>
                )
              }
              {routeFrom !== 'cart' && 
                <p className="font-semibold text-sm text-blue-800 cursor-pointer" onClick={() => { handleAddToCart(product) }}>
                  <CartIcon />
                </p>
              }
              {routeFrom === 'cart' && 
                <p className="font-semibold text-sm text-blue-800 cursor-pointer" onClick={() => { handleRemoveSingleCart(product) }}>
                  <RemoveIcon />
                </p>
              }
            </div>
            {routeFrom === 'cart' && (
              <div className="py-1 flex justify-between font-semibold text-sm text-blue-600">
                <span className="cursor-pointer" onClick={() => handleDecreaseQty(product) }><MinusIcon /></span> 
                  { cart?.qty }
                <span className="cursor-pointer" onClick={() => handleAddQty(product) }><PlusIcon /></span>
              </div>
            )}
        </div>
      </div>
    </div>
  )
} 

export default memo(ImageCard);