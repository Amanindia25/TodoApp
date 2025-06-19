import React from "react";

export default function ErrorPage() {
  return (
    <div>
      <h1 className="p-2 text-center mt-10 bg-black text-white">Error Page</h1>

      <div className="flex justify-center items-center mt-40">
        <div className="w-[400px] bg-[gray] text-[black] text-xl font-bold h-[200px] flex items-center justify-center">
          <p> 404 Page Not Found</p>
        </div>
      </div>
    </div>
  );
}
