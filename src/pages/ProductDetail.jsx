import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { productUrl } from "../Api/endPoints";
import ProductCard from "../components/Product/ProductCard";

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => console.log(e));
  }, [productId]);

  return (
    <Layout>
      {product && Object.keys(product).length > 0 ? ( // Check if product is not empty
        <ProductCard product={product} />
      ) : (
        <p className="mt-20 p-10 text-gray-400">
          Loading product details . . .
        </p>
      )}
    </Layout>
  );
}
