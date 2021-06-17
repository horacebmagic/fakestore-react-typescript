import { useState } from "react";

function useShowAlert(initialVisible: boolean) {
  const [isVisible, setIsVisible] = useState<boolean>(initialVisible);
  return {
    isVisible,
    setIsVisible
  }
}

function useAlertCartMessage(initial_message: string) {
  const [message, setCartAlertMessage] = useState(initial_message);
  return {
    message,
    setCartAlertMessage
  }
}

export { 
  useShowAlert, 
  useAlertCartMessage,
};