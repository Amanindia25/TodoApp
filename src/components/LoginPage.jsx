import React from "react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center bg-white mt-32">
      <form className="flex flex-col w-[60%] gap-3">
        <h1 className="text-center bg-black text-white p-3 mt-10">
          Login Form
        </h1>

        <div className="flex w-full gap-3 justify-center items-center">
          <label className="text-2xl w-[40%]" htmlFor="identifier">
            Email / Username
          </label>
          <input
            required
            id="identifier"
            className="border border-black w-[60%] p-2 px-10"
            type="text"
            placeholder="Enter email or username"
          />
        </div>

        <div className="flex w-full gap-3 justify-center items-center">
          <label className="text-2xl w-[40%]" htmlFor="password">
            Password
          </label>
          <input
            required
            id="password"
            className="border border-black w-[60%] p-2 px-10"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button className="border border-black px-10 p-2 bg-[#b4b4ff]">
          Login
        </button>
      </form>
    </div>
  );
}
