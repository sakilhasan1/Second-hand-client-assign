import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk)

const Payment = () => {
    const order = useLoaderData()
    const { name, product, price } = order;

    return (
        <div>
            <h1 className='text-2xl font-bold'>Hello !!! Mr: {name}</h1>
            <h3 className='font-bold'>your product is : <strong className='text-orange-500'>{product}</strong> and price is : <strong className='text-red-500'>${price}</strong></h3>
            <div className=''>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;