import React from "react";
import image from "../../public/images/logo-3.webp";
import Image from "next/image";
import image1 from "../../public/images/logo (1).jpg";
import image2 from "../../public/images/logo (2).jpg";
import image3 from "../../public/images/logo (2).png";
import image4 from "../../public/images/logo (6).jpg";
import image5 from "../../public/images/logo (3).jpg";
import image6 from "../../public/images/logo (3).png";
import image7 from "../../public/images/logo (6).png";
import image8 from "../../public/images/logo (7).png";
import image9 from "../../public/images/logo (7).jpg";
import image10 from "../../public/images/logo (8).png";
import image11 from "../../public/images/logo (9).png";

export default function ConnectCompany() {
  const allCompany = [
    {
      id: 1,
      image: image1,
    },
    {
      id: 1,
      image: image2,
    },
    {
      id: 1,
      image: image3,
    },
    {
      id: 1,
      image: image4,
    },
    {
      id: 1,
      image: image5,
    },
    {
      id: 1,
      image: image6,
    },
    {
      id: 1,
      image: image7,
    },
    {
      id: 1,
      image: image8,
    },
    {
      id: 1,
      image: image9,
    },
    {
      id: 1,
      image: image10,
    },
    {
      id: 1,
      image: image11,
    },
  ];

  return (
    <section className="mt-24 mb-14 border-t-2 border-[#23131c] border-r-2 border-l-2 p-4">
      <div className="grid grid-cols-1 p-6 items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold pb-6">
            Collaborating With Top Industry Experts!
          </h1>
          <p>
            Our agency is a nexus for premier partnerships, trusted by over a
            hundred leading brands to create impactful and innovative
            collaborations. Experience the synergy of creativity and strategy in
            our portfolio of successful projects.
          </p>
          <button className="w-32 h-14 mt-4 btn-outline border-none rounded-md text-[18px] text-white font-bold hover:bg-[#23131c] bg-[#532a41]">
            Connect Now
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {allCompany?.map((company) => (
            <div key={company?.id}>
              <Image
                src={company?.image}
                alt=""
                height={80}
                width={120}
                className="object-fit object-center  min-w-[10rem]"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
