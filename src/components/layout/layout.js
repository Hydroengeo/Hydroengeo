import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// Components
import InnerDropdown1 from "../innerDropdown1/innerDropdown";
import InnerDropdown2 from "../innerDropdown2/innerDropdown";
import InnerDropdown3 from "../innerDropdown3/innerDropdown";

// Images
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";
import Blazon from "../../assets/images/blazon.png";
import Arrow from "../../assets/images/downarrow.png";
import Open from "../../assets/images/open.png";
import Close from "../../assets/images/close.png";

const Layout = ({ children }) => {
  const dropdwn1 = useRef(null);
  const dropdwn2 = useRef(null);
  const dropdwn3 = useRef(null);

  const dwnImg1 = useRef(null);
  const dwnImg2 = useRef(null);
  const dwnImg3 = useRef(null);

  const [activeClass1, setActiveClass1] = useState(false);
  const [activeClass2, setActiveClass2] = useState(false);
  const [activeClass3, setActiveClass3] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const [hamOpen, setHamOpen] = useState(false);

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header__top">
            <button
              className="hamburger"
              onClick={() => {
                setHamOpen(!hamOpen);
              }}
            >
              {!hamOpen ? (
                <Image className="open" src={Open} width="60" height="43" />
              ) : (
                <Image className="close" src={Close} width="60" height="43" />
              )}
            </button>

            <div
              className={!hamOpen ? "lang-wrapper" : "lang-wrapper lang-wrapper--active"}
            >
              <ul className="lang-mobile">
                <li className="lang-mobile-item">РУ</li>
                <li className="lang-mobile-item">Uz</li>
                <li className="lang-mobile-item">EN</li>
              </ul>
            </div>

            <Link href="/">
              <a className="header__logo">
                <Image
                  className="logo"
                  src={Logo}
                  alt="Hydroengo logo"
                  width="295"
                  height="120"
                />
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

            <div
              className={`search-wrapper ${searchActive ? "search--active" : ""}`}
              onClick={e => {
                if (!e.target.classList.contains("search-input")) {
                  setSearchActive(!searchActive);
                }
              }}
            >
              <form className="search-form">
                <input className="search-input" type="text" placeholder="Поиск" />
              </form>

              <span className="search">
                <Image
                  className="header__search"
                  src={Search}
                  alt="search icon"
                  width="40"
                  height="40"
                />
              </span>
            </div>
            <span className="header__blazon-wrapper">
              <Image
                className="header__blazon"
                src={Blazon}
                alt="Blazon of Uzbekistan"
                width="120"
                height="120"
              />
            </span>
          </div>

          <div
            className={
              !hamOpen ? "header__bottom" : "header__bottom header__bottom--mobile"
            }
          >
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <Link href="/">
                    <a className="navbar__item-link">ГЛАВНАЯ</a>
                  </Link>
                </li>
                <li className="navbar__item">
                  <button
                    ref={dwnImg1}
                    className="navbar__item-link dropdown-link"
                    onClick={() => {
                      if (!dropdwn1.current.classList.contains("dropdown--active")) {
                        dropdwn1.current.classList.add("dropdown--active");
                        dropdwn2.current.classList.remove("dropdown--active");
                        dropdwn3.current.classList.remove("dropdown--active");
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(180deg)";
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      } else {
                        dropdwn1.current.classList.remove("dropdown--active");
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      }
                    }}
                  >
                    <span>ОБ ИНСТИТУТЕ</span>
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="14"
                      height="8"
                    />
                  </button>

                  <ul ref={dropdwn1} className="navbar-item__dropdown">
                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Об институте</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Структура института</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Руководство</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">История института</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Миссия и политика</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Сотрудничество</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">История и руководство</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item">
                  <button
                    ref={dwnImg2}
                    className="navbar__item-link dropdown-link"
                    onClick={() => {
                      if (!dropdwn2.current.classList.contains("dropdown--active")) {
                        dropdwn2.current.classList.add("dropdown--active");
                        dropdwn1.current.classList.remove("dropdown--active");
                        dropdwn3.current.classList.remove("dropdown--active");
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(180deg)";
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      } else {
                        dropdwn2.current.classList.remove("dropdown--active");
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      }
                    }}
                  >
                    <span>ДЕЯТЕЛЬНОСТЬ</span>
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="14"
                      height="8"
                    />
                  </button>

                  <ul ref={dropdwn2} className="navbar-item__dropdown">
                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Деятельность</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Научная деятельность</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          Производственная деятельность
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Образование</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item">
                  <button
                    ref={dwnImg3}
                    className="navbar__item-link dropdown-link"
                    onClick={() => {
                      if (!dropdwn3.current.classList.contains("dropdown--active")) {
                        dropdwn3.current.classList.add("dropdown--active");
                        dropdwn2.current.classList.remove("dropdown--active");
                        dropdwn1.current.classList.remove("dropdown--active");
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(180deg)";
                        dwnImg1.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                        dwnImg2.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      } else {
                        dropdwn3.current.classList.remove("dropdown--active");
                        dwnImg3.current.childNodes[1].childNodes[1].style.transform =
                          "rotate(0deg)";
                      }
                    }}
                  >
                    <span>ЦЕНТРЫ И ЛАБОРАТОРИИ</span>
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="14"
                      height="8"
                    />
                  </button>

                  <ul ref={dropdwn3} className="navbar-item__dropdown  dropdown3--active">
                    <li
                      className={`navbar__dropdown-item ${
                        activeClass1 ? "navbar__dropdown-item--active" : ""
                      }`}
                    >
                      <button
                        className="navbar__dropdown-link"
                        onClick={() => {
                          setActiveClass1(!activeClass1);
                        }}
                      >
                        <span>Исследование ресурсов и запасов подземных вод</span>
                        <Image
                          src={Arrow}
                          width="20"
                          height="10"
                          alt="Down arrow"
                          aria-hidden="true"
                        />
                      </button>
                      <InnerDropdown1 />
                    </li>

                    <li
                      className={`navbar__dropdown-item ${
                        activeClass2 ? "navbar__dropdown-item--active" : ""
                      }`}
                    >
                      <button
                        className="navbar__dropdown-link "
                        onClick={() => {
                          setActiveClass2(!activeClass2);
                        }}
                      >
                        <span>
                          Мониторинг подземных вод и геоэкологические исследования
                        </span>
                        <Image
                          src={Arrow}
                          width="20"
                          height="10"
                          alt="Down arrow"
                          aria-hidden="true"
                        />
                      </button>

                      <InnerDropdown2 />
                    </li>

                    <li
                      className={`navbar__dropdown-item ${
                        activeClass3 ? "navbar__dropdown-item--active" : ""
                      }`}
                    >
                      <button
                        className="navbar__dropdown-link"
                        onClick={() => {
                          setActiveClass3(!activeClass3);
                        }}
                      >
                        <span>
                          Международные научно-исследовательские работы, Start-Up проекты,
                          маркетинг и патентоведение
                        </span>

                        <Image
                          src={Arrow}
                          width="20"
                          height="10"
                          alt="Down arrow"
                          aria-hidden="true"
                        />
                      </button>
                      <InnerDropdown3 />
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          Инженерная геодинамика и дистанционное зондирование земли
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">Гидрогеофизика</a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          Гидрогеология и инженерная геология рудных месторождений
                        </a>
                      </Link>
                    </li>

                    <li className="navbar__dropdown-item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          Гидрогеология и инженерная геология МТПИ
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item">
                  <Link href="/">
                    <a className="navbar__item-link">НОРМАТИВНАЯ БАЗА</a>
                  </Link>
                </li>
                <li className="navbar__item">
                  <Link href="/">
                    <a className="navbar__item-link">КОНТАКТЫ</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer id="footer"></footer>
    </>
  );
};

export default Layout;
