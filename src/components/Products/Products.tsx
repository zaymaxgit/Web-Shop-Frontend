import "../Products/product.style.scss";
import Headphones from "./Headphones/Headphones";
import WHeadphones from "./WHeadphones/WHeadphones";

const Products = () => {
  return (
    <section className="productsBlock">
      <Headphones />
      <WHeadphones />
    </section>
  );
};

export default Products;
