import { loadStripe } from "@stripe/stripe-js";
import Heading from "../../../Sheard/Heading";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
console.log(stripePromise);

const Payment = () => {
  return (
    <div className="w-full">
      <h1>this is payment components</h1>
      <Heading title={"Pay Your Duo "} heading={"Payment"}></Heading>

      <div className="w-1/2 mx-auto">
        <Elements stripe={stripePromise}>
          <PaymentForm></PaymentForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
