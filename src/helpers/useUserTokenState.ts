import { UseLocalStrorage } from './useLocalStorage';

function useUserTokenState(initialToken: string) {
  const [token, setToken] = UseLocalStrorage('token', initialToken);
  const isLoggedin: boolean = token !== '' ? true : false; 
  return {
    token,
    isLoggedin,
    storeToken: (tokenParam: string) => {
      setToken(tokenParam);
    },
    removeToken: () => {
      setToken('');
      window.localStorage.removeItem('token');
    }
  } 
}

export default useUserTokenState;