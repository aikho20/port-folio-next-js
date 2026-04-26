import React, { useEffect } from "react";
import Carousel from "../Carousel";

function Card({
  title,
  description,
  responsibilities,
  onClick,
  resources,
  tech,
}) {
  return (
    <div className="p-5" onClick={() => onClick()}>
      <div className="flex items-cecnter justify-center w-100">
        <img src={resources?.[0]} alt="image" className="max-h-[250px]" />
      </div>

      <h5 className="my-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap text-xs">
        {description}
      </p>
      {/* {responsibilities.map((item) => (
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-wrap text-xs">
          {item}
        </p>)
      )} */}
    </div>
  );
}

export default Card;
