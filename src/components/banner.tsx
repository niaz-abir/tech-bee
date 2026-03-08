import Image from "next/image";

import image from "../../public/images/hero.jpg";

export function Banner() {
  return (
    <section>
      <div
        className="grid backdrop-blur-xl p-6 rounded-md 
 grid-cols-1 mt-14  items-center justify-items-center md:grid-cols-2"
      >
        <div className="flex flex-col items-center gap-y-5 text-center md:items-start md:text-start">
          <h1 className="text-[clamp(2rem,_4vw+1rem,_4rem)] font-extrabold capitalize leading-tight tracking-tight">
            We craft digital marketing that converts!
          </h1>
          <p className="max-w-[30rem] text-lg leading-relaxed text-foreground-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga
            sint omnis ut ratione delectus error eius expedita optio nostrum
            quia repudiandae laborum, quis molestiae.
          </p>
          <div className="flex items-center gap-x-4 pt-4 pb-4">
            <button className="w-full bg-[#5e36d0] hover:bg-[#4b29b0] transition py-4 px-4 rounded-lg font-medium">
              Get a Quote
            </button>
            
          </div>
        </div>
        <Image
          src={image}
          alt="Hero"
          className="rounded-md"
          height="600"
          width="600"
        />
      </div>
    </section>
  );
}
