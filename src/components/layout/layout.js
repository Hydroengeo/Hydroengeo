import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";
import Blazon from "../../assets/images/blazon.png";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import youtube from "../../assets/images/youtube.svg";
import telegram from "../../assets/images/telegram.svg";

const Layout = ({ children }) => {
  return (
    <>
      {/* //Header */}
      <header id="header">
        <div className="container">
          <Link href="/">
            <a className="header__logo">
              <Image src={Logo} alt="Hydroengo logo" width="295" height="120" />
            </a>
          </Link>

          <ul className="header__contact-list">
            <li className="header__contact-item">
              <p>
                100041 Узбекистан, Ташкент <br />
                ул. Олимлар -64
              </p>
            </li>
            <li className="header__contact-item">
              <p>
                hydrouz@hydroengeo.uz <br /> hydrouz@exat.uz
              </p>
            </li>
            <li className="header__contact-item">
              <p>Tel: 998(71)265-03-78</p>
            </li>
          </ul>

          <ul className="lang">
            <li className="lang__item">
              <span>РУ</span>
            </li>
            <li className="lang__item">
              <span>УЗ</span>
            </li>
            <li className="lang__item">
              <span>EN</span>
            </li>
          </ul>

          <div className="search-wrapper">
            <Image
              className="header__search"
              src={Search}
              alt="search icon"
              width="40"
              height="40"
            />
          </div>
          <Image
            className="header__blazon"
            src={Blazon}
            alt="Blazon of Uzbekistan"
            width="120"
            height="120"
          />
        </div>
      </header>

      {/* //Main */}
      <main className="main">{children}</main>

      {/* //Footer */}
      <footer className="footer" id="footer">
        <div className="border-box"></div>
        <div className="container">
          <div className="footer__left-box">
            <ul className="left-box__list-top">
              <li className="left-box__item-top">
                <div className="logo-box">
                  <Link href="/">
                    <a className="header__logo">
                      <Image src={Logo} alt="Hydroengo logo" width="295" height="120" />
                    </a>
                  </Link>
                </div>

                <div className="app-box">
                  <ul className="app-box__list">
                    <li className="app-box__item">
                      <a className="app-box__link" href="https://m.facebook.com/login/?locale2=ru_RU">
                        <Image src={facebook} alt="facebook logo" width="36" height="36" />
                      </a>
                    </li>

                    <li className="app-box__item">
                      <a className="app-box__link" href="https://twitter.com/login">
                        <Image src={twitter} alt="twitter logo" width="36" height="36" />
                      </a>
                    </li>

                    <li className="app-box__item">
                      <a className="app-box__link" href="https://www.instagram.com/">
                        <Image src={instagram} alt="instagram logo" width="36" height="36" />
                      </a>
                    </li>


                    <li className="app-box__item">
                      <a className="app-box__link" href="https://www.youtube.com/?hl=ru">
                        <Image src={youtube} alt="youtube logo" width="36" height="36" />
                      </a>
                    </li>

                    <li className="app-box__item">
                      <a className="app-box__link" href="https://telegram.org/">
                        <Image src={telegram} alt="telegram logo" width="36" height="36" />
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Disply-block 890px */}
                <ul className="left-box__list-bottom left-box__list-bottom--display-2">
                  <li className="left-box__item-bottom">
                    <a className="left-box__item-bottom__link"
                      href="https://www.google.ru/maps/search/100041+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D1%83%D0%BB.+%D0%9E%D0%BB%D0%B8%D0%BC%D0%BB%D0%B0%D1%80+-64/@41.2825125,69.1392826,11z/data=!3m1!4b1"
                    >
                      100041 Узбекистан, Ташкент <br />
                      ул. Олимлар -64
                    </a>
                  </li>

                  <li className="left-box__item-bottom">
                    <a className="left-box__item-bottom__link" href="https://hydroengeo.uz/">
                      hydrouz@hydroengeo.uz <br />
                      hydrouz@exat.uz
                    </a>
                  </li>

                  <li className="left-box__item-bottom">
                    <a className="left-box__item-bottom__link" href="tel: +998712650378">
                      Tel: 998(71)265-03-78
                    </a>
                  </li>
                </ul>

              </li>
              <li className="left-box__item-top">
                <Link href="/">
                  <a className="left-box__item-top__title">
                    <strong>ОБ ИНСТИТУТЕ</strong>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>СТРУКТУРА ИНСТИТУТА</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>РУКОВОДСТВО</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>ИСТОРИЯ ИНСТИТУТА</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>МИССИЯ И ПОЛИТИКА</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>СОТРУДНИЧЕСТВО</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>ИСТОРИЯ И РУКОВОДСТВО</p>
                  </a>
                </Link>
              </li>

              <li className="left-box__item-top">
                <Link href="/">
                  <a className="left-box__item-top__title">
                    <strong>ДЕЯТЕЛЬНОСТЬ</strong>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>НАУЧНАЯ</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>ПРОИЗВОДСТВЕННАЯ</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>ОБРАЗОВАНИЕ</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__title">
                    <strong>НОРМАТИВНАЯ БАЗА</strong>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>КОНТАКТЫ</p>
                  </a>
                </Link>

                <Link href="/">
                  <a className="left-box__item-top__info">
                    <p>ИНТЕРАКТИВНЫЕ УСЛУГИ</p>
                  </a>
                </Link>
              </li>
            </ul>

            <ul className="left-box__list-bottom">
              <li className="left-box__item-bottom">
                <a className="left-box__item-bottom__link"
                  href="https://www.google.ru/maps/search/100041+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D1%83%D0%BB.+%D0%9E%D0%BB%D0%B8%D0%BC%D0%BB%D0%B0%D1%80+-64/@41.2825125,69.1392826,11z/data=!3m1!4b1"
                >
                  100041 Узбекистан, Ташкент <br />
                  ул. Олимлар -64
                </a>
              </li>

              <li className="left-box__item-bottom">
                <a className="left-box__item-bottom__link" href="https://hydroengeo.uz/">
                  hydrouz@hydroengeo.uz <br />
                  hydrouz@exat.uz
                </a>
              </li>

              <li className="left-box__item-bottom">
                <a className="left-box__item-bottom__link" href="tel: +998712650378">
                  Tel: 998(71)265-03-78
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__right-box">
            <Link href="/">
              <a className="left-box__item-top__title">
                <strong>ЛАБОРАТОРИИ ИНСТИТУТА</strong>
              </a>
            </Link>


            <Link href="/">
              <a className="left-box__item-top__info">
                <p>МЕЛИОРАТИВНОЙ ГИДРОГЕОЛОГИИ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>ИНЖЕНЕРНОЙ ГЕОДИНАМИКИ И ДИСТАНЦИОННОГО ЗОНДИРОВАНИЯ ЗЕМЛИ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>ГИДРОГЕОЛОГИИ И ИНЖЕНЕРНОЙ ГЕОЛОГИИ МЕСТОРОЖДЕНИЙ ТВЕРДЫХ
                  ПОЛЕЗНЫХ ИСКОПАЕМЫХ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>ГЕОИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ И МОДЕЛИРОВАНИЯ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>ГЕОЭКОЛОГИИ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>ГИДРОГЕОФИЗИКИ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>МОНИТОРИНГА ПОДЗЕМНЫХ ВОД И РЕГИОНАЛЬНЫХ ИССЛЕДОВАНИЙ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>РЕСУРСОВ ПОДЗЕМНЫХ ВОД</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>УРАНА И ГИДРОМИНЕРАЛЬНЫХ РЕСУРСОВ</p>
              </a>
            </Link>

            <Link href="/">
              <a className="left-box__item-top__info">
                <p>Гидрогеология и инженерная геология рудных месторождений</p>
              </a>
            </Link>
            <Link href="/">
              <a className="left-box__item-top__info">
                <p>Геоэколого-химическая лаборатория</p>
              </a>
            </Link>
          </div>

          {/* Display-flex 1225*/}
          <ul className="left-box__list-bottom left-box__list-bottom--display">
            <li className="left-box__item-bottom">
              <a className="left-box__item-bottom__link"
                href="https://www.google.ru/maps/search/100041+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D1%83%D0%BB.+%D0%9E%D0%BB%D0%B8%D0%BC%D0%BB%D0%B0%D1%80+-64/@41.2825125,69.1392826,11z/data=!3m1!4b1"
              >
                100041 Узбекистан, Ташкент <br />
                ул. Олимлар -64
              </a>
            </li>

            <li className="left-box__item-bottom">
              <a className="left-box__item-bottom__link" href="https://hydroengeo.uz/">
                hydrouz@hydroengeo.uz <br />
                hydrouz@exat.uz
              </a>
            </li>

            <li className="left-box__item-bottom">
              <a className="left-box__item-bottom__link" href="tel: +998712650378">
                Tel: 998(71)265-03-78
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Layout;
