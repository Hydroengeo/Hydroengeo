import Image from "next/image";
import Card from "../card/card";
import { useEffect, useState } from "react";

// Images
import Minchenko from "../../assets/images/minchenko.jpg";
import Map from "../../assets/images/map.jpg";
import PhotoView from "../../assets/images/photoView.jpg";
import PhotoView2 from "../../assets/images/photoView2.jpg";
import UzbMap from "../../assets/images/uzbmap.jpg";
import Damages from "../../assets/images/damages.jpg";
import Damage1 from "../../assets/images/damage1.jpg";
import Damage2 from "../../assets/images/damage2.jpg";
import Damage3 from "../../assets/images/damage3.jpg";
import Damage4 from "../../assets/images/damage4.jpg";
import Landslide from "../../assets/images/landslide.jpg";
import Scheme from "../../assets/images/scheme.jpg";
import Naugarzan from "../../assets/images/Naugarzan.jpg";
import Angren from "../../assets/images/angren.jpg";
import Graph from "../../assets/images/graph.jpg";
import Turkskiy from "../../assets/images/turkskiy.jpg";
import Ogp1 from "../../assets/images/ogp1.jpg";
import Ogp2 from "../../assets/images/ogp2.jpg";
import MapUz from "../../assets/images/mapuz.jpg";

