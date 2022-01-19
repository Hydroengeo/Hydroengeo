import Image from "next/image";

// Images
import Lexuz from "../../assets/images/lexuz.png";
import President from "../../assets/images/president.png";
import Portal from "../../assets/images/portal.png";

const Normatives = () => {
  return (
    <>
      <section id="normatives">
        <div className="small-container">
          <h1 className="heading">Нормативная база</h1>
          <ul className="bases-list">
            <li className="bases__item">
              <div className="bases__img-wrapper" className="bases__img-wrapper">
                <Image src={Lexuz} width="328" height="98" alt="Lexuz" />
              </div>

              <p className="bases__text w-335">
                Национальная база данных законодательства Республики Узбекистан
              </p>
            </li>

            <li className="bases__item">
              <div className="bases__img-wrapper">
                <Image src={President} width="352" height="121" alt="Lexuz" />
              </div>

              <p className="bases__text">
                Указы и Постановления Президента Республики Узбекистан
              </p>
            </li>

            <li className="bases__item">
              <div className="bases__img-wrapper">
                <Image src={Portal} width="353" height="109" alt="Lexuz" />
              </div>

              <p className="bases__text">
                Постановления Кабинета Министров Республики Узбекистан
              </p>
            </li>
          </ul>
          <div className="regulations">
            <span>Hормативные акты</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Normatives;

// 1480
