import React, { useContext, useEffect, useState } from 'react';
import { IProduct, IPageTitle } from '../types/types';
import ImageCard from '../components/ImageCard';
import GetProduct from '../helpers/GetProduct';
import axios from 'axios';
import { LoadingWhileRequestContext } from '../contexts/LoadingWhileRequestContext';

const Electronics:React.FC<IPageTitle> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });

  const [electroProduct, setElectroProduct] = useState<IProduct[]>();
  const { setIsLoading } = useContext(LoadingWhileRequestContext);
  
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const endpoint: string = 'https://fakestoreapi.com/products/category/electronics';
    
    GetProduct(setElectroProduct, endpoint, source.token, setIsLoading);

    return () => { 
      source.cancel(); 
    }
  }, [setIsLoading]);

  return (
    <div className="flex flex-wrap flex-row gap-x-3 gap-y-5">
      {electroProduct?.map(prod => (
        <ImageCard key={ prod.id } product={ prod } routeFrom='electronics' />
      ))}
    </div>
  )
} 

export default Electronics;