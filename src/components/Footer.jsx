import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer ">
      <div className="container">
        <div className="footer__flex">
          <div className="footer__left">
            <div className="footer__left-title">
              <h1>Контакты</h1>
            </div>

            <div className="footer__left-flex">
              <div className="footer__left-context">
                <div className="footer__left-context-icons">
                  <FaLocationDot className="footer__left-context-icons-icon" />
                </div>
                <p>
                  г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                </p>
              </div>

              <div className="footer__left-context">
                <div className="footer__left-context-icons">
                  <BiSolidPhoneCall className="footer__left-context-icons-icon" />
                </div>
                <p>
                  +998 71 276-62-53 <br /> +998 71 276-62-54
                </p>
              </div>

              <div className="footer__left-context">
                <div className="footer__left-context-icons">
                  <FaLocationDot className="footer__left-context-icons-icon" />
                </div>
                <p>
                  г.Ташкент, Чиланзар <br /> 10 квартал, дом 3/1
                </p>
              </div>

              <button className="footer__left-flex-btn">Оставить заявку</button>
            </div>

            <div className="footer__left-bottom">
              <img src="./img/Logo.png" alt="" />
              <p>
                Наша цель – построить прозрачный, <br /> долгосрочный бизнес,
                приносить огромную <br /> пользу населению, путем решения
                глобальных <br /> вопросов. Внедряя инновационные технологии{" "}
                <br /> на рынок Узбекистана.
              </p>
            </div>
          </div>

          <div className="footer__right">
            <div className="footer__right-content">
              <h1>О компании </h1>
              <p>История</p>
              <p>Партнеры</p>
              <p>Вакансии</p>
            </div>

            <div className="footer__right-content">
              <h1>Продукция</h1>
              <p>Эндоваскулярная хирургия</p>
              <p>Аритмология</p>
              <p>Кардиохирургия</p>
              <p>Лабораторная диагностика</p>
              <p>Хирургия</p>
              <p>Эндоурология</p>
              <p>Нейрохирургия</p>
              <p>Анестезиология и реанимация</p>
              <p>Диабет</p>
            </div>

            <div className="footer__right-content">
              <h1>Услуги</h1>
              <p>Сервис</p>
              <p>Регистрации</p>
              <p>Услуги логистики</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__inf container">
        <p>© 2021 ООО «Medical Online Services»</p>
        <p>Сайт разработан компанией www.uz</p>
      </div>
    </div>
  );
}

export default Footer;
