import React from "react";
import { imageData } from "./data";

const Gellary = () => {
  return (
    <div className='p-6 h-auto mb-5 block overflow-hidden '>
    <h2 className='text-center text-3xl  text-blue-500 border-indigo-600 w-2/3 mx-auto mb-8 font-semibold h-auto border-double border-4  py-3'>Image Gallery</h2>
    <div className="grid grid-cols-3 gap-4">
      {imageData.map((data, index) => (
        <img
          key={index}
          src={data.image}
          className="w-[400px] h-[300px] object-cover rounded-md"
        />
      ))}
    </div>
    </div>
  )
};

export default Gellary;
