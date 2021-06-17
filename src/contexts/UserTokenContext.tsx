import { createContext, ReactNode } from 'react';
import useUserTokenState from '../helpers/useUserTokenState';
import { IUserToken } from '../types/types';

export const UserTokenContext = createContext<IUserToken>({
  token: null,
  isLoggedin: false,
  storeToken: (tokenParam: string) => {},
  removeToken: () => {}
})

interface Props {
  children: ReactNode
}

export const UseUserTokenContextProvider: React.FC<Props> = ({ children }) => {
  const userTokenStuff = useUserTokenState('');
  return (
    <UserTokenContext.Provider value={ userTokenStuff }>
      { children }
    </UserTokenContext.Provider>
  )
}