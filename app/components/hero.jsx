import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <main className="container mx-auto my-10 py-5 flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col justify-center items-center pl-4 my-10 ">
        <h1 className="text-text text-5xl text-center font-black">
          Let's Explore!
        </h1>
        <h2 className="mt-5 mb-5 text-center text-primary-600 text-2xl font-bold">
          Ready to trade city lights for starry nights?<br></br> Join us and
          discover what's your wildest camping adventure dream
        </h2>
        <Link
          href={"signup"}
          className=" bg-gradient-to-tr from-primary-400 to-accent max-w-max p-4 rounded text-text font-bold"
        >
          Sign Up For Adventure !
        </Link>
      </div>
      <div className="flex justify-center ">
        <Image src={"/camp.webp"} width={500} height={500}></Image>
      </div>
    </main>
  );
};

export default Hero;
