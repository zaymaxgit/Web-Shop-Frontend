import "../Header/header.style.scss";
import like from "../../assets/userUsage/like.svg";
import basket from "../../assets/userUsage/basket.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h2>TWICE</h2>
      </div>
      <div className="userUsage">
        <div className="userStore">
          <img src={like} alt="" />
          <img src={basket} alt="" />
        </div>
        <div className="userSet">
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
