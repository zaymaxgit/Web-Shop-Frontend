import Products from "../../components/Products/Products";
import Basket from "../Basket/Basket";
import "../Home/home.style.scss";
import { Route, Routes } from "react-router-dom";
import ProductHome from "../Product/ProductHome";

const Home = () => {
  return (
    <section className="home">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="basket" element={<Basket />} />
        <Route path="/:product" element={<ProductHome />} />
      </Routes>
    </section>
  );
};

export default Home;
