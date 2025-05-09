import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchProduct = () => {
    const found = products.find((t) => t._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
      setLoading(false);
    } else {
      setError('Product not found');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  if (loading) {
    return <div className="text-center py-20">Loading product...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => navigate('/collection')}
          className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer mt-4"
        >
          Return to collection
        </button>
      </div>
    );
  }

  return productData ? (
    <div className="pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((i, index) => (
              <img
                onClick={() => setImage(i)}
                src={i}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="lg:w-[450px] lg:h-[550px]" alt="full_view" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5" alt="star_rating" />
            <img src={assets.star_icon} className="w-3.5" alt="star_rating" />
            <img src={assets.star_icon} className="w-3.5" alt="star_rating" />
            <img src={assets.star_icon} className="w-3.5" alt="star_rating" />
            <img src={assets.star_dull_icon} className="w-3.5" alt="star_rating" />
          </div>
          <p className="mt-5 text-3xl font-medium">
            <strong>{currency}</strong> {productData.price.toLocaleString()}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((i, index) => (
                <button
                  onClick={() => setSize(i)}
                  key={index}
                  className={`border cursor-pointer border-gray-200 py-2 px-4 bg-gray-100 ${i === size ? 'border-orange-500' : ''}`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 sm:w-2/4 p-2"
            />
            <button
              onClick={() => addToCart(productData._id, size, quantity)}
              className="bg-black text-white px-8 py-3 sm:w-2/4 text-sm active:bg-gray-700 cursor-pointer"
            >
              ADD TO CART
            </button>
          </div>

          <hr className="mt-8 sm:w-4/5 border-gray-300 bg-gray-200" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Return available within 14 days</p>
          </div>
        </div>
      </div>

      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
