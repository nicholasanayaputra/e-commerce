import React from "react";

const Description = (props) => {
  const { image } = props;
  return (
    <div className="border-t-[1px] py-12 px-6">
      <div className="flex items-center justify-center gap-5 text-base font-semibold text-[#9F9F9F]">
        <h1 className="font-bold text-black">Description</h1>
        <h1>Additional Information</h1>
        <h1>Reviews [5]</h1>
      </div>
      <div className="pt-8 text-xs font-normal text-[#9F9F9F] text-justify">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          voluptatibus maiores omnis, sit nihil odio?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          voluptate eaque enim dolorem quisquam tenetur quidem repellendus! Ad
          asperiores atque sunt iure dignissimos ipsa exercitationem cum eveniet
          possimus itaque, at maxime blanditiis molestias velit accusantium a id
          autem ea provident!
        </p>
      </div>
      <div className="grid grid-cols-6 gap-3 pt-3">
        <div className="col-span-3">
          <img src={image} alt="" className="rounded-lg" />
        </div>
        <div className="col-span-3">
          <img src={image} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Description;
