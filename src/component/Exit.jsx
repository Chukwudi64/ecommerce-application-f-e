import { Link } from "react-router-dom";
import courier from "../assets/courier.png";

export default function Exit() {
  return (
    <div className="relative overflow-hidden bg-white text-center">
      <div className="pb-80 pt-16 md:pb-40 md:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 md:static md:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
              You are one in a million 💖
            </h1>

            {/*  */}
            <div className="flex-shrink-0 mt-1">
              <Link to="/">
                <div className="text-white font-[1000] font-[Helvetica] text-lg	">
                  <p className="flex ml-16 mt-5 text-orange-600">
                    ...Thanks you so much :)
                  </p>
                </div>
              </Link>
            </div>
            {/*  */}
          </div>
          <div className="mt-1">
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform md:left-1/2 md:top-0 md:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 ml-14">
                <img
                  src={courier}
                  alt="thanks note with a courier boy logo"
                  className="h-full w-full object-cover object-center mr-6 max-width: 50%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-9">
        <Link
          to="/product"
          className="inline-block rounded-md border border-transparent bg-orange-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
