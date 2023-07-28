import "./footer.style.scss";
import vk from "../../assets/footer/VK.svg";
import tg from "../../assets/footer/Telegram.svg";
import wa from "../../assets/footer/Whatsapp.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logoFooter">
        <h2>TWICE</h2>
      </div>
      <div className="linkFooter">
        <ul>
          <li>Favourites</li>
          <li>Basket</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="servicesFooter">
        <li>Conditions</li>
        <div className="languageFooter">
          <button>Rus</button>
          <button>Eng</button>
        </div>
      </div>
      <div className="linkContactFoot">
        <img src={vk} alt="" />
        <img src={tg} alt="" />
        <img src={wa} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
