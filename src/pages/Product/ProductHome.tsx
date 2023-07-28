import "./producthome.style.scss";
import { useLocation } from "react-router-dom";

const ProductHome = () => {
  const loc = useLocation();
  return <section>Product Home/ id: {loc.state.id}</section>;
};

export default ProductHome;
