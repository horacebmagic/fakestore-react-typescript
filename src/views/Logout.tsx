import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { UserTokenContext } from '../contexts/UserTokenContext';

const Logout:React.FC = () => {
  const { removeToken } = useContext(UserTokenContext);
  
  const route = useHistory();

  useEffect(() => {
    removeToken();
    route.push('/');
  })
  
  return (
    <>
      
    </>
  )
}

export default Logout