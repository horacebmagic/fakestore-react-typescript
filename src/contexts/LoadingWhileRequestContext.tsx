import React, { createContext, ReactNode } from 'react';
import useLoadingWhileRequestState from '../helpers/useLoadingWhileRequestState';
import { ILoadingWhileRequest } from '../types/types';

interface Props {
  children: ReactNode
}

export const LoadingWhileRequestContext = createContext<ILoadingWhileRequest>({ isLoading: false, setIsLoading: () => undefined });

const LoadingWhileRequestContextProvider: React.FC<Props> = ({ children }) => {
  const loadingStuff = useLoadingWhileRequestState(false);
  return ( 
    <LoadingWhileRequestContext.Provider value={ loadingStuff }>
      { children }
    </LoadingWhileRequestContext.Provider>
  )
} 

export default LoadingWhileRequestContextProvider;