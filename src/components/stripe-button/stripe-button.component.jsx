import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey =  "pk_test_05bZidZVEZaAAQanrEBHG6al00CpC4I41a";

  const onToken = token =>{
        console.log(token);
        alert('Payment Successfull!!!')
    }

    return(
        <StripeCheckout
        label ="Pay Now"
        name = "RAJU MART"
        billingAddress
        shippingAddress
        image ="https://sendeyo.com/up/d/f3eb2117da"
        description= {`your total is Rs:${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token ={onToken}
        stripeKey= {publishableKey}

        />
    )
}

export default StripeCheckoutButton;