"use client";
import Image from "next/image";
import { Typography, Button, TextField, Stack } from "@mui/material";
import { useRef, useState } from "react";
import axios from "axios";
export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef();
  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      message: inputRef.current.value,
      toggle: isChecked,
    };
    const requestOptions = {
      mode: "cors",
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    // const res = await axios.put("https://our-test-api.iran.liara.run/", body);
    const res = await fetch(
      "https://our-test-api.iran.liara.run/",
      requestOptions
    );
    const json = await res.json();

    console.log(json);
  }
  const checkHandler = () => {
    setIsChecked((isChecked) => !isChecked);
  };
  return (
    <main className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col items-center justify-center gap-3 outline-none my-4 "
        onSubmit={handleSubmit}
      >
        <h3 className=" text-white">Enter your data</h3>
        <input
          ref={inputRef}
          type="text"
          className="rounded bg-slate-300 p-1 outline-none"
        ></input>
        <div>
          <label className="relative inline-flex items-center justify-center cursor-pointer">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              onChange={checkHandler}
              checked={isChecked}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-white">LED</span>
          </label>
        </div>
        <button className=" min-w-full bg-blue-700 text-white font-normal p-2 px-3 rounded-md hover:bg-blue-500">
          Send
        </button>
      </form>
    </main>
  );
}
