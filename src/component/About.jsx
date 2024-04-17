import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left Section */}
          <div className="md:w-1/2 pr-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 text-lg mb-4">
              <span className="font-semibold">Our Story</span>
              <br />
              At eCom, we're passionate about delivering an exceptional online
              shopping experience to our customers. Our journey began with a
              simple goal - to provide you with access to a diverse and curated
              selection of products, all in one convenient place.
            </p>
            <p className="text-gray-700 text-lg">
              <span className="font-semibold">Our Mission</span>
              <br />
              At eCom, our mission is to provide an exceptional online shopping
              experience. We curate a wide range of high-quality products,
              ensuring convenience and satisfaction for our valued customers.
            </p>
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 md:pl-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Image 1 */}
              <div>
                <img
                  src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                  alt="About Us"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              {/* Image 2 */}
              <div>
                <img
                  src="https://images.pexels.com/photos/2284169/pexels-photo-2284169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="About Us"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="About Us"
                  className="w-full rounded-lg shadow-lg mt-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
