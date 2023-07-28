import "./product.style.scss";
import product from "../../assets/products/Image.png";
import star from "../../assets/products/star.svg";

const Product = () => {
  return (
    <div className="headphone">
      <div className="img">
        <img src={product} alt="" />
      </div>
      <div className="nameProd">
        <h3>Apple BYZ S852I</h3>
        <p>
          2927 ₽{" "}
          <span>
            <s>2927 ₽</s>
          </span>
        </p>
      </div>
      <div className="buyProd">
        <div>
          <img src={star} alt="" />
          <p>4.7</p>
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Product;
