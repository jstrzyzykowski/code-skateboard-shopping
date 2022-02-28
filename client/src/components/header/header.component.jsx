import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

import logo from '../../assets/logo.png';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

export default function Header() {
  const { currentUser, cartHidden } = useSelector(createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
  }))
  const dispatch = useDispatch();

  const SignCondition = currentUser
    ? <OptionLink as='div' onClick={() => dispatch(signOutStart())}>SIGN OUT</OptionLink>
    : <OptionLink to='/signin'>SIGN IN</OptionLink>;

  const CartDropdownCondition = !cartHidden
    ? <CartDropdownContainer />
    : null;

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <img src={logo} alt="Skateboard shopping logo"/>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        { SignCondition }
        <CartIcon />
      </OptionsContainer>
      { CartDropdownCondition }
    </HeaderContainer>
  );
}