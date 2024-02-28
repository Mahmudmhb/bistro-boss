import useCart from "../../Hooks/useCart/useCart";

const MyCart = () => {
  const [cart] = useCart();
  return (
    <div>
      <h1>Total orders: {cart.length}</h1>
    </div>
  );
};

export default MyCart;
