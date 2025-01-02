import { useCart } from "../context/cart-context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddress } from "../context/address-context";
import { clearCart } from "../services/cartServices";
import { useAuth } from "../context/auth-context";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const CartPriceCard = () => {
  const { cartState } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const { addressState } = useAddress(); // Now we're using addressState
  const { dispatchCart } = useCart();
  const { auth } = useAuth();

  function totalPrice() {
    let collectPrice = 0;
    cartState.cartItems.map(
      (item) => (collectPrice = collectPrice + item.price * item.quantity)
    );
    console.log("Total Price:", collectPrice); // Log total price
    return collectPrice;
  }

  function totalOldPrice() {
    let collectOldPrice = 0;
    cartState.cartItems.map(
      (item) =>
        (collectOldPrice = collectOldPrice + item.price_old * item.quantity)
    );
    console.log("Total Old Price:", collectOldPrice); // Log total old price
    return collectOldPrice;
  }

  const deliveryCharge = () => {
    const charge = totalPrice() > 499 ? 0 : 100;
    console.log("Delivery Charge:", charge); // Log delivery charge
    return charge;
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful:", details); // Log payment success
    clearCart({ auth, dispatchCart });
    toast.success(`Payment successful! Transaction ID: ${details.id}`);
    navigate(`/order-success/${details.id}`);
  };

  const handlePaymentError = () => {
    console.log("Payment Failed"); // Log payment failure
    toast.error("Payment failed. Please try again.");
  };

  const amount = totalPrice() + deliveryCharge();
  console.log("Amount to Pay:", amount); // Log the total amount to be paid

  return (
    <>
      <div className="price-summary">
        <h3 className="fw-bold mg-xsm">Price Details</h3>
        <hr />
        <div className="original-price price-item align-center mg-xsm fw-bold">
          <h4>Price ({cartState.cartItems.length} Items)</h4>
          <p className="para-md">ALL{totalOldPrice()}</p>
        </div>
        <div className="discount-price price-item align-center mg-xsm fw-bold">
          <h4>Discount</h4>
          <p className="para-md">- ALL{totalOldPrice() - totalPrice()}</p>
        </div>
        <div className="delivery-charges price-item align-center mg-xsm fw-bold">
          <h4>Delivery Charge</h4>
          <p className="para-md">ALL{deliveryCharge()}</p>
        </div>
        <hr />
        <div className="total-amount price-item flex align-center mg-xsm">
          <h4>Total Amount</h4>
          <p className="para-md">ALL{totalPrice() + deliveryCharge()}</p>
        </div>
        <hr />

        <p className="note fw-bold mg-xsm">
          You will save ALL{totalOldPrice() - totalPrice()} on this order
        </p>
        <p className="note-free-delivery fw-bold mg-xsm">
          FREE Home Delivery on orders above ALL500
        </p>

        {location.pathname == "/cart" ? (
          <Link
            to="/checkout"
            className="btn btn-solid fw-bold btn-place-order align-center"
          >
            PROCEED TO CHECKOUT
          </Link>
        ) : (
          <a
            className="btn btn-solid fw-bold btn-place-order align-center btn-payment"
            onClick={() => {
              if (!addressState.addressSelectedId) {
                toast.error("Please select a delivery address.");
              }
            }}
          >
            PROCEED TO PAYMENT
          </a>
        )}

        {/* PayPal Payment Button */}
        <PayPalScriptProvider
          options={{
            "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
            currency: "USD", // Set your desired currency
          }}
        >
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              console.log("Creating PayPal Order"); // Log when order is created
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: amount.toFixed(2), // Ensure amount is formatted properly
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              console.log("Order Approved:", data); // Log when order is approved
              return actions.order
                .capture()
                .then((details) => handlePaymentSuccess(details));
            }}
            onError={() => handlePaymentError()}
          />
        </PayPalScriptProvider>
      </div>
    </>
  );
};
