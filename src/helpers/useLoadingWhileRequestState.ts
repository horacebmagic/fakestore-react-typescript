import { useState } from 'react';

function useLoadingWhileRequestState(initialLoading: boolean) {
  const [isLoading, setIsLoading] = useState<boolean>(initialLoading);
  return {
    isLoading,
    setIsLoading
  }
}

export default useLoadingWhileRequestState;