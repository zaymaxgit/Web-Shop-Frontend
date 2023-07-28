import "../Products/product.style.scss";
import { Link } from "react-router-dom";
import star from "../../assets/products/star.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [prod, setProd] = useState({
    productH: [],

    countH: 6,

    even: "",
  });
  const [prodWH, setProdWH] = useState({
    productWH: [],
    countWH: 6,
  });

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/headphones", { count: prod.countH })
      .then((respons) => {
        setProd({ ...prod, productH: respons.data });
      });
  }, [prod.countH]);

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/wirelessheadphones", {
        count: prodWH.countWH,
      })
      .then((respons) => {
        setProdWH({ ...prodWH, productWH: respons.data });
      });
  }, [prodWH.countWH]);

  console.log(prod, prodWH.productWH);
  //console.log(prod.even.length);

  const handleClickEven = () => {
    setProd({ ...prod, countH: prod.countH + 6 });
    if (prod.productH.length < prod.countH) {
      setProd({ ...prod, even: "There are no more products" });
    }
    console.log(prod.productH.length, prod.countH);
  };

  return (
    <section className="productsBlock">
      <div className="nameProducts">Headphones</div>
      <div className="products">
        {prod.productH.length != 0
          ? (prod.productH as any).map((el: any, index: any) => {
              return (
                <div className="headphone" key={index}>
                  <div className="img">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="nameProd">
                    <Link to={`/${el.title}`} state={{ id: el.title }}>
                      <h3>{el.title}</h3>
                    </Link>
                    <p>
                      {el.price}
                      <span>
                        <s>{el.oldPrice}</s>
                      </span>
                    </p>
                  </div>
                  <div className="buyProd">
                    <div>
                      <img src={star} alt="" />
                      <p>{el.rate}</p>
                    </div>
                    <button>Buy</button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <div className="even">
        {prod.even.length == 0 ? (
          <button onClick={handleClickEven}>even</button>
        ) : (
          <p>{prod.even}</p>
        )}
      </div>

      <div className="nameProducts">Wireless headphones</div>
      <div className="products">
        {prodWH.productWH != undefined
          ? (prodWH.productWH as any).map((el: any, index: any) => {
              return (
                <div className="headphone" key={index}>
                  <div className="img">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="nameProd">
                    <Link to={`/${el.title}`} state={{ id: el.title }}>
                      <h3>{el.title}</h3>
                    </Link>
                    <p>
                      {el.price}
                      <span>
                        <s>{el.oldPrice}</s>
                      </span>
                    </p>
                  </div>
                  <div className="buyProd">
                    <div>
                      <img src={star} alt="" />
                      <p>{el.rate}</p>
                    </div>
                    <button>Buy</button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Products;
