import React, { useContext } from 'react';
import { UserTokenContext } from '../contexts/UserTokenContext';

export const HomeIcon:React.FC = () => {
  return (
    <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
      <path fill="currentColor" d="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z" />  
    </svg>
  )
}

export const ElectronicsIcon:React.FC = () => {
  return (
    <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
      <path fill="currentColor" d="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z" />  
    </svg>
  )
}

export const JeweleryIcon:React.FC = () => {
  return (
    <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,10L8,4.4L9.6,2H14.4L16,4.4L12,10M15.5,6.8L14.3,8.5C16.5,9.4 18,11.5 18,14A6,6 0 0,1 12,20A6,6 0 0,1 6,14C6,11.5 7.5,9.4 9.7,8.5L8.5,6.8C5.8,8.1 4,10.8 4,14A8,8 0 0,0 12,22A8,8 0 0,0 20,14C20,10.8 18.2,8.1 15.5,6.8Z" />
    </svg>
  )
}

export const MenClothingIcon:React.FC = () => {
  return (
    <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,7H13.5A2,2 0 0,1 15.5,9V14.5H14V22H10V14.5H8.5V9A2,2 0 0,1 10.5,7Z" />
    </svg>
  )
}

export const WomenClothingIcon:React.FC = () => {
  return (
    <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M10.5,22V16H7.5L10.09,8.41C10.34,7.59 11.1,7 12,7C12.9,7 13.66,7.59 13.91,8.41L16.5,16H13.5V22H10.5Z" />
    </svg>
  )
}

export const CartIcon:React.FC = () => {
  const { isLoggedin } = useContext(UserTokenContext);
  
  return (
    <>
      {isLoggedin &&
        <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M11,9H13V6H16V4H13V1H11V4H8V6H11M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18M7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2H1V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75Z" />
        </svg>
      }
    </>
  )
}

export const RemoveIcon:React.FC = () => {
  const { isLoggedin } = useContext(UserTokenContext);
  
  return (
    <>
      {isLoggedin &&
        <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
        </svg>
      }
    </>
  )
}

export const MinusIcon:React.FC = () => {
  const { isLoggedin } = useContext(UserTokenContext);
  
  return (
    <>
      {isLoggedin &&
        <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
        </svg>
      }
    </>
  )
}

export const PlusIcon:React.FC = () => {
  const { isLoggedin } = useContext(UserTokenContext);
  
  return (
    <>
      {isLoggedin &&
        <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
        </svg>
      }
    </>
  )
}

export const LoginIcon:React.FC = () => {
  return (
    <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
    </svg>
  )
}

export const LogoutIcon:React.FC = () => {
  return (
    <svg style={{ 'width':'17px', 'height':'17px' }} viewBox="0 0 24 24">
      <path fill="currentColor" d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z" />
    </svg>
  )
}