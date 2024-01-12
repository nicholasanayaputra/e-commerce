import React from "react";

const Category = () => {
  const category = [
    { id: 1, img: "src/assets/Image/category-1.png", name: "Dining" },
    { id: 2, img: "src/assets/Image/category-2.png", name: "Living" },
    { id: 3, img: "src/assets/Image/category-3.png", name: "Bedroom" },
  ];

  return (
    <div className="px-[35px] md:px-[53px]">
      <div>
        <h1 className="font-bold text-center text-2xl md:text-3xl text-gray-primary mt-[50px]">
          Browse The Range
        </h1>
        <p className="text-gray-secondary text-center text-sm my-4 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.map(({ id, img, name }) => (
            <div key={id} className="flex flex-col items-center">
              <img src={img} alt="" />
              <p className="text-gray-primary text-center font-semibold text-lg my-4 md:text-xl">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
