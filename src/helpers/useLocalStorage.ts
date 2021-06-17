import { useState } from 'react';

function UseLocalStrorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  //console.log('key:', key,'typeof key: ', typeof key,'. value:', initialValue, 'typeof initialValue: ', typeof initialValue);
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item: any = window.localStorage.getItem(key);
      return item ? item : initialValue;
    } catch (error) {
      console.log('ada error:', error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export { UseLocalStrorage }