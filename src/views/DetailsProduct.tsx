import React, { useContext, useEffect, useRef, useState } from 'react';
import { IProduct, IPageTitle } from '../types/types';
import GetProduct from '../helpers/GetProduct';
import axios from 'axios';
import { useParams } from 'react-router';
import { LoadingWhileRequestContext } from '../contexts/LoadingWhileRequestContext';

const DetailsProduct:React.FC<IPageTitle> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });

  const { id } = useParams<{id: string}>();

  const [product, setProduct] = useState<IProduct>();
  const { setIsLoading } = useContext(LoadingWhileRequestContext);
  
  let isMounted = useRef(true);
  
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const endpoint:string = `https://fakestoreapi.com/products/${id}`;
    
    if (isMounted.current) {
      GetProduct(setProduct, endpoint, source.token, setIsLoading);
    } else console.log('unmounted');

    return () => { 
      isMounted.current = false; 
      source.cancel(); 
    }
  }, [id, setIsLoading]);

  return (
    <div className="flex flex-wrap flex-col gap-x-3">
      <img alt={ product?.title } className="w-1/3 object-cover rounded-t-md" src={ product?.image } />
      <p className="text-lg font-semibold py-1 cursor-pointer hover:underline">{ product?.title }</p>
      <p className="text-base py-1">{ product?.description }</p>
    </div>
  )
} 

export default DetailsProduct;