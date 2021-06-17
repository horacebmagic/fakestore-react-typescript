import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard';
import { LoadingWhileRequestContext } from '../contexts/LoadingWhileRequestContext';
import GetProduct from '../helpers/GetProduct'
import { IProduct, IPageTitle } from '../types/types';

const Jewelery: React.FC<IPageTitle> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });

  const [jewelProduct, setJewelProduct] = useState<IProduct[]>();
  const { setIsLoading } = useContext(LoadingWhileRequestContext);
  
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const endpoint:string = 'https://fakestoreapi.com/products/category/jewelery';
  
    GetProduct(setJewelProduct, endpoint, source.token, setIsLoading);

    return () => { 
      source.cancel(); 
    }
  }, [setIsLoading]);

  return (
    <div className="flex flex-wrap flex-row gap-x-3 gap-y-5">
      {jewelProduct?.map(prod => (
        <ImageCard key={ prod.id } product={ prod } routeFrom='jewelery' />
      ))}
    </div>
  )
}

export default Jewelery;