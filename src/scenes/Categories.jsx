import React, {useEffect} from "react";
import { categories } from "../data/data.js";
import { useNavigate,  } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
  };

   // Scroll to top on component mount
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container relative mt-24 lg:mt-6 mx-auto p-5 ">
      <div className=" lg:mx-5 lg:mt-6">
        {/*Header*/}
        <h1 className="font-bold text-2xl lg:text-3xl p-5 text-left">
        Our <span className="text-blue-500">Categories</span>
        </h1>
        <hr />
      </div>
      
        {/* Categories */}
        <div className="m-5 cursor-pointer lg:m-10 lg:p-8 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.name.toLowerCase())}
              className="bg-blue-200 gap-5 mx-7 rounded-lg p-4 flex justify-center items-center hover:scale-105 duration-500 lg:flex-col lg:h-[200px] lg:justify-center lg:items-center"
            >
              <h2 className="font-bold sm:text-xl">{item.name}</h2>
              <img src={item.image} alt={item.name} className="w-20" />
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default Categories;
