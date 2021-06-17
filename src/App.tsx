import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { UserTokenContext } from './contexts/UserTokenContext';
import * as Icon from "./components/Icons"
import { IRoutes } from "./types/types"
import DetailsProduct from "./views/DetailsProduct"
import Electronics from "./views/Electronics"
import Home from './views/Home'
import Jewelery from "./views/Jewelery"
import Login from "./views/Login"
import MenClothing from "./views/MenClothing"
import WomenClothing from "./views/WomenClothing"
import Logout from './views/Logout';
import { UserCartContext } from './contexts/UserCartContext';
import Cart from './views/Cart';
import AlertNotification from './components/AlertNotification';
import LoadingWhileRequest from './components/LoadingWhileRequest';
import { LoadingWhileRequestContext } from './contexts/LoadingWhileRequestContext';
import { CartAlertMessageContext, ShowAlertContext } from './contexts/CartAlertMessageContext';

const App:React.FC = () => {
  const active: string = "bg-indigo-800";

  const { isLoggedin } = useContext(UserTokenContext);
  const { state } = useContext(UserCartContext);

  const routes: Array<IRoutes> = [
    {
      name: 'Home',
      path: '/',
      component: Home,
      exact: true,
      props: {
        title: 'Fake Store API',
        icon: Icon.HomeIcon,
        visible: true,
        auth: false
      }
    },
    {
      name: 'Electronics',
      path: '/electronics',
      component: Electronics,
      exact: true,
      props: {
        title: 'Electronics',
        icon: Icon.ElectronicsIcon,
        visible: true,
        auth: false
      }
    },
    {
      name: 'Electronics Details',
      path: '/electronics/:id',
      component: DetailsProduct,
      exact: true,
      props: {
        title: 'Electronics Details',
        visible: false,
        auth: false
      }
    },
    {
      name: 'Jewelery',
      path: '/jewelery',
      component: Jewelery,
      exact: true,
      props: {
        title: 'Jewelery',
        icon: Icon.JeweleryIcon,
        visible: true,
        auth: false
      }
    },
    {
      name: 'Jewelery Details',
      path: '/jewelery/:id',
      component: DetailsProduct,
      exact: true,
      props: {
        title: 'Jewelery Details',
        visible: false,
        auth: false
      }
    },
    {
      name: 'Men Clothing',
      path: '/men-clothing',
      component: MenClothing,
      exact: true,
      props: {
        title: 'Men Clothing',
        icon: Icon.MenClothingIcon,
        visible: true,
        auth: false
      }
    },
    {
      name: 'Men Clothing Details',
      path: '/men-clothing/:id',
      component: DetailsProduct,
      exact: true,
      props: {
        title: 'Men Clothing Details',
        visible: false,
        auth: false
      }
    },
    {
      name: 'Women Clothing',
      path: '/women-clothing',
      component: WomenClothing,
      exact: true,
      props: {
        title: 'Women Clothing',
        icon: Icon.WomenClothingIcon,
        visible: true,
        auth: false
      }
    },
    {
      name: 'Women Clothing Details',
      path: '/women-clothing/:id',
      component: DetailsProduct,
      exact: true,
      props: {
        title: 'Women Clothing Details',
        visible: false,
        auth: false
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
      exact: true,
      props: {
        title: 'Login',
        icon: Icon.LoginIcon,
        visible: !isLoggedin,
        auth: false
      }
    },
    {
      name: 'Logout',
      path: '/logout',
      component: Logout,
      exact: true,
      props: {
        title: 'Logout',
        icon: Icon.LogoutIcon,
        visible: isLoggedin,
        auth: true
      }
    },
    {
      name: 'Cart',
      path: '/cart',
      component: Cart,
      exact: true,
      props: {
        title: 'Cart',
        icon: Icon.CartIcon,
        visible: false,
        auth: true
      }
    },
  ];

  const { isLoading } = useContext(LoadingWhileRequestContext);

  const { message } = useContext(CartAlertMessageContext);

  const { isVisible, setIsVisible } = useContext(ShowAlertContext);

  return (
    <div className="App">
      <AlertNotification message={ message } show_alert={ isVisible } setShowAlert={ setIsVisible } />
      <Router>
        <div className="bg-indigo-500 p-2 fixed w-full overflow-auto">
          <nav className="flex gap-1 justify-center">
            {routes.filter(route => route.props.visible === true).map((route, index) => (
              <NavLink 
                className="text-gray-300 text-xs uppercase bg-indigo-700 px-1 p-0.5 rounded-sm"
                activeClassName={ active }
                key={ index }
                exact={ route.exact }
                to={ route.path }>
                  <span className="flex flex-row"> { route.props.icon && <route.props.icon /> } &nbsp; { route.name }</span>
              </NavLink>
            ))}
            {isLoggedin && routes.filter(route => route.name === 'Cart').map((route, index) => (
              <NavLink 
                className="text-gray-300 text-xs uppercase bg-indigo-700 px-1 p-0.5 rounded-sm"
                activeClassName={ active }
                key={ index }
                exact={ route.exact }
                to={ route.path }>
                  <span className="flex flex-row"> { route.props.icon && <route.props.icon /> } &nbsp; { route.name } ({ state.products.length })</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="md:w-1/2 mx-auto p-1">
          {isLoading && <LoadingWhileRequest />}
          <Switch>
            {isLoggedin ? (
              <>
                {routes.map((route, index) => (
                  <Route 
                    key={ index }
                    path={ route.path }
                    exact={ route.exact }>
                      <div className="mt-10">
                        <route.component { ...route.props } />
                      </div>
                  </Route>
                ))}
              </>
            ) : (
              <>
                {routes.filter(route => route.props.auth === false).map((route, index) => (
                  <Route 
                    key={ index }
                    path={ route.path }
                    exact={ route.exact }>
                      <div className="mt-10">
                        <route.component { ...route.props } />
                      </div>
                  </Route>
                ))}
              </>
            )}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
