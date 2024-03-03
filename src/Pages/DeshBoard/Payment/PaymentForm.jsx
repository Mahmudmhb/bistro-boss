import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../../Hooks/useCart/useCart";
import useAuth from "../../../Hooks/useAuth/useAuth";

const PaymentForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [succeeded, setSucceeded] = useState("");
  const elements = useElements();
  const stripe = useStripe();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const { user } = useAuth();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

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

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confrim error".confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.status);
        setSucceeded(paymentIntent.id);
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuId),
          status: "panding",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payment form", res.data);
      }
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
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {succeeded && (
        <p className="text-green-600">Your Transsaction id:{succeeded}</p>
      )}
    </form>
  );
};

export default PaymentForm;
