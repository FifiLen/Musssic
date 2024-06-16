import React from "react";

const ContactPage = () => {
  return (
    <div className="py-20 md:py-40 bg-black min-h-screen relative px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-16 text-center">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 gap-20">
          <div className="bg-zinc-950 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-1/2">
            <h3 className="text-4xl tracking-tighter font-bold mb-4 text-zinc-300">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-4 tracking-tight text-lg">
              If you have any questions about the festival, such as schedule,
              tickets, or venue information, this is the place to ask.
            </p>
            <form className="py-3">
              <div className="mb-4">
                <label
                  className="block text-orange-300 tracking-tighter font-medium"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 text-gray-400 bg-orange-950/20 border-b-2 border-orange-500 focus:outline-none focus:border-orange-600"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-orange-300 tracking-tighter font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 text-gray-400 bg-orange-950/20 border-b-2 border-orange-500 focus:outline-none focus:border-orange-600"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-orange-300 tracking-tighter font-medium"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 text-gray-400 bg-orange-950/20 border-b-2 border-orange-500 focus:outline-none focus:border-orange-600"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 tracking-tighter transition-colors duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Overlapping Images and Graphics */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-[800px] md:h-[600px]">
              <img
                src="/assets/images/artist1.jpg"
                alt="Graphic 1"
                className="absolute w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-lg"
                style={{ top: "5%", left: "30%" }}
              />
              <img
                src="/assets/images/artist2.jpg"
                alt="Graphic 2"
                className="absolute w-28 h-28 md:w-32 md:h-32 object-cover rounded-lg shadow-lg"
                style={{ top: "20%", left: "10%" }}
              />
              <img
                src="/assets/images/artist3.jpg"
                alt="Graphic 3"
                className="absolute w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-lg"
                style={{ top: "40%", left: "50%" }}
              />
              <img
                src="/assets/images/artist4.jpg"
                alt="Graphic 4"
                className="absolute w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg shadow-lg"
                style={{ top: "60%", left: "20%" }}
              />
              <img
                src="/assets/images/artist5.jpg"
                alt="Graphic 5"
                className="absolute w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-lg"
                style={{ top: "30%", left: "70%" }}
              />
              <img
                src="/assets/images/artist6.jpg"
                alt="Graphic 6"
                className="absolute w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-lg"
                style={{ top: "50%", left: "40%" }}
              />
              <img
                src="/assets/images/artist7.jpg"
                alt="Graphic 7"
                className="absolute w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-lg"
                style={{ top: "70%", left: "60%" }}
              />
              <img
                src="/assets/images/artist8.jpg"
                alt="Graphic 8"
                className="absolute w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-lg"
                style={{ top: "80%", left: "10%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
