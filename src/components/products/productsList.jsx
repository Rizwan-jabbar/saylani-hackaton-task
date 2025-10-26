import { useState } from "react";
import { addToCart } from "../store/slices/cartSlice/cartSlice";
import Button from "../ui/button/button";
import ProductsCard from "./productsCard";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from 'react-router-dom'
import PopUp from "../ui/popUp/popUp";

function ProductsList({ currentProducts }) {
  const loginUser = useSelector(state => state.users.loginUser)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showPopUp , setShowPopUp] = useState(false)

  return (
    <>
    {
      showPopUp && <PopUp>item added to cart</PopUp>
    }
    <ProductsCard>
      <h3 className="font-bold text-[30px] uppercase my-3">our products</h3>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {currentProducts.map((product, index) => (
          <div
            key={index}
            className="border cursor-pointer border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col "
          >
            {/* Product Image */}
            <div className="relative flex items-center justify-center p-4 group overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-36 h-36 object-contain group-hover:scale-125 transition-all duration-500 ease-in-out"
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                ⭐ {product.rating.rate}
              </span>
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-lg font-bold text-green-600 mb-1">
                ${product.price}
              </p>
              <p className="text-xs text-gray-500 mb-4 capitalize">
                {product.category}
              </p>

              {/* Add to Cart Button */}
              <Button
                onClick={() => {
                  if(loginUser){
                    setShowPopUp(true)
                    dispatch(addToCart({...product , addedBy : loginUser.email}))
                    setTimeout(() => {
                      setShowPopUp(false)
                    }, 1000);
                  }else{
                    alert('login to add to cart')
                    navigate("/login");
                    
                  }
                }}
                className="mt-auto  bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ProductsCard>
        </>
  );
}

export default ProductsList;
