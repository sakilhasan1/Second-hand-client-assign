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
        <div className='mx-auto mt-10'>
            <h1 className='text-2xl font-bold text-purple-600'>Hello !!! Mr: {name}</h1>
            <h3 className='font-bold text-pink-500'>your product is : <strong className='text-orange-500'>{product}</strong> and price is : <strong className='text-red-500'>${price}</strong></h3>
            <div className='w-96 mt-8 h-40 shadow-lg p-10'>
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