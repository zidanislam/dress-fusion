import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductImage from "../productImage/ProductImage";

const ProductDetail = () => {
  const  products  = useLoaderData();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product._id === productId
      );
      setProduct(selectedProduct);
    }, [products, productId]);
    const {
      name,
      price,
      description,
      sizes,
      category,
      gellary,
      ratings,
      reviews,
      stock,
    } = product;

  return (
    <div className="grid grid-cols-2 mx-40 gap-12">
      <ProductImage imgs={gellary}/>
      <div>
        <h2 className="text-3xl font-semibold mb-5">{name}</h2>
        <p className="text-2xl">Price: ${price}</p>
        <p>{reviews} Reviews</p>
        <p className="my-6">{description}</p>
        <p>{stock} In Stock</p>
        <hr />
        <div className="flex">
          <button>+</button>
          <input type="number" />
          <button>-</button>
        </div>
        <p className="capitalize">
          <span className="text-base font-semibold">Category: </span>
          {category}
        </p>
        <button className="bg-black text-white py-2.5 px-10 my-5 text-base rounded-lg">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
