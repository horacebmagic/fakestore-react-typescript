import { useReducer, useEffect } from 'react';
import { CartAction, CartState, initialCartState } from '../types/types';

function useLocalStorageReducer(key: string, initialValue: typeof initialCartState, reducer: (state: CartState, action: CartAction) => CartState) {
  //console.log('key:', key,'typeof key: ', typeof key,'. value:', initialValue, 'typeof initialValue: ', typeof initialValue);
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    try {
      const item: any = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log('ada error:', error);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}

export { useLocalStorageReducer }