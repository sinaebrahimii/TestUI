"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCampground, FaMapMarker, FaClock } from "react-icons/fa";
import images from "../images";
import Image from "next/image";

const Tours = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <section className=" flex flex-col bg-text py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center text-4xl font-semibold px-5 py-5 mb-5 text-primary-400 text-center ">
          <p>Featured Tours</p>
          <span className="ml-2">
            <FaCampground />
          </span>
        </div>
        <motion.div ref={carousel} className=" overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex items-center gap-4 "
          >
            {images.map((img, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md w-[300px] lg:w-[400] mx-5 shrink-0 bg-white shadow-lg shadow-primary-600 "
                >
                  <Image
                    src={img}
                    className="w-full h-[300px] rounded-md object-cover pointer-events-none"
                    alt="image"
                  ></Image>

                  <div className=" px-2 my-5 text-text">
                    <h3 className=" font-bold">Tour Name</h3>
                    <span className="flex items-center text-sm text-accent gap-2">
                      <FaMapMarker className="text-md" />
                      Somewhere Cool
                    </span>
                    <span className="flex items-center text-sm text-accent gap-2">
                      <FaClock className="text-md" />3 Days
                    </span>
                    <p className="text-text">
                      This a description for a tour.meow meow meow
                    </p>
                    <div className="flex"></div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tours;
