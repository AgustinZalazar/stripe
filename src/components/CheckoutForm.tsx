import React from 'react'
import axios from 'axios'
import useCart from '@/hooks/useCart';
import { loadStripe } from '@stripe/stripe-js';

const publish_key = `${process.env.NEXT_PUBLIC_KEY}`

const stripePromise = loadStripe(publish_key)

const CheckoutForm = () => {
    const { cart } = useCart()
    const handleCheckout = async () => {
        try {
            const stripe = await stripePromise;
            const checkoutSession = await axios.post("/api/checkout", { cart }, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            });
            console.log(checkoutSession)
            // @ts-ignore
            const result = await stripe.redirectToCheckout({
                sessionId: checkoutSession.data.session.id,
            });

            if (result?.error) {
                alert(result.error.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <button onClick={handleCheckout} disabled={cart.length > 0 ? false : true} className={`${cart.length > 0 ? 'bg-green-600' : 'bg-green-800'} p-2 rounded-md mx-auto`}>{`Checkout (${cart.length}- Items)`}</button>
    )
}

export default CheckoutForm