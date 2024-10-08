import Image from "next/image";
import React from "react";
import { RiStarSFill } from "react-icons/ri";

export default function Comment() {
  return (
    <>
      <div className="py-4 border-b-2 border-[#696984]">
        <div className="flex">
          <div className="w-10 h-10 rounded-full bg-red-500 mr-2 overflow-hidden">
            <div
              alt="Your Image"
              width={100}
              height={100}
              className="bg-[url('https://i.pinimg.com/originals/84/10/25/8410254c241398e2ad9d26911d9d231e.jpg')] bg-cover bg-center h-[40.75rem] w-full relative"
            />
          </div>
          <div className="w-full">
            <h3>name</h3>
            <div className="flex justify-between">
              <div className="flex text-[#FDB022] ">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
              <p className="text-[rgba(0,0,0,0.5)]">date</p>
            </div>
          </div>
        </div>
        <p className="text-[rgba(0,0,0,0.5)]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          voluptate sapiente, eveniet quibusdam at repellat repellendus.
        </p>
      </div>
    </>
  );
}
