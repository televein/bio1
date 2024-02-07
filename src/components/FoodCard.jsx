import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {

  

  const navigate = useNavigate();



  const handleFoodClick = () => {
    navigate(`/menu/${item.id}`);
  };

  return (
    <div
      onClick={handleFoodClick}
      className="cursor-pointer rounded-2xl shadow-blue-200 hover:shadow-2xl hover:scale-105 duration-500 shadow-lg"
    >
      {/* food container */}
      <div className="">
        <img
          src={item.image}
          alt={item.name}
          className="w-full md:w-101 h-full md:h-102 object-cover rounded-lg"
        />
      </div>
      {/* Details of Food, Price and Cart */}
      <div className="flex">
        {/* Laptop View */}
        <div className="  pb-2 pt-2 flex-col gap-2 w-full items-start object-cover rounded-lg">
          <h2 className="md:w-101 lg:text-xl font-bold  whitespace-nowrap text-center">
            {item.name}
          </h2>
          <div className="flex-none">
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodCard;