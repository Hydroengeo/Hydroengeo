import Image from "next/image";
import Link from "next/link";

import Card from "../card/card";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/groundwater-avatar.png";
import image1 from "../../assets/images/groundwater1.png";
import image2 from "../../assets/images/groundwater2.png";
import image3 from "../../assets/images/groundwater3.png";
import image4 from "../../assets/images/groundwater4.png";
import image5 from "../../assets/images/groundwater5.png";
import image6 from "../../assets/images/groundwater6.png";
import image7 from "../../assets/images/groundwater7.png";
import image8 from "../../assets/images/groundwater8.png";
import image9 from "../../assets/images/groundwater9.png";
import image10 from "../../assets/images/groundwater10.png";
import image11 from "../../assets/images/groundwater11.png";
import image12 from "../../assets/images/groundwater12.png";
import image13 from "../../assets/images/groundwater13.png";
import image14 from "../../assets/images/groundwater14.png";
import image15 from "../../assets/images/groundwater15.png";
import image16 from "../../assets/images/groundwater16.png";
import image17 from "../../assets/images/groundwater17.png";
import image18 from "../../assets/images/groundwater18.png";
import image19 from "../../assets/images/groundwater19.png";
import image20 from "../../assets/images/groundwater20.png";
import image21 from "../../assets/images/groundwater21.png";
import image22 from "../../assets/images/groundwater22.png";
import image23 from "../../assets/images/groundwater23.png";
import image24 from "../../assets/images/groundwater24.png";
import image25 from "../../assets/images/groundwater25.png";
import image26 from "../../assets/images/groundwater26.png";
import image27 from "../../assets/images/groundwater27.png";
import image28 from "../../assets/images/groundwater28.png";
import image29 from "../../assets/images/groundwater29.png";

