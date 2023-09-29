import React from "react";
import UpArrowIcon from "../assets/icons/UpArrowIcon";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Main() {
  const Products = [
    {
      id: 1,
      img: "./img/Product-1.png",
      text: "Эндоваскулярная",
      bp: "Посмотреть все",
    },
    {
      id: 2,
      img: "./img/Product-2.png",
      text: "Лабораторная",
      bp: "Посмотреть все",
    },
    {
      id: 3,
      img: "./img/Product-3.png",
      text: "Кардиохирургия",
      bp: "Посмотреть все",
    },
    {
      id: 4,
      img: "./img/Product-4.png",
      text: "Кардиохирургия",
      bp: "Посмотреть все",
    },
    {
      id: 5,
      img: "./img/Product-5.png",
      text: "Кардиохирургия",
      bp: "Посмотреть все",
    },
    {
      id: 6,
      img: "./img/Product-6.png",
      text: "Кардиохирургия",
      bp: "Посмотреть все",
    },
  ];

  return (
    <div className="main">
      <div className="main__products container">
        <h1>ПРОДУКЦИЯ</h1>
        <div className="main__products-flex">
          {Products.map((item) => {
            return (
              <div className="main__product" key={item.id}>
                <div className="main__product-img">
                  <img src={item.img} alt="img" />
                </div>
                <p>{item.text}</p>
                <div className="main__product-btns">
                  <button>{item.bp}</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="main__products-end">
          <p>Перейти в каталог нашей продукции</p>
          <UpArrowIcon className="main__products-end-icon" />
        </div>
      </div>

      <div className="main__uslug">
        <h1 className="main__uslug-title">УСЛУГИ</h1>
        <div className="main__uslug-contents">
          <div className="container">
            <div className="main__uslug-contents-flex">
              <div className="main__uslug-content">
                <img src="./img/mainContent-1.png" alt="" />
                <h2>СЕРВИС ОБОРУДОВАНИЯ</h2>
                <p>
                  Компания предоставляет сервисное <br /> обслуживание по всем{" "}
                  <br />
                  предоставляемым продуктам. У наших <br /> инженеров имеется
                  опыт и сертификаты <br /> фирм производителей......
                </p>
                <div className="main__uslug-content-btn">
                  <button>Подробнее</button>
                </div>
              </div>

              <div className="main__uslug-content">
                <img src="./img/mainContent-2.png" alt="" />
                <h2>РЕГИСТРАЦИИ</h2>
                <p>
                  Обеспечение получения <br /> разрешительных документов, <br />
                  регистрационного удостоверения на <br /> изделия медицинского
                  назначения <br /> Подготовка объектов к проведению ....
                </p>
                <div className="main__uslug-content-btn">
                  <button>Подробнее</button>
                </div>
              </div>

              <div className="main__uslug-content">
                <img src="./img/mainContent-3.png" alt="" />
                <h2>УСЛУГИ ЛОГИСТИКИ</h2>
                <p>
                  Компания предоставляет сервисное <br /> обслуживание по всем{" "}
                  <br /> предоставляемым продуктам. У наших <br /> инженеров
                  имеется опыт и сертификаты <br /> фирм производителей.....
                </p>
                <div className="main__uslug-content-btn">
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main__compan container">
        <h1>О КОМПАНИИ</h1>

        <div className="main__compan-contents">
          <div className="main__compan-contents-img">
            <img
              className="main__compan-contents-img-logo"
              src="./img/Logo.png"
              alt=""
            />
            <img
              className="main__compan-contents-img-1"
              src="/img/Ellipse1.png"
              alt=""
            />
            <img
              className="main__compan-contents-img-2"
              src="/img/Ellipse2.png"
              alt=""
            />
            <img
              className="main__compan-contents-img-3"
              src="/img/Ellipse3.png"
              alt=""
            />
          </div>

          <div className="main__compan-contents-vh">
            <p>
              Группа компаний MEDOL создавалась <br /> высококвалифицированными
              специалистами в сфере медицины, <br /> инженерии и экономики, за
              плечами которых значительный опыт <br /> на рынке высоких
              медицинских технологий, которая имеет свои <br />{" "}
              представительства в разных уголках Земли. В 2011 году MEDOL <br />{" "}
              зарегистрировал в Узбекистане ИП ООО “Medical Online Services".{" "}
              <br /> Цель компании построить прозрачный долгосрочный бизнес,{" "}
              <br /> принести пользу обществу путем развития и внедрения
              передовых <br /> технологий в систему здравоохранения Республики
              Узбекистан.{" "}
            </p>
            <button>Узнать больше</button>
          </div>
        </div>
      </div>

      <div className="main__news container">
        <h1>НОВОСТИ</h1>

        <div className="main__news-contents">
          <div className="main__news-contents-content">
            <img src="./img/mainNews.png  " alt="" />
            <p className="main__news-contents-content-p1">
              Mастер-класс в исполнении <br />
              Галлямова Эдуарда <br /> Абдулхаевича
            </p>
            <p className="main__news-contents-content-p2">26.07.2021</p>
            <p className="main__news-contents-content-p3">
              С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
              Специализированный <br /> Научно-Практический Медицинский Центр{" "}
              <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
              Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
              Services» был <br /> проведен мастер-класс в исполнении...
            </p>
            <button>Подробнее</button>
          </div>

          <div className="main__news-contents-content">
            <img src="./img/mainNews.png  " alt="" />
            <p className="main__news-contents-content-p1">
              Mастер-класс в исполнении <br />
              Галлямова Эдуарда <br /> Абдулхаевича
            </p>
            <p className="main__news-contents-content-p2">26.07.2021</p>
            <p className="main__news-contents-content-p3">
              С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
              Специализированный <br /> Научно-Практический Медицинский Центр{" "}
              <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
              Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
              Services» был <br /> проведен мастер-класс в исполнении...
            </p>
            <button>Подробнее</button>
          </div>

          <div className="main__news-contents-content">
            <img src="./img/mainNews.png  " alt="" />
            <p className="main__news-contents-content-p1">
              Mастер-класс в исполнении <br />
              Галлямова Эдуарда <br /> Абдулхаевича
            </p>
            <p className="main__news-contents-content-p2">26.07.2021</p>
            <p className="main__news-contents-content-p3">
              С 19 по 21 апреля в АО «РСНПМЦУ» <br /> (Республиканский
              Специализированный <br /> Научно-Практический Медицинский Центр{" "}
              <br /> Урологии) при поддержке компаний <br /> Ethicon Endo
              Surgery (Johnson&Johnson) и <br /> ИП ООО «Medical Online
              Services» был <br /> проведен мастер-класс в исполнении...
            </p>
            <button>Подробнее</button>
          </div>
        </div>

        <div className="main__news-icons1">
          <IoIosArrowBack className="main__news-icons1-icon" />
        </div>

        <div className="main__news-icons2">
          <IoIosArrowForward className="main__news-icons2-icon" />
        </div>

        <div className="main__news-links">
          <div>
            <a href="#">Посмотреть все новости</a>
            <UpArrowIcon className="main__news-links-icon" />
          </div>

          <div>
            <a href="#">Подписаться на новости</a>
            <UpArrowIcon className="main__news-links-icon" />
          </div>
        </div>
      </div>

      <div className="main__partners container">
        <h1>ПАРТНЕРЫ</h1>
        
        <div className="main__partners-contents">
            <div className="main__partners-contents-content">
                <img src="./img/partner1.png" alt="" />
            </div> 

            <div className="main__partners-contents-content">
                <img src="./img/partner2.png" alt="" />
            </div> 

            <div className="main__partners-contents-content">
                <img src="./img/partner3.png" alt="" />
            </div> 

            <div className="main__partners-contents-content">
                <img src="./img/partner4.png" alt="" />
            </div> 

            <div className="main__partners-contents-content">
                <img src="./img/partner5.png" alt="" />
            </div> 

            <div className="main__partners-contents-content">
                <img src="./img/partner6.png" alt="" />
            </div> 

            <div className="main__partners-contents-content">
                <img src="./img/partner1.png" alt="" />
            </div> 

            <div className="main__partners-contents-content">
                <img src="./img/partner1.png" alt="" />
            </div> 
        </div>
      </div>
    </div>
  );
}

export default Main;
