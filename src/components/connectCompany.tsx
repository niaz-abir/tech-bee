/* eslint-disable @next/next/no-img-element */
import React from "react";

const services = [
  {
    title: "Creative",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Creative",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    title: "Niaz Design",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    title: "Brand Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "Express",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    title: "Innovate",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
];

export default function ConnectCompany() {
  return (
    <section className="relative w-full py-20 mt-14 mb-14 bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1196&auto=format&fit=crop')",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Hundreds of Clients <br /> Trust Our Company
          </h2>

          <p className="text-gray-300 mb-6">
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose.
          </p>

          <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md font-semibold">
            VIEW ALL CLIENT
          </button>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md border border-gray-700 p-6 flex flex-col items-center justify-center rounded-lg  transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 object-contain mb-2"
              />
              <p className="font-semibold text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