function groundwater() {
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector((state) => state);

  const {
    main: { groundwater: ac },
  } = Content[lang];

  return (
    <section className="groundwater">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading groundwater__heading--width">
            {ac.about}
          </h1>
        </div>

        <Card
          avatar={avatar}
          name={"Саидова Сайера Анваровна"}
          date={"С 1 марта 2013 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="groundwater__info">{ac.heading}</p>

        <ul className="groundwater__list">
          <li className="">
            <p className="groundwater__info">{ac.heading1}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading2}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading3}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading4}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading5}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading6}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading7}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading8}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading9}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.heading10}</p>
          </li>
        </ul>

        <h2 className="groundwater__info groundwater__info--bold groundwater__info--text">
          {ac.intro}
        </h2>

        <p className="groundwater__info">
          <strong>{ac.intro1}</strong>
        </p>

        <p className="groundwater__info">{ac.intro2}</p>

        <div className="groundwater__images-box--block">
          <div className="image1">
            <Image src={image1} alt="map 1/20000" width={500} height={350} />
          </div>
          <div className="image2">
            <Image src={image2} alt="map2" width={700} height={340} />
          </div>
        </div>

        <p className="groundwater__info">
          <strong>{ac.addition}</strong>
        </p>

        <p className="groundwater__info">{ac.addition1}</p>

        <div className="groundwater__images-box">
          <div className="image3">
            <Image src={image3} alt="map3" width={593} height={362} />
          </div>
          <div className="image4">
            <Image src={image4} alt="map4" width={563} height={362} />
          </div>
        </div>

        <p className="groundwater__info">
          <strong>{ac.intro5}</strong>
        </p>

        <ul className="">
          <li className="">
            <p className="groundwater__info">{ac.intro6}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.intro7}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.intro8}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.intro9}</p>
          </li>
        </ul>

        <div className="groundwater__images-box-2">
          <div className="image5">
            <Image src={image5} alt="Guidelines" width={250} height={356} />
          </div>
          <div className="image6">
            <Image
              src={image6}
              alt="Methodological guide"
              width={250}
              height={356}
            />
          </div>
          <div className="image7">
            <Image
              src={image7}
              alt="Recommendations"
              width={250}
              height={356}
            />
          </div>
          <div className="image8">
            <Image src={image8} alt="Requirements" width={250} height={356} />
          </div>
        </div>

        <div className="groundwater__images-box-mobile">
          <div className="image5">
            <Image src={image5} alt="Guidelines1" width={250} height={356} />
          </div>
          <div className="image6">
            <Image
              src={image6}
              alt="Methodological guide."
              width={250}
              height={356}
            />
          </div>
        </div>

        <div className="groundwater__images-box-mobile">
          <div className="image7">
            <Image
              src={image7}
              alt="Recommendations3"
              width={250}
              height={356}
            />
          </div>
          <div className="image8">
            <Image src={image8} alt="Requirements1" width={250} height={356} />
          </div>
        </div>

        <p className="groundwater__info">
          <strong>{ac.intro10}</strong>
        </p>

        <p className="groundwater__info">{ac.intro11}</p>

        <div className="groundwater__images-box--block">
          <div className="image9">
            <Image src={image9} alt="map5" width={360} height={230} />
          </div>
          <div className="image10">
            <Image src={image10} alt="map8" width={412} height={230} />
          </div>
          <div className="">
            <div className="image11">
              <Image src={image11} alt="diagram2019" width={357} height={114} />
            </div>
            <div className="image12">
              <Image
                src={image12}
                alt="diagram 2019y"
                width={393}
                height={97}
              />
            </div>
          </div>
        </div>

        <p className="groundwater__info">{ac.addition2}</p>

        <ul className="">
          <li className="">
            <p className="groundwater__info">{ac.intro12}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.intro13}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.intro14}</p>
          </li>
        </ul>

        <div className="groundwater__images-box--block">
          <div className="image13">
            <Image src={image13} alt="word" width={573} height={285} />
          </div>
          <div className="image14">
            <Image src={image14} alt="excel" width={645} height={285} />
          </div>
        </div>

        <p className="groundwater__info groundwater__info--mobile-text">
          <strong>{ac.intro15}</strong>
        </p>

        <p className="groundwater__info">{ac.intro16}</p>

        <div className="groundwater__images-box">
          <div className="image15">
            <Image src={image15} alt="map9" width={612} height={370} />
          </div>
          <div className="groundwater__images-box--flex">
            <div className="">
              <div className="image16">
                <Image src={image16} alt="diagram1" width={290} height={198} />
              </div>
              <div className="image18">
                <Image src={image18} alt="diagram2" width={283} height={190} />
              </div>
            </div>

            <div className="">
              <div className="image17">
                <Image src={image17} alt="diagram3" width={280} height={184} />
              </div>
              <div className="image19">
                <Image src={image19} alt="diagram4" width={244} height={214} />
              </div>
            </div>
          </div>
        </div>

        <div className="groundwater__info-box">
          <div className="image20">
            <Image src={image20} alt="" width={270} height={203} />
          </div>
          <h2 className="groundwater__info groundwater__info--bold">
            {ac.addition3}
          </h2>
        </div>

        <h3 className="groundwater__info groundwater__info--bold groundwater__info--text">
          {ac.addition4}
        </h3>

        <div className="image21">
          <Image src={image21} alt="" width={1280} height={665} />
        </div>

        <p className="groundwater__info">{ac.intro17}</p>

        <div className="image22">
          <Image src={image22} alt="" width={505} height={592} />
        </div>

        <h2 className="groundwater__info groundwater__info--bold groundwater__info--text">
          {ac.intro18}
        </h2>

        <ul className="">
          <li className="">
            <p className="groundwater__info">{ac.addition20}.</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.addition21}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.addition22}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.addition23}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.addition24}</p>
          </li>

          <li className="">
            <p className="groundwater__info">{ac.addition25}</p>
          </li>
        </ul>

        <div className="groundwater__images-box">
          <div className="image23">
            <Image src={image23} alt="" width={600} height={450} />
          </div>
          <div className="image24">
            <Image src={image24} alt="" width={630} height={450} />
          </div>
        </div>

        <div className="image25">
          <Image src={image25} alt="" width={562} height={422} />
        </div>

        <h2 className="groundwater__info groundwater__info--bold groundwater__info--text">
          {ac.addition26}
        </h2>

        <p className="groundwater__info">{ac.addition27}</p>

        <div className="groundwater__images-box">
          <div className="image26">
            <Image src={image26} alt="map26" width={324} height={229} />
          </div>
          <div className="image27">
            <Image src={image27} alt="map27" width={367} height={229} />
          </div>
          <div className="image28">
            <Image src={image28} alt="map28" width={367} height={229} />
          </div>
        </div>

        <div className="image29">
          <Image src={image29} alt="map29" width={690} height={294} />
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

export default groundwater;
