import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../store/slices/cartSlice/cartSlice";
import { useState } from "react";
import PopUp from "../ui/popUp/popUp";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const loginUser = useSelector(state => state.users.loginUser)
  const [showPopUp, setShowPopUp] = useState(false)
  //  here to find cart total 
  const currentUserItems = cartItems.filter(item => item.addedBy === loginUser.email)
  const cartTotal = currentUserItems.reduce((acc, item) => acc += item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>

      {currentUserItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* ✅ Cart Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">Product</th>
                  <th className="px-4 py-2 text-center">Price</th>
                  <th className="px-4 py-2 text-center">Quantity</th>
                  <th className="px-4 py-2 text-center">Total</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentUserItems.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* Product Info */}
                    <td className="px-4 py-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="font-medium">{item.title}</span>
                    </td>

                    {/* Price */}
                    <td className="px-4 py-4 text-center">${item.price}</td>

                    {
                      showPopUp && <PopUp className = 'bg-red-500 text-white text-[12px]' >{`${item.title} is removed from cart`}</PopUp>
                    }

                    {/* Quantity */}
                    <td className="px-4 py-4 text-center">
                      <div className="inline-flex items-center border rounded">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="px-3 py-1 bg-gray-300"
                        >
                          -
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="px-3 py-1 bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    {/* Total Price */}
                    <td className="px-4 py-4 text-center font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>

                    {/* Remove */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => {
                          setShowPopUp(true)
                          dispatch(removeFromCart(item.id))
                          setTimeout(() => {
                            setShowPopUp(false)
                          }, 1000);
                        }}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>

          {/* ✅ Cart Summary & Clear Button */}
          <div className="max-w-3xl mx-auto mt-6 bg-white p-4 shadow-md rounded-lg flex flex-col sm:flex-row justify-between items-center">
            <div className="text-lg font-semibold">
              Total Items: <span className="font-bold">{currentUserItems.length}</span>
              <br />
              Total Price:{" "}
              <span className="font-bold">${(cartTotal).toFixed(2)}</span>
            </div>
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
