import React from "react";

export default function RegistrationPage() {
  return (
    <div className="flex justify-center align-center bg-white mt-32  ">
      <form className="flex flex-col w-[60%]  gap-3 ">
        <h1 className="text-center bg-black text-white p-[9px] mt-10 ">
          Ragisteration Form
        </h1>
        <div className="flex  w-[100%]    gap-3 w- justify-center items-center">
          <label className="text-2xl w-[20%]" htmlFor="username">
            Name
          </label>{" "}
          <input
            required
            id="username"
            className="border-black w-[78%] p-2  px-10 border"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex  w-[100%]  justify-center items-center   gap-3">
          <label className="text-2xl w-[20%]" htmlFor="email">
            Email
          </label>

          <input
            id="email"
            required
            className="border-black w-[78%] p-2 px-10 border"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex  w-[100%]  justify-center items-center   gap-3">
          <label className="text-2xl w-[20%]" htmlFor="password">
            Password
          </label>

          <input
            id="password"
            required
            className="border-black w-[78%] p-2 px-10 border"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="border-black px-10 p-2 bg-[#b4b4ff] border">
          Sign Up
        </button>
      </form>
    </div>
  );
}
