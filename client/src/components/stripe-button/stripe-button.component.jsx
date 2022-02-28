import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

export default function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IuwJkIHkoANjjOqnTA8HlQ8IqP0qXPelOEtWIaGYQo8HiTOE2ykzAjVavZucOvhUv0Hl4LrUEf89urQL55jtcmN000I6AtCaR';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then((response) => {
      alert('Payment successful');
    }).catch((error) => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please sure you use the provided credit card.');
    });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='SK8 Shopping'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/8jCHb1z/logo-for-stripe.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}