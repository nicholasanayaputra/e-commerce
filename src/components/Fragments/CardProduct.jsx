const CardProduct = (props) => {
  const { children } = props;
  return (
    <>
      <div className="bg-[#F4F5F7]">{children}</div>
    </>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <>
      <img src={image} alt="" className="w-[285px] object-cover h-[301px]" />
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
      <h3 className="font-semibold text-base text-gray-third">{price}</h3>
      <p className="text-[#B0B0B0] font-normal text-base hidden md:block">
        {discount}
      </p>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
