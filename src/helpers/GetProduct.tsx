import { Dispatch, SetStateAction } from 'react';
import axios, { CancelToken } from 'axios';
import { IProduct } from '../types/types';

const GetProduct = async (
  setState: Dispatch<SetStateAction<any>>, 
  endpoint: string, 
  source_token: CancelToken, 
  setIsLoading: Dispatch<SetStateAction<boolean>>
): Promise<void> => {
  setIsLoading(true);
  await axios
    .get<IProduct[]>(endpoint, { cancelToken: source_token })
    .then(res => {
      if (res.data) {
        setIsLoading(false);
        setState(res.data);
      } else console.log('no response data');
    })
    .catch(err => {
      setIsLoading(false);
      if (err.response !== undefined && err.response.status === 404) {
        console.log(err.response.status, 'not found');
      } else if (axios.isCancel(err)) {
        console.log('request canceled');
      } else console.log('no idea');
    });
}

export default GetProduct;