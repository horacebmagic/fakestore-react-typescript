import React, { useEffect } from 'react';
import { IPageTitle } from '../types/types';

const Home:React.FC<IPageTitle> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });
  
  return (
    <div className="flex flex-col gap-y-5">
      <div className="mt-20">
        <p className="text-4xl font-semibold text-indigo-500">React Typescript - Fake Store API</p>
        <p className="mt-10">Fake store rest API for your e-commerce or shopping website prototype.</p>
        <p className="mt-2">
          FakeStoreApi is a free online REST API that you can use whenever you need Pseudo-real data for your 
          e-commerce or shopping website without running any server-side code. It's awesome for teaching purposes, sample codes, tests, etc.
        </p>
        <div className="flex flex-col mt-10">
          <div className="text-indigo-800 font-bold">
            <a className="text-indigo-500 hover:underline font-semibold" href="https://fakestoreapi.com/" rel="noreferrer" target="_blank">fakestoreapi.com</a>
          </div>
          <div className="text-indigo-800 font-bold">
            <a className="text-indigo-500 hover:underline font-semibold" href="https://fakestoreapi.com/docs" rel="noreferrer" target="_blank">
              fakestoreapi.com/docs
            </a>
          </div>
          <div className="text-indigo-800 font-bold">
            <a className="text-indigo-500 hover:underline font-semibold" href="https://github.com/keikaavousi/fake-store-api" rel="noreferrer" target="_blank">
              github.com/keikaavousi/fake-store-api
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Home;