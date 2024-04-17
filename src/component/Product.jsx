import React from "react";
import { useState } from "react";
import product_data from "../data/prodData";
import toast from "react-hot-toast";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
const Product = (props) => {
  const { addItem, inCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Sort by more to less Ratings
  const sortProductsByRatings = () => {
    const sortedProducts = [...product_data].sort(
      (a, b) => b.rating.rate - a.rating.rate
    );
    return sortedProducts;
  };

  // Sort by high to low price
  const sortProductsByPriceHighToLow = () => {
    const sortedProducts = [...product_data].sort((a, b) => b.price - a.price);
    return sortedProducts;
  };

  // Sort by low to high price
  const sortProductsByPriceLowToHigh = () => {
    const sortedProducts = [...product_data].sort((a, b) => a.price - b.price);
    return sortedProducts;
  };

  // Categories
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Sorting options
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  // Reset all sorting
  const resetFilters = () => {
    setSelectedCategory("");
    setSortBy("default");
  };

  let filteredProducts = product_data;

  if (sortBy === "Ratings") {
    filteredProducts = sortProductsByRatings();
  } else if (sortBy === "priceHighToLow") {
    filteredProducts = sortProductsByPriceHighToLow();
  } else if (sortBy === "priceLowToHigh") {
    filteredProducts = sortProductsByPriceLowToHigh();
  }
  if (selectedCategory !== "") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }
  // Adding to the cart feature
  const handleClick = (product, title) => {
    addItem(product);
    toast.success(`Item added to the cart.`);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Apply filters */}
        <div className="flex bg-orange-400 flex-col lg:flex-row justify-between">
          <h2 className="text-2xl  font-bold tracking-tight text-white m-2 text-center">
            Apply Filters
          </h2>
          <div className="flex flex-col md:flex-row justify-between lg:gap-x-5 lg:space-x-5 md:my-2 text-xs md:text-base leading-4 ">
            <select
              className="font-normal tracking-tight text-white bg-orange-400 border-2 border-white"
              onChange={handleCategoryChange}
              value={selectedCategory}
            >
              <option className="font-light text-center " value="">
                Categories
              </option>
              {[...new Set(product_data.map((c) => c.category))].map(
                (category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                )
              )}
            </select>

            <button
              className={`font-normal tracking-tight text-white ${
                sortBy === "Ratings" && "font-bold"
              }`}
              onClick={() => handleSortChange("Ratings")}
            >
              Ratings
            </button>
            <button
              className={`font-normal tracking-tight text-white ${
                sortBy === "priceHighToLow" && "font-bold"
              }`}
              onClick={() => handleSortChange("priceHighToLow")}
            >
              Price: Expensive
            </button>
            <button
              className={`font-normal tracking-tight text-white   ${
                sortBy === "priceLowToHigh" && "font-bold"
              }`}
              onClick={() => handleSortChange("priceLowToHigh")}
            >
              Price: Cheap
            </button>
            <button
              className="font-normal tracking-tight text-white pr-3"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div>
              <div key={product.id} className="group relative w-200">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.category}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm mb-2 font-medium text-gray-900">
                      ${product.price}
                    </p>
                  </div>
                  <p className="mt-1 mb-2 text-sm text-gray-900">
                    {`${product.rating.rate}\u{2B50} `}
                  </p>
                </div>
              </div>
              <div className="mt-10 ">
                {inCart(product.id) ? (
                  <p className="block w-full self-center rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    In Cart
                  </p>
                ) : (
                  <button
                    type="button"
                    className="block w-full self-center rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleClick(product, product.title)}
                  >
                    Add To Cart
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
