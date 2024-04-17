import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Importing necessary libraries
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";
import { useCart } from "react-use-cart";
import eCom from "../assets/eCom.png";
// import AuthSection from "./AuthSection";
import { Link } from "react-router-dom";

// Navbar pagination
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Products", href: "/product", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];
const cartNavigation = [{ name: "Cart", href: "/cart", current: false }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  // Authenticating user
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const { isEmpty, totalItems } = useCart();
  return (
    <>
      <div className="min-h-full ">
        <Disclosure as="nav" className="bg-orange-700">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <div className="text-white font-[1000] font-[Helvetica] text-lg	">
                          <p className="flex ml-2">
                            <img
                              src={eCom}
                              alt="eCom brand logo"
                              className="ml-1 mr-2 w-6"
                            />
                            eCom
                          </p>
                        </div>
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4 mr-2">
                        {navigation.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className=" hover:bg-orange-400 text-white rounded-md px-3 py-2 text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" md:block">
                    <div className="flex  md:ml-6 ">
                      <button
                        type="button"
                        className="relative rounded-full bg-orange-900 border-2 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <Link to={cartNavigation[0].href}>
                          <HiOutlineShoppingCart
                            className="h-6 w-6 "
                            aria-hidden="true"
                          />
                          {!isEmpty && (
                            <span className="absolute right-0 top-0 rounded-full bg-orange-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                              {totalItems}
                            </span>
                          )}
                        </Link>
                      </button>
                    </div>
                  </div>
                  {/* auth */}
                  {/* <AuthSection /> */}

                  {/* Mobile */}
                  <div className="-mr-2 flex md:hidden">
                    {/* Menu for mobiles */}
                    <Disclosure.Button className="ml-3 relative inline-flex items-center justify-center rounded-md bg-orange-400 p-2 text-orange-100 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden ">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
