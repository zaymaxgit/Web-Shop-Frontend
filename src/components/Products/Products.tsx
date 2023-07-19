import "../Products/product.style.css";
import Product from "../Product/Product";
import { Link } from "react-router-dom";

const Products = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <section className="productsBlock">
      <div className="nameProducts">Headphones</div>
      <div className="products">
        {arr.map((id) => {
          return (
            <Link to={`/${id}`} state={{ id: id }}>
              <Product />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
