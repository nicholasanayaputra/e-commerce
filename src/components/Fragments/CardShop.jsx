import CardProduct from "../../components/Fragments/CardProduct";

const CardShop = ({ products }) => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 pt-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} discount={product.disc} />
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

export default CardShop;
