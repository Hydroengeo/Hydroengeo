import Image from "next/image";
// Components
import Card from "../card/card";

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
  return (
    <>
      <section id="resources">
        <div className="small-container">
          <h1 className="heading">
            ЛАБОРАТОРИЯ РЕСУРСОВ И ЗАПАСОВ ПОДЗЕМНЫХ ПОДЗЕМНЫХ ВОД
          </h1>
          <Card
            avatar={Avatar8}
            name={"Нагевич Павел Павлович"}
            date={"С 1 сентября 1995 года"}
            position={"Заведующий лабораторией"}
          />
          <div className="services">
            Лаборатория оказывает следующие услуги:
            <ul className="services__list">
              <li className="services__list-item">
                Определение степени обеспеченности ресурсами пресных подземных вод в
                разрезе областей и районов Республики Узбекистан.
              </li>

              <li>
                Оценка современного состояния месторождений пресных подземных вод и
                предварительный прогноз его изменения
              </li>

              <li>
                Расчет гидрогеологических параметров водоносных горизонтов
                (предварительная оценка параметров, оценка параметров РКМОП,
                численно-аналитические методы расчета параметров с использованием
                программного продукта HydroPar)
              </li>

              <li> Оценка (переоценка) эксплуатационных запасов подземных вод.</li>
            </ul>
            <Image src={Model} width={635} height={355} />
            <p className="services__text">
              Разрабатывает рекомендации и методику по эффективному выбору направлений
              поисково-разведочных работ на пресные подземные воды и их рационального
              использования . Изучение геолого-гидрогеологических условий месторождений
              пресных подземных вод, подсчет запасов подземных вод с применением
              современных моделирующих программных продуктов и ГИС — технологий.
              Обоснование наиболее эффективных типов и схем водозаборов ПВ (скважинные,
              галерийный).
            </p>
            <Image src={MapUzb} width={1280} height={1309} />
          </div>
          <div className="achievements">
            <h3 className="achievements__heading">
              Наиболее значительные достижения прошлых лет:
            </h3>
            <br />
            <p className="achievements__text">
              - Разработана методика оценки прогнозных ресурсов и региональных
              эксплуатационных запасов подземных вод Республики, <br /> - Выполнена
              впервые предварительная оценка прогнозных ресурсов и региональных
              эксплуатационных запасов подземных вод территории Республики, что позволило
              дать технико-экономическое обоснование перспективного использования
              подземных вод для народного хозяйства. <br /> - Разработаны принципы
              выделения природных месторождений подземных вод для целей водоснабжения,
              методика их разведки и оценки прогнозных ресурсов подземных вод
              месторождения и эксплуатационных запасов на отдельных его участках
              (эксплуатационных месторождениях). <br /> - Обоснованы рекомендации по
              комплексному использованию поверхностных и подземных водных ресурсов,
              позволяющие их наиболее эффективное и рациональное использование. <br /> -
              Разработана методика усиления питания подземных вод за счет
              целенаправленного искусственного пополнения их запасов на отдельных участках
              месторождений подземных вод, где количество естественных ресурсов и запасов
              подземных вод ограничено и существенно меньше потребности. <br /> -
              Разработана методика оценки эксплуатационных запасов подземных вод на основе
              численных и аналоговых математических моделей. <br /> <br /> - Исследованы
              вопросы проявления природного маловодья источников формирования ресурсов
              месторождений подземных вод (МПВ). <br /> - Разработана методика оценки
              геофильтрационных параметров водоносных горизонтов по данным
              опытно-фильтрационных работ, которая реализована в виде методического
              пособия автоматизации расчета параметров на ПЭВМ. <br /> - Разработаны
              методические требования к переоценке эксплуатационных запасов подземных вод
              в современных условиях их формирования. <br /> - апробированы современные
              численные модели типа Modflow, позволяющие выполнить прогноз
              эксплуатационных запасов подземных вод на основе решения гидродинамических и
              миграционных задач. <br /> <br /> Все разработки внедрены в производство и
              изложены в более 20 монографиях. <br /> <br />{" "}
              <strong>В настоящее время</strong> лаборатория располагает
              высококвалифицированными кадрами, современной компьютерной техникой,
              необходимыми программными системами («Modflow», «Гидропар»). Это позволяет
              успешно решить в ближайшие десятилетия, в первую очередь, задачи,
              направленные на сохранение месторождений пресных подземных вод в связи с
              усиливающимся дефицитом источников питьевого водоснабжения растущего
              населения Республики. Для этого потребуется: <br /> - оценить современное
              состояние всех месторождений пресных подземных вод в условиях техногенной
              нагрузки и изменяющихся источников формирования подземных вод на основе
              последовательного создания моделей — информационной, гидрогеологической и
              математической (численной). <br /> - обосновать надежную геофильтрационную
              структуру математических моделей МППВ, которые являются основой,
              определяющей его количественные и качественные показатели. <br /> -
              разработать математические модели МПВ, полностью отвечающие
              гидрогеологической на надежной геофильтрационной основе, что позволит
              оценить современное состояние месторождения, его сложившиеся ресурсы и
              запасы подземных вод и послужит исходной основой для мониторинговых
              исследований и переоценки эксплуатационных запасов месторождений. <br />{" "}
              <br /> <strong>В настоящее время исследования лаборатории</strong> решают
              слабоизученные задачи в рамках вышеизложенного стратегического направления:{" "}
              <br /> - выясняются связи геофильтрационных и миграционных параметров;{" "}
              <br /> - изучаются закономерности распределения геофильтрационных параметров
              водоносных горизонтов; <br /> - обобщаются многолетние исследования по
              изучению проявления маловодья источников формирования ресурсов месторождений
              подземных вод; <br /> - усовершенствуется и отрабатывается методика
              исследований по мониторингу подземных вод и структура его сети.
            </p>
          </div>
          <div className="ground-water">
            <div className="inner-div">
              <h3 className="ground-water__heading">
                Карта месторождений подземных вод Республики Узбекистан
              </h3>
              <Image
                src={GroundWater}
                width={1042}
                height={730}
                alt="Карта месторождений подземных вод Республики Узбекистан"
              />
            </div>

            <p className="ground-water__text">
              Главным направлением лаборатории «Ресурсы и запасы подземных вод»,
              обеспечивающим решение вопроса питьевого водоснабжения Республики в XXI
              веке, является максимальное сохранение запасов подземных вод разведанных
              месторождений на основе их грамотного высокоэффективного использования, а
              также нахождение новых перспективных участков, как в границах самих
              месторождений, так и за их пределами (участки локального скопления пресных
              подземных вод).{" "}
            </p>

            <p className="ground-water__text">
              Разработана общая гидрогеологическая концепция использования и сохранения
              запасов подземных вод месторождений в палеоаллювии сырдарьи в связи с
              сокращением и ухудшением качества источников формирования их ресурсов
              Разработана трехмерная численная модель месторождений пресных подземных вод
              в Палеоаллювии р.Сырдарья с использованием программного продукта Visual
              ModFlow
            </p>
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
          <p className="text">
            В лаборатории «Ресурсы и запасы подземных вод» разработана программная система
            «Гидропар» для оценки геофильтрационных параметров водоносных горизонтов по
            данным опытно-фильтрационных работ, которая успешно реализована при подсчете
            эксплуатационных запасов подземных вод нескольких месторождений{" "}
          </p>
          <div className="parameters">
            <ul className="parameters__list">
              <li className="parameters__list-item">
                <Image src={Parameter} width={621} height={311} alt="Statistics" />
              </li>

              <li className="parameters__list-item">
                <Image src={Parameter2} width={625} height={309} alt="Statistics" />
              </li>
            </ul>

            <p className="parameters-title">
              Рассчитанные параметры коэффициента фильтрации
            </p>
          </div>
          <div className="docs">
            <h3 className="docs__heading">
              Нормативно-методические документы, разработанные в лаборатории
            </h3>

            <ul className="docs__list">
              <li className="docs__list-item">
                Инструкция по организации и производству геолого-съемочных работ,
                составлению и подготовке к изданию государственной геологической карты
                Республики Узбекистан масштаба 1: 50 000, 1: 25 000, утверждена
                Госкомгеологии Р.Уз.
              </li>

              <li className="docs__list-item">
                {" "}
                «Инструкция по применению «Классификации эксплуатационных запасов и
                прогнозных ресурсов подземных вод» к месторождениям питьевых и технических
                вод.
              </li>

              <li className="docs__list-item">
                Инструкция о содержании, оформлении и порядке представления в
                Государственную комиссию по запасам полезных ископаемых при
                Государственном комитете Республики Узбекистан по геологии и минеральным
                ресурсам (ГКЗ РУз) материалов по подсчету эксплуатационных запасов
                питьевых и технических вод.
              </li>

              <li className="docs__list-item">
                Методические указания о проведении геологоразведочных работ по стадиям
                (подземные воды).
              </li>

              <li className="docs__list-item">
                «Классификация эксплуатационных запасов и прогнозных ресурсов подземных
                вод».
              </li>

              <li className="docs__list-item">
                Методическое пособие автоматизации расчета параметров водоносных
                горизонтов по данным опытно-фильтрационных работ на ПЭВМ
              </li>

              <li className="docs__list-item">
                Методическое руководство по составлению геофильтрационных карт и разрезов
                на основе анализа информации, его графического, табличного и текстового
                представления. Ташкент, ГП «Институт ГИДРОИНГЕО»
              </li>

              <li className="docs__list-item">
                Методическое руководство по поиску, разведке и оценке запасов под
                водозаборы галерейного типа на месторождениях и участках локального
                скопления подземных вод
              </li>

              <li className="docs__list-item">
                Методические рекомендации повышения достоверности прогноза
                эксплуатационных запасов подземных вод а при их оценке. ГП «Институт
                ГИДРОИНГЕО»
              </li>
            </ul>
          </div>
          <div className="monographs">
            <h3 className="monographs__heading">Монографии</h3>

            <ul className="monographs__list">
              <li className="monographs__list-item">
                1. Нагевич П.П. Формирование и оценка фильтрационных свойств водоносных
                толщ. Ташкент, Гидроингео, 1998г.
              </li>

              <li className="monographs__list-item">
                2. Нагевич П.П.,Чеботарева О.В. Оценка современного состояния
                месторождений пресных подземных вод и переоценка их эксплуатационных
                запасов: подходы, требования и обоснования. Ташкент, Гидроингео, 2009г.
              </li>

              <li className="monographs__list-item">
                3. Нагевич П.П. Формирование и распределение фильтрационных свойств
                аллювиальных водоносных горизонтов: основные факторы, процессы и признаки.
                Ташкент, Гидроинего, 2013г.
              </li>

              <li className="monographs__list-item">
                4. Нагевич П.П., Чеботарева О.В., Мирюсупов Ф.М. Галерейные водозаборы
                подземных вод: прошлое, настоящее, перспективы на будущее. Ташкент,
                Гидроингео, 2017г..
              </li>

              <li className="monographs__list-item">
                5.Нагевич П.П., Чеботарева О.В. Методы оценки и переоценки
                эксплуатационных запасов месторождений пресных подземных вод Узбекистана и
                их современное состояние. Ташкент, Гидроингео, 2021г.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;