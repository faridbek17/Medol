import React from "react";
import LocalIcon from "../assets/icons/LocalIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__menu">
            <div className="header__menu-inf">
              <LocalIcon className="header__menu-icon" />
              <p>
                г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
              </p>
            </div>

            <div className="header__menu-inf">
              <PhoneIcon className="header__menu-icon" />
              <p>
                +998 71 276-62-53 <br /> +998 71 276-62-54
              </p>
            </div>

            <div className="header__menu-logo">
              <img src="./img/Logo.png" alt="Logo" />
            </div>

            <div className="header__menu-search">
              <SearchIcon className="header__menu-icon" />
            </div>

            <div className="header__menu-btns">
              <button>
                {" "}
                <FacebookIcon className="header__menu-facebookicon" />{" "}
                <p>Мы на Facebook</p>
              </button>
              <button className="header__menu-btn">
                {" "}
                <img src="./img/Flag.png" alt="" /> <p>Русский</p>
              </button>
            </div>
          </div>

          <nav className="header__nav">
            <a href="#">МАГАЗИН</a>
            <a href="#">О КОМПАНИИ</a>
            <a href="#">ПРОДУКЦИЯ</a>
            <a href="#">УСЛУГИ</a>
            <a href="#">АКЦИИ И НОВОСТИ</a>
            <a href="#">ОБРАТНАЯ СВЯЗЬ</a>
          </nav>
        </div>

        <div className="header__contents">
          <div className="header__contents-1">
            <h1>
              Анализатор <br /> ABL800 FLEX
            </h1>
            <p>
              Ориентированный на среднюю или высокую <br /> производительность
              тестов, анализатор ABL800 FLEX <br /> измеряет полный набор
              параметров, включая pH, газы <br /> крови, электролиты, метаболиты
              и показатели
            </p>
            <button>Подробнее</button>
          </div>
          <div className="header__content">
            <img src="./img/h-contentImg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
