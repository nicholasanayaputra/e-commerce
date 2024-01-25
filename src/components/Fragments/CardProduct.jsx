import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="bg-[#F4F5F7]">{children}</div>
    </>
  );
};

const Header = (props) => {
  const { image, product } = props;
  return (
    <>
      <Link to={`/shop/${product}`}>
        <img
          src={image}
          alt=""
          className="w-[285px] object-cover h-[301px] hover:scale-105 transition-all duration-200 "
        />
      </Link>
    </>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="p-4">
      <h5 className="font-semibold text-xl text-gray-third mb-1">{name}</h5>
      <p className="font-medium text-sm text-gray-fourth">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, discount } = props;
  return (
    <div className="px-4 pb-[20px] flex items-center gap-4">
      <h3 className="font-semibold text-base text-gray-third">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </h3>
      <p className="text-[#B0B0B0] font-normal text-sm hidden md:block line-through">
        {discount}
      </p>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
