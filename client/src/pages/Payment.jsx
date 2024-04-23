import { useContext, useState } from "react";
import Layout from "../components/Layout";
import { DataContext } from "../components/DataProvider";
import ProductCard from "../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../components/CurrencyFormat";

export default function Payment() {
  const [cardError, setCardError] = useState(null);
  const [{ basket, user }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const stripe = useStripe(); // eslint-disable-line no-unused-vars
  const elements = useElements(); // eslint-disable-line no-unused-vars

  const total = basket?.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const handleChange = (e) => {
    e?.error?.message ? setCardError(e.error.message) : setCardError(null);
  };

  return (
    <Layout>
      <div className="p-5 text-center text-2xl bg-[#eaeded]">
        Checkout ({totalItem}) items
      </div>

      <section className="p-8">
        <div className="flex gap-5 p-8">
          <h3 className="min-w-[300px] font-bold text-lg">Delivery Address</h3>
          <div className="">
            <div className="">{user?.email}</div>
            <div className="">123 React Lane</div>
            <div className="">Addis Ababa</div>
          </div>
        </div>
        <hr />

        <div className="flex gap-5 p-8 payment-page__flex">
          <h3 className="min-w-[300px] font-bold text-lg">
            Review items and delivery
          </h3>
          <div className="h-auto">
            {basket?.map((item) => (
              <ProductCard key={item} product={item} isFlex={true} />
            ))}
          </div>
        </div>
        <hr />

        <div className="flex gap-5 p-8">
          <h3 className="min-w-[300px] font-bold text-lg">Payment methods</h3>
          <div className="max-w-[350px] w-full">
            <div className="">
              <form>
                {cardError && (
                  <small className="text-red-500">{cardError}</small>
                )}
                <CardElement onChange={handleChange} />

                <div className="p-5">
                  <div className="flex text-[16px] gap-2.5">
                    <span className="flex gap-md-2">
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button className="mt-3.5 w-full border-none bg-[var(--primary-color)] rounded-md py-2 px-2.5 cursor-pointer hover:bg-[var(--primary-shade)]">
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
