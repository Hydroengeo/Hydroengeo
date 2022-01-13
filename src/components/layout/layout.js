import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";
import Blazon from "../../assets/images/blazon.png";

const Layout = ({ children }) => {
  return (
    <>
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
      <main>{children}</main>
      <footer id="footer"></footer>
    </>
  );
};

export default Layout;
