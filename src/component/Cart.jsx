import React, { useRef } from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import product_data from "../data/prodData";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {isEmpty && (
        <div className="flex flex-row justify-center px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="w-fit flex flex-col   ">
            <AiOutlineShopping size={150} className="mx-7" />
            <h3 className="mx-2">No item added to your cart</h3>
            <Link to="/product">
              <button
                type="button"
                className="flex items-center m-2 justify-center rounded-md border border-transparent bg-orange-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}

      <div className="flex flex-col  justify-between">
        <div className="flex items-start justify-between">
          <div className="text-lg font-medium text-gray-900 ">
            Shopping cart
          </div>
          <div className="ml-3 flex h-7 items-center ">
            <Link to="/modal">
              <button
                type="button"
                onClick={() => emptyCart()}
                className="relative -m-2 p-2 font-medium text-indigo-600 hover:text-indigo-500"
              >
                <span className="absolute -inset-0.5" />
                Remove All Items
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <div className="flow-root ">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {!isEmpty &&
                items.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        alt={product.category}
                        className="h-full w-full object-cover object-center "
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col ">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.title}</h3>
                          <p className="ml-4">
                            $
                            {`${(product.price * product.quantity).toFixed(2)}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="quantity flex flex-row my-2">
                          <h3 className="my-2.5">Quantity:</h3>
                          <p className="quantity-desc flex flex-row mx-2 border p-1 border-indigo-600">
                            <button
                              className="minus mt-1 "
                              onClick={() =>
                                updateItemQuantity(
                                  product.id,
                                  product.quantity - 1
                                )
                              }
                            >
                              <AiOutlineMinus />
                            </button>
                            <span className="num mx-2 mt-1 text-lg">
                              {product.quantity}
                            </span>
                            <button
                              className="plus mt-1"
                              onClick={() =>
                                updateItemQuantity(
                                  product.id,
                                  product.quantity + 1
                                )
                              }
                            >
                              <AiOutlinePlus />
                            </button>
                          </p>
                        </div>
                        <p className="text-gray-500">
                          Qty {product.rating?.count}
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => removeItem(product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900 bg-orange-400 rounded-md py-3">
          <p className="ml-3">Grand Total</p>
          <p className="mr-7">{cartTotal.toFixed(2)}</p>
        </div>
        <div className="bg-gray-600 rounded-md py-1 px-3 mt-3 pb-2">
          <p className="mt-0.5 text-sm text-white ">
            Shipping and taxes calculated at checkout.
          </p>
        </div>
        <div className="mt-6">
          <Link
            to="/checkout"
            className="flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-500"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or
            <Link to="/product">
              <button
                type="button"
                className="ml-2 font-medium text-orange-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
