import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import star from "../../../assets/products/star.svg";

const Headphones = () => {
  /*
    productH: массив продуктов
    countH: кол-во максимально выводимых продуктов на странице
    even: текст если продуктов больше не добавить на страницу
  */
  const [prod, setProd] = useState({
    productH: [],
    countH: 6,
    even: "",
  });
  useEffect(() => {
    axios
      .post("http://127.0.0.1:8000/api/headphones", { count: prod.countH })
      .then((respons) => {
        setProd({ ...prod, productH: respons.data });
      })
      .catch(() => {
        setProd({ ...prod, productH: ["Server no connect"] as never });
      });
  }, [prod.countH]);

  const handleClickEvenH = () => {
    setProd({ ...prod, countH: prod.countH + 6 });
    /*Если кол-во продуктов полученных с api меньше чем кол-во
    добавленных продуктов на страницу, добавляется надпись о том,
    что продуктов больше не будет*/
    if (prod.productH.length < prod.countH) {
      setProd({ ...prod, even: "There are no more products" });
    }
  };

  return (
    <div className="block">
      <div className="nameProducts">Headphones</div>
      <div className="products" data-testid="list">
        {prod.productH.length > 1 ? (
          (prod.productH as any).map((el: any, index: any) => {
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
        ) : (
          <div className="headphoneNoConnect">{prod.productH[0]}</div>
        )}
      </div>
      <div className="even">
        {prod.even.length == 0 ? (
          <button onClick={handleClickEvenH}>even</button>
        ) : (
          <p>{prod.even}</p>
        )}
      </div>
    </div>
  );
};

export default Headphones;
