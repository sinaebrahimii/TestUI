"use client";
import Image from "next/image";
import { Typography, Button, TextField, Stack } from "@mui/material";
import { useState } from "react";
export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked((isChecked) => !isChecked);
  };
  return (
    <main className="container  m-auto h-screen flex items-center justify-center ">
      <form className="flex flex-col items-center justify-center gap-3 outline-none my-4">
        <h3>Enter your data</h3>
        <input
          type="text"
          className="rounded bg-slate-300 p-1 outline-none"
        ></input>
        <button className=" bg-blue-700 text-white font-normal p-2 px-3 rounded-md hover:bg-blue-500">
          Send
        </button>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            onChange={checkHandler}
            checked={isChecked}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            Toggle me
          </span>
        </label>
      </form>
    </main>
  );
}
