import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm';
const stripePromise = loadStripe(import.meta.env.VITE_PK)

const StripePayment = () => {
  return (
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
  );
};

export default StripePayment;