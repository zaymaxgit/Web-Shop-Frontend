import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import star from "../../../assets/products/star.svg";

const WHeadphones = () => {
  /*
    productWH: массив продуктов
    countWH: кол-во максимально выводимых продуктов на странице
    even: текст если продуктов больше не добавить на страницу
  */
  const [prodWH, setProdWH] = useState({
    productWH: [],
    countWH: 6,
    even: "",
  });

  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/wirelessheadphones", {
        count: prodWH.countWH,
      })
      .then((respons) => {
        setProdWH({ ...prodWH, productWH: respons.data });
      });
  }, [prodWH.countWH]);

  const handleClickEvenWH = () => {
    setProdWH({ ...prodWH, countWH: prodWH.countWH + 6 });
    /*Если кол-во продуктов полученных с api меньше чем кол-во
    добавленных продуктов на страницу, добавляется надпись о том,
    что продуктов больше не будет*/
    if (prodWH.productWH.length < prodWH.countWH) {
      setProdWH({ ...prodWH, even: "There are no more products" });
    }
  };

  return (
    <div className="block">
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
                    <Link to={`/${el.title}`} state={{ id: el.id }}>
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
        {prodWH.even.length == 0 ? (
          <button onClick={handleClickEvenWH}>even</button>
        ) : (
          <p>{prodWH.even}</p>
        )}
      </div>
    </div>
  );
};

export default WHeadphones;
