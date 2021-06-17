import React, { createContext, ReactNode } from 'react';
import { useShowAlert, useAlertCartMessage } from '../helpers/useAlertCartMessage';
import { ICartAlertMessage, IShowAlert } from '../types/types';

interface Props {
  children: ReactNode;
}

export const ShowAlertContext = createContext<IShowAlert>({ isVisible: false, setIsVisible: () => undefined });

export const CartAlertMessageContext = createContext<ICartAlertMessage>({ message: '', setCartAlertMessage: () => undefined });

const AlertContextProvider: React.FC<Props> = ({ children }) => {
  const showAlertStuff = useShowAlert(false);
  const cartAlertMessageStuff = useAlertCartMessage('');
  return (
    <ShowAlertContext.Provider value={ showAlertStuff }>
      <CartAlertMessageContext.Provider value={ cartAlertMessageStuff }>
        { children }
      </CartAlertMessageContext.Provider>
    </ShowAlertContext.Provider>
  )
}

export default AlertContextProvider;