import Image from "next/image";
import Link from "next/link";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import scrolls from "../../assets/images/scrolls.svg";
import avatar from '../../assets/images/chemical-avatar.png'
import image1 from '../../assets/images/chemical1.png'
import image2 from '../../assets/images/chemical2.png'
import image3 from '../../assets/images/chemical3.png'
import image4 from '../../assets/images/chemical4.png'
import image5 from '../../assets/images/chemical5.png'
import image6 from '../../assets/images/chemical6.png'
import image7 from '../../assets/images/chemical7.png'
import image8 from '../../assets/images/chemical8.png'

function chemical() {
  return (
    <section className="chemical">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading groundwater__heading--width">
            ГЕОЭКОЛОГО-ХИМИЧЕСКАЯ ЛАБОРАТОРИЯ
          </h1>
          <Image
            className="scrolls"
            src={scrolls}
            alt="scroll"
            width={80}
            height={80}
          />
        </div>

        <Card
          avatar={avatar}
          name={"Мейлибаева Мунисхон Нормуминовна"}
          date={"С 15 апреля 2018 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="chemical__info chemical__info--margin-bottom-big">
          Перечень оказываемых услуг Геоэколого-химической лабораторией
        </p>

        <ul className="chemical__list">
          <li className="">
            <p className="chemical__info">1. Определение химического состава грунтов;</p>
          </li>
          <li className="">
            <p className="chemical__info">
              2. Определение химического состава природных вод;
            </p>
          </li>
          <li className="">
            <p className="chemical__info">
              3. Определение тяжелых металлов на ISP-MS в воде и почве;
            </p>
          </li>
          <li className="">
            <p className="chemical__info">4. Определение химического состава солей и рапы.</p>
          </li>
        </ul>

        <p className="chemical__info">
          Лаборатория имеет аккредитацию по международному стандарту O’zDSt ISO/IEC 17025:2007 01.02.2018г.
        </p>

        <div className="image1">
          <Image src={image1} alt="o'zak" width={745} height={1059}/>
        </div>

        <div className="chemical__images-box--start chemical__images-box--flex">
          <div className="image2">
            <Image src={image2} alt="pH-metr" width={270} height={310}/>
          </div>
          <div className="image3">
            <Image src={image3} alt="titrator" width={300} height={310}/>
          </div>
          <div className="image4  image4--none-mobile">
            <Image src={image4} alt="turbodimetr" width={270} height={310}/>
          </div>
        </div>

        <div className="image4  image4--none-desktop">
            <Image src={image4} alt="turbodimetr" width={270} height={310}/>
          </div>

        <div className="chemical__images-box">
          <div className="image5">
            <Image src={image5} alt="chemicaler" width={550} height={534}/>
          </div>
          <div className="image6">
            <Image src={image6} alt="chemical room" width={650} height={534}/>
          </div>
        </div>

        <div className="chemical__images-box">
          <div className="image7">
            <Image src={image7} alt="chemicaler second" width={610} height={534}/>
          </div>
          <div className="image8">
            <Image src={image8} alt="chemical apparatus" width={610} height={534}/>
          </div>
        </div>

        <div className="scientific__btn ">
          <Link href={"#header"}>
            <a className="cooperation__btn__link">
              <Image src={ScrollTop} alt="ScrollTop" width="80" height="80" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default chemical;
