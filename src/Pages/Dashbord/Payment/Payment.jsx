
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';

// TODO:Publish Key
const stripePromis = loadStripe(import.meta.env.VITE_payment_Stripe_Key)
const Payment = () => {
    return (
        <div>
            <SectionTitle subHeading='Please Proceed to Checkout' heading='Payment'></SectionTitle>
            <Elements stripe={stripePromis}>
                <Checkout></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;