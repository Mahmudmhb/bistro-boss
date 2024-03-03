import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const PaymentForm = () => {
  const [error, setError] = useState([]);
  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    if (!stripe || !elements) {
      return;
    }
    // const card = elements.getElement(CardElement);
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      console.log("PaymentMethod", paymentMethod);
      setError("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn btn-primary w-full mt-10"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default PaymentForm;
