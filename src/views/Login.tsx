import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { IPageTitle } from '../types/types';
import { UserTokenContext } from '../contexts/UserTokenContext';
import { useHistory } from 'react-router';

const Login:React.FC<IPageTitle> = ({ title }) => {
  useEffect(() => {
    document.title = title; 
  });
  
  const { storeToken } = useContext(UserTokenContext);

  const route = useHistory();

  const username: string = 'johnd';
  const password: string = 'm38rmF$';
  const endpoint: string = 'https://fakestoreapi.com/auth/login';
  const login = async ():Promise<void> => {
    await axios
      .post<{token: string}>(endpoint, { username, password })
      .then(res => {
        storeToken(res.data.token);
        route.push('/');
      })
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="mt-20">
        <p className="text-4xl font-semibold text-indigo-500">Login First!</p>
        <div className="flex flex-col mt-5">
          <div className="py-1">
            <input type="text" readOnly value="johnd" name="username" className="border border-indigo-500 w-1/2 rounded-sm p-1" />
          </div>
          <div className="py-1">
            <input type="text" readOnly value="m38rmF$" name="password" className="border border-indigo-500 w-1/2 rounded-sm p-1" />
          </div>
          <div className="py-1">
            <button className="p-1 bg-indigo-500 text-white w-1/2 rounded-sm hover:bg-indigo-600" onClick={ () => { login() } }>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login