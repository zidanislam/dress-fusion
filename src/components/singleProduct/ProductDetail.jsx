import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ProductImage from "../productImage/ProductImage";
import StarRating from "../starRating/StarRating";

const ProductDetail = () => {
  const products = useLoaderData();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState();
  const [amount, setAmount] = useState(1);
  const handleIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const handleDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product._id === productId
    );
    setProduct(selectedProduct);
  }, [products, productId]);
  const {
    name,
    _id,
    picture,
    price,
    description,
    sizes,
    category,
    gellary,
    ratings,
    reviews,
    stock,
  } = product;

  const { addToCart } = useCartContext();

  return (
    <div className="grid items-start md:grid-cols-2 2xl:px-80 xl:px-32 lg:px-20 md:px-6 px-6 gap-12">
      <ProductImage imgs={gellary} />
      <div>
        <h2 className="text-3xl font-semibold capitalize">{name}</h2>
        <p className="capitalize mb-5">
          <span className="text-base font-semibold">Category: </span>
          {category}
        </p>
        <p className="text-2xl">Price: ${price}</p>
        <div className="flex align-middle gap-2 -mb-2">
          <p>Ratings: </p>
          <StarRating ratings={ratings} />
          <p className="md:text-xs">({reviews} Reviews)</p>
        </div>
        <p className="my-6 lg:text-base text-sm">{description}</p>
        <p className=" lg:text-base text-sm">In Stock: {stock} </p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
        {stock > 0 && (
          <>
            <div className="flex my-4">
              <p className="my-auto">Sizes:</p>
              {sizes.map((size, index) => (
                <button
                  onClick={() => setSelectedSize(size)}
                  className={
                    selectedSize === size
                      ? "border bg-black text-white border-black rounded-lg mx-3 px-2 py-1"
                      : "border border-black rounded-lg mx-3 px-2 py-1 "
                  }
                  key={index}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex gap-6 align-middle my-2">
              <button>
                <FaMinus
                  className="text-xl my-auto text-gray-700"
                  onClick={() => handleDecrease()}
                />
              </button>
              <div className="text-center border rounded-lg border-gray-300 h-12 w-20">
                <p className="text-xl mt-2">{amount}</p>
              </div>
              <button>
                <FaPlus
                  className="text-xl my-auto text-gray-700"
                  onClick={() => handleIncrease()}
                />
              </button>
            </div>
            {selectedSize === undefined ? (
              <button
                disabled
                className="bg-gray-700 text-white py-2.5 px-10 my-5 text-base rounded-lg"
              >
                Add To Cart
              </button>
            ) : (
              <Link to={"/cart"}>
                <button
                  className="bg-black text-white py-2.5 px-10 my-5 text-base rounded-lg"
                  onClick={() =>
                    addToCart(
                      name,
                      stock,
                      picture,
                      price,
                      _id,
                      selectedSize,
                      amount,
                      product
                    )
                  }
                >
                  Add To Cart
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
