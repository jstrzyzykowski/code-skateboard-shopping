import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { GlobalStyle } from './global.styles';

function App() {
  const { currentUser } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
  }))
  const dispatch = useDispatch();

  const SignInConditional = currentUser
    ? <Redirect to='/' />
    : <SignInAndSignUp />

  const CheckoutConditional = currentUser
    ? <CheckoutPage />
    : <Redirect to='/' />

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => SignInConditional} />
        <Route exact path='/checkout' render={() => CheckoutConditional} />
      </Switch>
    </div>
  );
}

export default App;
