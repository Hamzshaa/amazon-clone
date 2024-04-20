import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className="w-[250px] shadow-md p-2.5 text-black no-underline relative group grid-item min-h-full align-self:stretch">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt="product image"
          className="p-2.5 w-full h-[200px] object-contain"
        />
      </Link>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center py-2.5">
          {/* rating */}
          <Rating value={rating?.rate} precision={0.5} />
          <small>{rating?.count}</small>
        </div>
        <div className="mb-10">
          <CurrencyFormat amount={price} />
        </div>

        <button className="hidden group-hover:block py-[5px] px-2.5 mt-10 font-bold border-none cursor-pointer bg-[var(--primary-color)] hover:bg-[var(--primary-shade)] w-full my-2.5 rounded-[30px] absolute bottom-0 left-0">
          add to cart
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: propTypes.object.isRequired,
};
