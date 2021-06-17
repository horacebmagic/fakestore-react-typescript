import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ImageCard from '../components/ImageCard';
import { LoadingWhileRequestContext } from '../contexts/LoadingWhileRequestContext';
import GetProduct from '../helpers/GetProduct';
import { IPageTitle, IProduct } from '../types/types';

const MenClothing: React.FC<IPageTitle> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });

  const [menClothingProduct, setMenClothingProduct] = useState<IProduct[]>();
  const { setIsLoading } = useContext(LoadingWhileRequestContext);
  
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const endpoint:string = 'https://fakestoreapi.com/products/category/men\'s clothing';
    
    GetProduct(setMenClothingProduct, endpoint, source.token, setIsLoading);
  
    return () => { 
      source.cancel(); 
    }
  }, [setIsLoading]);
  
  return (
    <div className="flex flex-wrap flex-row gap-x-3 gap-y-5">
      {menClothingProduct?.map(prod => (
        <ImageCard key={ prod.id } product={ prod } routeFrom='men-clothing' />
      ))}
    </div>
  )
}

export default MenClothing;