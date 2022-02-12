import Image from "next/image";
// Components
import Card from "../card/card";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

// Images
import Avatar8 from "../../assets/images/avatar8.jpg";
import Model from "../../assets/images/model.jpg";
import MapUzb from "../../assets/images/mapuzb.jpg";
import GroundWater from "../../assets/images/groundwater.jpg";
import Stock from "../../assets/images/stock.jpg";
import ThreeDMap from "../../assets/images/3dmap.jpg";
import Parameter from "../../assets/images/parameter.jpg";
import Parameter2 from "../../assets/images/parameter2.jpg";

const Resources = () => {
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector((state) => state);

  const {
    main: { resources: rc },
  } = Content[lang];

  return (
    <>
      <section id="resources">
        <div className="small-container">
          <h1 className="heading">{rc.heading}</h1>
          <Card
            avatar={Avatar8}
            name={"Нагевич Павел Павлович"}
            date={"С 1 сентября 1995 года"}
            position={"Заведующий лабораторией"}
          />
          <div className="services">
            {rc.about}
            <ul className="services__list">
              <li className="services__list-item">{rc.heading1}</li>

              <li>{rc.heading2}</li>

              <li>{rc.heading3}</li>

              <li>{rc.heading4}</li>
            </ul>
            <Image src={Model} width={635} height={355} />
            <p className="services__text">{rc.heading5}</p>
            <Image src={MapUzb} width={1280} height={1309} />
          </div>
          <div className="achievements">
            <h3 className="achievements__heading">{rc.heading6}</h3>
            <br />
            <p className="achievements__text">
              {rc.heading7} <br />
              {rc.heading8}
              <br /> {rc.heading9} <br /> {rc.heading10} <br /> {rc.heading11}{" "}
              <br /> {rc.heading12}
              <br /> <br /> {rc.heading13}
              <br /> {rc.heading14} <br /> {rc.heading15} <br /> {rc.heading16}
              <br /> <br /> {rc.heading17}
              <br /> <br /> <strong>{rc.heading18}</strong> {rc.heading19}{" "}
              <br />
              {rc.heading20}
              <br /> {rc.heading21}
              <br />
              {rc.heading22} <br /> <br /> <strong>{rc.heading23}</strong>{" "}
              {rc.heading24} <br /> {rc.heading25} <br /> {rc.heading26} <br />{" "}
              {rc.heading27}
              <br /> {rc.heading28}
            </p>
          </div>
          <div className="ground-water">
            <div className="inner-div">
              <h3 className="ground-water__heading">{rc.heading29}</h3>
              <Image
                src={GroundWater}
                width={1042}
                height={730}
                alt="Карта месторождений подземных вод Республики Узбекистан"
              />
            </div>

            <p className="ground-water__text">{rc.heading30}</p>

            <p className="ground-water__text">{rc.heading31}</p>
          </div>
          <ul className="images">
            <li>
              <Image
                src={Stock}
                width={623}
                height={479}
                alt="групповие водозаборы с утвержденными эксплуатационными запасами "
              />
            </li>

            <li>
              <Image
                src={ThreeDMap}
                width={634}
                height={605}
                alt="групповие водозаборы с утвержденными эксплуатационными запасами "
              />
            </li>
          </ul>
          <p className="text">{rc.heading32}</p>
          <div className="parameters">
            <ul className="parameters__list">
              <li className="parameters__list-item">
                <Image
                  src={Parameter}
                  width={621}
                  height={311}
                  alt="Statistics"
                />
              </li>

              <li className="parameters__list-item">
                <Image
                  src={Parameter2}
                  width={625}
                  height={309}
                  alt="Statistics"
                />
              </li>
            </ul>

            <p className="parameters-title">{rc.heading33}</p>
          </div>
          <div className="docs">
            <h3 className="docs__heading">{rc.heading34}</h3>

            <ul className="docs__list">
              <li className="docs__list-item">{rc.heading35}</li>

              <li className="docs__list-item"> {rc.heading36}</li>

              <li className="docs__list-item">{rc.heading37} </li>

              <li className="docs__list-item">{rc.heading38}</li>

              <li className="docs__list-item">{rc.heading39}</li>

              <li className="docs__list-item">{rc.heading40}</li>

              <li className="docs__list-item">{rc.heading41}</li>

              <li className="docs__list-item">{rc.heading42}</li>

              <li className="docs__list-item">{rc.heading43}</li>
            </ul>
          </div>
          <div className="monographs">
            <h3 className="monographs__heading">{rc.adittion}</h3>

            <ul className="monographs__list">
              <li className="monographs__list-item">{rc.heading44}</li>

              <li className="monographs__list-item">{rc.heading45}</li>

              <li className="monographs__list-item">{rc.heading46}</li>

              <li className="monographs__list-item">{rc.heading47}</li>

              <li className="monographs__list-item">{rc.heading48}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
