import React from "react";
import Image from "next/image"; // Import Next.js Image component

// Importing local images returns an object, not a string
import image1 from "../../public/images/Brands (png)-03.png";
import image2 from "../../public/images/Brands (png)-02.png";
import image3 from "../../public/images/logo9.jpeg";
import image4 from "../../public/images/Brands (png)-04.png";
import image5 from "../../public/images/Doner kebab-01.jpg.jpeg";
import image6 from "../../public/images/Brands (png)-06 (1).png";

const services = [
  { title: "Creative", image: image1 },
  { title: "Creative", image: image2 },
  { title: "Niaz Design", image: image3 },
  { title: "Brand Name", image: image4 },
  { title: "Express", image: image5 },
  { title: "Innovate", image: image6 },
];

export default function ConnectCompany() {
  return (
    <section className="relative w-full py-20 mt-14 mb-14 bg-black text-white overflow-hidden">
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

          <button className="bg-[#5e36d0] hover:bg-[#4b29b0] px-6 py-3 rounded-md font-semibold transition-colors">
            VIEW ALL CLIENT
          </button>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md border border-gray-700 p-6 flex flex-col items-center justify-center rounded-lg hover:border-gray-500 transition"
            >
              {/* Using Next.js Image component to handle the imported object */}
              <div className="relative w-24 h-24 mb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
      
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
