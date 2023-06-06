
import { Elements } from '@stripe/react-stripe-js';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import UseCart from '../../../hooks/UseCart';

// TODO:Publish Key
const stripePromis = loadStripe(import.meta.env.VITE_payment_Stripe_Key)
const Payment = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum,item)=> item.price +sum,0).toFixed(2);
    return (
        <div>
            <SectionTitle subHeading='Please Proceed to Checkout' heading='Payment'></SectionTitle>
            <Elements stripe={stripePromis}>
                <Checkout price={total}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;