const Overture = () => {
  const [imagesItem, setImagesItem] = useState(506);
  const [imagesInnerItem, setImagesInnerItem] = useState(357);
  const [imagesInnerItemH, setImagesInnerItemH] = useState(230);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setImagesItem(540);
      setImagesInnerItem(540);
      setImagesInnerItemH(346);
    }
  }, []);

  return (
    <>
      <section id="overture">
        <div className="small-container">
          <h1 className="heading">
            ЛАБОРАТОРИЯ ИНЖЕНЕРНОЙ ГЕОДИНАМИКИ И ДИСТАНЦИОННОГО ЗОНДИРОВАНИЯ ЗЕМЛИ
          </h1>
          <Card
            avatar={Minchenko}
            name={"Минченко Вячаслав Дмитриевич"}
            date={"С 28 марта 1988 года"}
            position={"Заведующий лабораторией"}
          />
          <div className="dzz">
            <p>
              {" "}
              <span className="space"></span>В лаборатории Инженерной геодинамики и ДЗЗ
              решаются научные вопросы по природе формирования и развития оползневых
              процессов.
            </p>{" "}
            <p>
              {" "}
              <span className="space"></span>Лаборатория оказывает следующие услуги:
            </p>
            <ul>
              <li>
                оценки поражённости территорий (бассейны рек, административные районы,
                области) оползневыми процессами;
              </li>

              <li>
                построение средне и крупномасштабных карт оползневой опасности территории;
              </li>

              <li>
                выделение оползнеопасных зон и участков развития оползневых процессов;
              </li>

              <li>
                оценка возможных последствий от оползней инженерным сооружениям, жилым
                строениям и иным объектам;
              </li>

              <li> оценка уязвимости объектов при развитии оползней;</li>

              <li>оценки рисков возможных последствий от воздействия оползней;</li>

              <li>
                построение крупномасштабных космосхем оползневой обстановки (район,
                бассейн реки, административная область) с параметрической характеристикой
                оползневых участков, выделением зон возможного поражения и опасности
                объектам и сооружениям, оценка динамики освоения территорий и развития
                оползневых процессов во времени и по площади за последние 15-20 лет.
              </li>
            </ul>
          </div>
          <p className="text">
            Разрабатывает рекомендации по инженерно-геологическому обоснованию комплексных
            схем защиты территорий от зкзогенных и инженерно-геологических процессов,
            изучение динамических свойств грунтов с учетом сейсмичности и климатической
            поясности, изучение устойчивости пород в массиве и стабилизации склонов;
            предупреждению возникновения опасных геологических процессов и деформаций
            сооружений; защите объектов от воздействия ЭГП. а также средства измерения
            инженерно-геологических и гидрогеологических параметров
          </p>
          <div className="images__wrapper">
            <ul className="images">
              <li className="images__item">
                <Image src={Map} width={imagesItem} height={513} alt="Map" />
                <p className="images__item-text mobile--inner-text">
                  Определение расширения жилой застройки по результатам космосъёмки (карта
                  1987 г – космосъёмка 2009 г)
                </p>
              </li>

              <li className="images__item">
                <ul className="images__inner-list">
                  <li className="images__inner-item">
                    <Image
                      src={PhotoView}
                      width={imagesInnerItem}
                      height={imagesInnerItemH}
                      alt="Photo view"
                    />
                  </li>

                  <li className="images__inner-item">
                    <Image
                      src={PhotoView2}
                      width={imagesInnerItem}
                      height={imagesInnerItemH}
                      alt="Photo view"
                    />
                  </li>
                </ul>

                <p className="images__item-text mobile--inner-text">
                  Сравнительный вид участка Карайли до оползня и после (космосъёмка
                  15,04,2001 г), (космосъёмка18,01,2016 г){" "}
                </p>
              </li>
            </ul>

            <div className="images__texts">
              <p className="images__item-text">
                Определение расширения жилой застройки по результатам космосъёмки (карта
                1987 г – космосъёмка 2009 г)
              </p>
              <p className="images__item-text">
                Сравнительный вид участка Карайли до оползня и после (космосъёмка
                15,04,2001 г), (космосъёмка18,01,2016 г){" "}
              </p>
            </div>
          </div>
          <div className="map-wrapper">
            <Image
              src={UzbMap}
              width={1280}
              height={932}
              alt="The map of Uzbekistan, Ozbekiston xaritasi"
            />
          </div>
          <div className="problems">
            <h3 className="problems__heading">Проблемы предупреждения оползней</h3>

            <ul className="problems__list">
              <li className="problems__list-item">
                Неконтролируемость времени начала их образования
              </li>{" "}
              <li className="problems__list-item">
                Массовое, одновременное проявление в лессовых породах (30-40 случаев в
                день)
              </li>
              <li className="problems__list-item">Большая социальная проблема</li>
              <li className="problems__list-item">
                Высокая скорость (до 3,5м/с) и протяженность перемещения (1,6-4,5км)
              </li>
              <li className="problems__list-item">
                Изменчивость направления движения, высоты выброса на противоположный борт
                и площади распространения
              </li>
            </ul>
          </div>
          <div className="damages">
            <h3 className="damages__heading">
              Ущерб от проявления оползней в Узбекистане за десятилетний период
              (1998-2008г.г.)
            </h3>

            <div className="damages__image">
              <Image src={Damages} width={1280} height={931} alt="List of damages" />
            </div>

            <ul className="damages__list">
              <li className="damages__list-item">
                <Image src={Damage1} width={625} height={427} alt="Zarar" />
              </li>
              <li className="damages__list-item">
                <Image src={Damage2} width={625} height={427} alt="Zarar" />
              </li>
              <li className="damages__list-item">
                <Image src={Damage3} width={625} height={427} alt="Zarar" />
              </li>
              <li className="damages__list-item">
                <Image src={Damage4} width={625} height={427} alt="Zarar" />
              </li>
            </ul>
          </div>
          <div className="landslide">
            <h3 className="landslide__heading">
              Количество оползневых проявлений по десятилетиям
            </h3>
            <div className="landslide__image">
              <Image src={Landslide} width={1280} height={689} />
            </div>

            <div className="scheme-image">
              <Image src={Scheme} width={1280} height={1386} />
            </div>

            <p className="landslide__text">
              В Ангренской зоне расположены: крупнейший в Средней Азии угольный разрез
              «Ангренский», шахта по подземной отработке и станция газификации углей,
              угольные карьеры «Апартак» и «Наугарзан», карьер горелых пород, мощные
              внутренние и внешние отвалы пород.
            </p>

            <p className="landslide__text">
              Горнодобывающая деятельность в течении 50 лет спровоцировала развитие
              крупных, глубоких оползней в глинистых породах на площади 25 км2
              (Багаранский - 0,4 млн.м3, Загасанский - 20 млн.м3, Атчинский - 800 млн.м3,
              Центральный - 58 млн.м3, Старая подстанция - 3,5 млн.м3,Северный - 3,0
              млн.м3, Наугарзан - 22 млн.м3). Сюда необходимо добавить и Верхне-Туркский
              оползень объемом 20 млн.м3 на левом борту Ахангаранского водохранилища
            </p>

            <p className="landslide__text">
              До 1995 г. автодорога А-373 Ташкент-Ош проходила по левому борту р.
              Ахангаран ниже карьера «Наугарзан». В1995 г. над карьером сформировался
              оползень, что привело к разрушению автодороги. Она была перенесена на правый
              борт долины и восстановлена на месте технологической дороги на рабочем борту
              разреза «Ангренский». По истечении 9 лет состояние транспортной проблемы не
              изменилось, а наличие дороги в пределах горного отвода на рабочем борту
              сдерживает развитие разреза.{" "}
            </p>
          </div>
          <div className="naugarzan">
            <Image src={Naugarzan} width={1280} height={869} />
            <h4 className="naugarzan__desc">
              Космоснимок оползня Наугарзан (1995 г. 22 млн.куб.м)
            </h4>
          </div>

          <div className="angren__img-wrapper">
            <Image src={Angren} width={1280} height={1045} alt="Angren ko`chkisi" />
            <p className="angren__title">
              Оползень Центральный - рабочий борт угольного карьера «Ангренский» (1987 г.,
              58 млн.куб.м)
            </p>
          </div>

          <div className="graph">
            <h3 className="graph__heading">График смещения оползня Центральный</h3>

            <Image src={Graph} width={1280} height={515} />
          </div>

          <div className="turkskiy">
            <Image src={Turkskiy} width={1280} height={649} alt="Yuqori turkskiy" />

            <p className="turkskiy__desc">
              Оползень Верхне-Туркский (1954-1969 г.г., 20 млн.м3)
            </p>

            <h4 className="turkskiy__heading">
              В Ангренской зоне существует три крупные хозяйственные проблемы, требующие
              своего разрешения:
            </h4>
            <p className="turkskiy__text">
              1. Выбор безопасного варианта положения и строительства транспортной
              системы, состоящей из «пакета» линейных сооружений (автодороги, железной
              дороги, трубопроводов, ЛЭП и т.д.); <br /> 2. Обеспечение условий
              перспективного развития угольного разреза в северо-западном направлении, для
              увеличения объема добычи угля; <br /> 3. Наращивание и укрепление плотины
              Ахангаранского водохранилища для увеличения его объема.
            </p>

            <ul className="turkskiy__ogp">
              <li className="turkskiy__ogp-item">
                <Image src={Ogp1} width={610} height={913} alt="OGP chirchiq" />
                <p className="turkskiy__ogp-item-text">
                  Карта проявлений ОГП в бассейне р.Чирчик
                </p>
              </li>

              <li className="turkskiy__ogp-item">
                <Image src={Ogp2} width={610} height={913} alt="OGP chirchiq" />
                <p className="turkskiy__ogp-item-text">
                  Карта проявлений ОГП на побережье Чарвакского водохранилища
                </p>
              </li>
            </ul>

            <div className="proccess">
              <h2 className="proccess__heading">
                В институте ГИДРОИНГЕО решение вопросов связанных с опасными
                геологическими процессами (ОГП) и последствиями их проявления
                осуществляется с 60-х годов ХХ столетия.
              </h2>

              <div className="proccess__problems">
                За 60 лет зафиксировано: <br />
                <ul className="proccess__problems-list">
                  <li>12,5 тыс. оползневых смещений,</li>

                  <li>70% это мелкие поверхностные смешения,</li>

                  <li>10-12% крупные оползни объемом более 100 тыс.м3,</li>

                  <li>18-20% оползни средних объемов,</li>

                  <li>77% оползни развиты в лессовых и песчано- глинистых породах,</li>

                  <li>23% в глинах,</li>

                  <li>
                    65% оползни вызванные снеготаянием, атмосферными осадками, подземными
                    водами,
                  </li>

                  <li>20-25% историческими и современными землетрясениями,</li>
                  <li>10-15% техногенными факторами</li>
                </ul>
                <ul className="proccess__desc">
                  <li className="proccess__item">
                    Опасные экзогенные геологические процессы (ОЭГП) распространены в
                    горных районах Узбекистана на площади более 15000 км2.
                  </li>
                  <li className="proccess__item">
                    Наибольшую угрозу представляют оползни, отличающиеся
                    непредсказуемостью места формирования, внезапностью образования,
                    быстрым развитием и катастрофичностью проявления.
                  </li>
                  <li className="proccess__item">
                    Ежегодно в горных районах фиксируется от 30 до 300 оползневых
                    смещений, а в годы с аномальным выпадением атмосферных осадков
                    количество различных по объему повторных смещений оползней может
                    достигать 1 тысячи и более.
                  </li>
                  <li className="proccess__item">
                    В зонах с активным развитием ОЭГП расположены 341 селение, 101
                    оздоровительный объект, 136 участков автомобильных и железных дорог,
                    69 участков ирригационных каналов, 19 горнорудных объектов, 11
                    водохранилищ и селехранилищ, 76 ЛЭП, 24 трубопровода, 7 капитальных
                    мостов и другие сооружения.
                  </li>
                  <li className="proccess__item">
                    Исследования ОЭГП подчинены основной цели – заблаговременному
                    предупреждению об угрозе ОЭГП для обеспечения безопасности населения,
                    территорий, экономических объектов и инженерных сооружений, в конечном
                    счёте, устойчивого развития горных регионов республики.
                  </li>
                </ul>
                <Image src={MapUz} width={1280} height={960} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overture;
