import "./producthome.style.scss";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import star from "../../assets/products/star.svg";

interface productSet {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  type: string;
}

const ProductHome = () => {
  const [data, setData] = useState<productSet>();
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/product", { id: loc.state.id })
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const loc = useLocation();
  return (
    <section className="blockProduct">
      {data != undefined ? (
        <div className="headphone">
          <div className="img">
            <img src={data.img} alt="" />
          </div>
          <div className="nameProd">
            <h3>{data.title}</h3>
            <p>
              {data.price}
              <span>
                <s>{data.oldPrice}</s>
              </span>
            </p>
          </div>
          <div className="buyProd">
            <div>
              <img src={star} alt="" />
              <p>{data.rate}</p>
            </div>
            <button>Buy</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default ProductHome;
