import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContex } from "../../../Providers/AuthProvider";

const Checkout = ({ price }) => {
    const stripe = useStripe();
    const {user} = useContext(AuthContex);
    const elements = useElements();
    const [cardError, setError] = useState('');
    const [ClientSecret, setClientSecret] = useState('')
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        console.log(card);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setError(error.message)
        }
        else {
            setError('')
            console.log('Payment Method: ', paymentMethod);
        }
        const { payemntIntent, error: confirmError } = await stripe.confirmCardPayment(
            ClientSecret,
            {
                payment_method:{
                    card: card,
                    billing_details:{
                        email: user?.email || 'Anonymouse',
                        name: user?.displayName || 'Anonymouse'
                    },
                },
            },
        );
        if(confirmError){
            setError(confirmError.message);
            console.log(confirmError.message);
        }
    }
    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !ClientSecret}>
                    Pay Now
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
        </>
    );
};

export default Checkout;