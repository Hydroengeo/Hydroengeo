import Image from "next/image";
import Link from "next/link";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import avatar from "../../assets/images/geoecology-avatar.png";
import image1 from "../../assets/images/geoecology1.png";
import image2 from "../../assets/images/geoecology2.png";
import image3 from "../../assets/images/geoecology3.png";
import image4 from "../../assets/images/geoecology4.png";
import image5 from "../../assets/images/geoecology5.png";
import image6 from "../../assets/images/geoecology6.png";
import image7 from "../../assets/images/geoecology7.png";
import image8 from "../../assets/images/geoecology8.png";
import image9 from "../../assets/images/geoecology9.png";
import image10 from "../../assets/images/geoecology10.png";
import image11 from "../../assets/images/geoecology11.png";
import image12 from "../../assets/images/geoecology12.png";
import image13 from "../../assets/images/geoecology13.png";
import image14 from "../../assets/images/geoecology14.png";
import image15 from "../../assets/images/geoecology15.png";
import image16 from "../../assets/images/geoecology16.png";
import image17 from "../../assets/images/geoecology17.png";
import image18 from "../../assets/images/geoecology18.png";
import image19 from "../../assets/images/geoecology19.png";

function geoecology() {
  return (
    <section className="geoecology">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading groundwater__heading--width">
            ЛАБОРАТОРИЯ ГЕОЭКОЛОГИИ
          </h1>
        </div>

        <Card
          avatar={avatar}
          name={"Жураев Марифали Тургунбаевич"}
          date={"С 1 марта 2013 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="geoecology__info geoecology__info--padding">
          Лаборатория оказывает следующие услуги:
        </p>

        <ul className="geoecology__list">
          <li className="">
            <p className="geoecology__info">
              Проведение непрерывного экологического мониторинга при проведении
              геолого-разведочных работ.
            </p>
          </li>
          <li className="">
            <p className="geoecology__info">
              Разработки проекта заявления о воздействии на окружающую среду
              (ЗВОС) и природоохранных мероприятий на проведение
              геологоразведочных работ.
            </p>
          </li>
          <li className="">
            <p className="geoecology__info">
              Разработка проекта заявления об экологических последствиях на
              окружающую среду (ЗЭП) при проведении геолого-разведочных работ.
            </p>
          </li>
          <li className="">
            <p className="geoecology__info">
              Изучение и оценка загрязнения подземных вод и разработка
              локализационных и ликвидационных системы очистки подземных вод
              различными загрязняющими ингредиентами.
            </p>
          </li>
        </ul>

        <div className="geoecology__images-box">
          <div className="image1">
            <Image src={image1} alt="Horiba" width={588} height={525} />
          </div>
          <div className="image2">
            <Image src={image2} alt="Horiba-U54G" width={570} height={525} />
          </div>
        </div>

        <p className="geoecology__info">
          Занимается оценкой современного экологического состояния геологической
          среды Республики Узбекистан в условиях активного антропогенного
          воздействия (второй этап международного проекта по составлению Атласа
          карт Центральной Евразии масштаба 1:2500000
        </p>

        <h2 className="geoecology__info geoecology__info--bold">
          Ранее выполненные работы
        </h2>

        <ul className="">
          <li className="">
            <p className="geoecology__info">
              1.{" "}
              <strong>
                «Оценка современного экологического состояния геологической
                среды Республики Узбекистан в условиях активного антропогенного
                воздействия (второй этап международного проекта по составлению
                Атласа карт Центральной Евразии масштаба 1:2500000)»
              </strong>{" "}
              <br />
              Составлена карта техногенного воздействия на геологическую среду и
              карта оценки экологического состояния и техногенных изменений
              геологической среды Республики Узбекистан масштаба 1:2500000
            </p>
          </li>

          <li className="">
            <p className="geoecology__info">
              2.{" "}
              <strong>
                «Оценка современного экологического состояния геологической
                среды и составление геоэкологических карт масштаба 1:1 000 000
                для трансграничных территорий с наиболее напряженной
                антропогенной нагрузкой. (Аральский и Ферганский регионы) в
                рамках Международного проекта по Центральной Евразии».
              </strong>{" "}
              <br />
              Составлен семилистный вариант геоэкологической карты Аральского и
              Ферганского регионов.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info">
              3.{" "}
              <strong>
                «Составление Атласа геоэкологических карт Республики
                Узбекистан».
              </strong>
              Дана оценка современного экологического состояния геологической
              среды, составлены геоэкологические карта освоенных территорий в
              масштабе 1:200000 и 1:Республики Узбекистан масштаба 1:500000.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info">
              4.{" "}
              <strong>
                «Оценка геоэкологических условий обсохшего дна Аральского моря
                для решения проблемы опустынивания и охраны окружающей среды».
              </strong>
              Дана оценка экологического состояния обсохшего дна Аральского моря
              и составлен комплект карт масштаба 1:500000 геологического и
              геоэкологического содержания.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              <strong>Осуществляем работы</strong>
              по геоэкологическим исследованиям и картографированию для оценки
              экологического состояния геологической среды и обоснования
              комплекса природоохранных мероприятий, экологический аудит
              (определение текущего состояния окружающей среды) при проведении
              геологоразведочных работ на нефть, газ и другие полезные
              ископаемые.
            </p>
          </li>
        </ul>

        <p className="geoecology__info geoecology__info--margin-small">
          На сегодняшний день получены следующие результаты:
        </p>

        <ul className="">
          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - установлены региональные геоэкосистемы Узбекистана и характерные
              их модели;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - разработаны рекомендации по минимизации геоэкологических ущербов
              и их предотвращению в перспективе. Подготовлен комплект
              вспомогательных карт и карт геоэкологических систем Узбекистана в
              масштабе 1:500 000. Результаты данной работы рекомендуется
              использовать организациями и специалистами, занимающимися охраной
              природы окружающей среды и разработкой природоохранных мероприятий
              ;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - на основе данной эколого-геологической модели разработан проект
              по оценке влияния агропромышленности на состояние геологической
              среды Ферганской долины;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - проведен анализ современного состояния и оценка мирового и
              отечественного опыта захоронения загрязненных вод в глубокие
              водоносные горизонты;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - определена нормативно-правовая база захоронения попутных
              пластовых и промышленных сточных вод в водоносные горизонты;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - оценены десятки изменения грунтовых вод и подземных вод
              эксплуатируемого водоносного горизонта под воздействием
              агропромышленного комплекса;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - изучено и оценено влияние агропромышленных комплексов на
              состояние геологической среды южной и северной части Ферганской
              долины;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - составлены электронные карты загрязнения подземных вод
              Ангренского горнорудного района в масштабе 1:50 000. Определены по
              некоторым участкам повышения значений минерализации, общей
              жесткости и сульфатов;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - проведены геоэкологические исследования и картографирование
              масштаба 1:50000 в пределах охраняемых природных территории – зон
              формирования Чимион-Аувальского месторождения пресных подземных
              вод и мониторинг земель в приграничных районах Узбекистана;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - проведены геоэкологические исследования в пределах охраняемых
              природных территорий – зон формирования Ош-Араванского и
              Наринского месторождений пресных подземных вод;
            </p>
          </li>
        </ul>

        <div className="image3">
          <Image src={image3} alt="map uzb1" width={1280} height={881} />
        </div>

        <div className="image4">
          <Image src={image4} alt="map part" width={500} height={730} />
        </div>

        <div className="geoecology__images-box">
          <div className="image5">
            <Image src={image5} alt="map half" width={570} height={680} />
          </div>
          <div className="image6">
            <Image src={image6} alt="map 0.5" width={630} height={680} />
          </div>
        </div>

        <ul className="">
          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - проведены геоэкологические исследования и картографирование
              различного масштаба по особо охраняемым природным территориям,
              территорий воздействия золоторудных горнодобывающих предприятий и
              приграничных районов.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - оценено экологическое состояние геологической среды Аральского
              региона, изучено развитие природных комплексов и процессы
              соленакопления в почво-грунтах обсохшего дна Аральского моря.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - выполнены в пределах перехватывающей линии «ОАЗИС» в зоне
              действия ФНПЗ гидрогеологические исследования с целью оптимизации
              системы мониторинга состояния ПВ в зоне его влияния на Ташлакском
              участке
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - оценены коэффициенты полезного действия оборудований зарубежных
              опреснительных установок в зависимости от типа, вида
              опреснительной установки и от его особенностей. Даны возможности
              использования установки по опреснению подземных вод. Проведен
              выбор наиболее эффективных и энергосберегающих способов опреснений
              и установки для их осуществления
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - составлены электронные карты загрязнение подземных вод участок
              Мурунтау Центрального Кызылкумского горнорудного района в масштабе
              1:50 000. Определено в пределах Центрально-Кызылкумского региона
              слабое загрязнение в виде нескольких крупных по размеру ореолов;
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - проведена исследовательская работа по городам Карши, Ангрен,
              Бухара, Чирчик, Самарканд, Навои. По каждой изученной территории
              составлены макеты карт техногенной нагрузки, устойчивости
              геологической среды и карта загрязнения геологической среды.
              Выявлены города с наиболее опасной техногенной нагрузкой, и
              степенью влияния на геоэкологическую обстановку в целом.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - составлена эколого-гидрогеологическая карта ОПТ
              Чимион-Аувалского месторождения в масштабе 1: 50 000. и выделены
              участки с удовлетворительным и напряженным состоянием подземных
              вод.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - выявление пространственной зональности изменения химического
              состава подземных вод Республики Узбекистан с использованием
              ГИС-технологий.
            </p>
          </li>

          <li className="">
            <p className="geoecology__info ">
              - проведены геоэкологические исследования и картографирование
              масштаба 1:50000 в пределах охраняемых природных территории – зон
              формирования Чимион-Аувальского месторождения пресных подземных
              вод и мониторинг земель в приграничных районах Узбекистана
            </p>
          </li>
        </ul>

        <p className="geoecology__info">
          <strong>
            Выявление пространственной зональности изменения химического состава
            подземных вод Республики Узбекистан с использованием ГИС-технологий.
          </strong>
        </p>

        <div className="geoecology__images-box">
          <div className="image7">
            <Image src={image7} alt="Map of the anionic composition of groundwater in the Republic of Uzbekistan" width={640} height={413} />
            <p className="geoecology__info geoecology__info--text">
              Карта анионного состава подземных вод по Республики Узбекистан
            </p>
          </div>
          <div className="image8">
            <Image src={image8} alt="Map of groundwater mineralization in the Republic of Uzbekistan" width={640} height={413} />
            <p className="geoecology__info geoecology__info--text">
              Карта минерализации подземных вод по Республики Узбекистан
            </p>
          </div>
        </div>

        <div className="image9">
          <Image src={image9} alt="Map of the cation composition for the Republic of Uzbekistan" width={665} height={413} />
          <p className="geoecology__info">
            Карта катионного состава по Республики Узбекистан
          </p>
        </div>

        <p className="geoecology__info">
          <strong>
            Разработаны технологии по локализации и ликвидации загрязнений
            нефтепродуктами геологической среды
          </strong>
        </p>

        <div className="geoecology__images-box">
          <div className="image10">
            <Image src={image10} alt="Technological scheme of operation of the intercepting system during the injection of captured waters" width={560} height={397} />
            <p className="geoecology__info">
              Технологическая схема эксплуатации перехватывающей системы при
              закачке каптируемых вод
            </p>
          </div>
          <div className="image11">
            <Image src={image11} alt="Localization and elimination of oil pollution of groundwater" width={620} height={397} />
            <p className="geoecology__info">
              Локализация и ликвидация нефтяного загрязнения грунтовых вод
            </p>
          </div>
        </div>

        <div className="geoecology__images-box">
          <div className="image12">
            <Image src={image12} alt="Schematic map of the intercepting system of an oil terminal" width={507} height={343} />
            <p className="geoecology__info">
              Карта-схема перехватывающей системы нефтяного терминала
            </p>
          </div>
          <div className="image13">
            <Image src={image13} alt="Schematic diagram of stepwise adsorption treatment of wastewater from oil products" width={526} height={343} />
            <p className="geoecology__info">
              Принципиальная технологическая схема ступенчатой адсорбционной
              очистки сточных вод от нефтепродуктов
            </p>
          </div>
        </div>

        <p className="geoecology__info">
          В способах и технологиях очистки поверхностных и подземных вод от
          нефтепродуктов в настоящее время используются многочисленные известные
          зарубежные и местные методы. Все методы, способы и технологии очистки
          позволяют обеспечить более качественную очистку воды от органических
          примесей или нефти, так как, их можно с успехом использовать в
          дальнейшем. С целью очистки подземных вод от нефтяного загрязнения и
          улучшения экологической обстановки региона разработано технологии
          локализации и ликвидации загрязнения подземных вод, основанные на
          опытно - экспериментальных и лабораторных исследованиях системы
          защиты, утилизации загрязненных подземных вод и их очистки.
        </p>

        <p className="geoecology__info">
          Подготовлены три нормативно – технических документа:
        </p>

        <ul className="">
          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - Разработано «Требование к гидрогеологическим,
              инженерно-геологическим и геоэкологическим исследованиям при
              захоронении промышленных и попутных вод в глубокие горизонты».
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - Разработано «Требование к гидрогеологическим и
              инженерно-геологическим исследованиям по оценке территории для
              возможного создания подземных хранилищ нефти (ПХН) и газа (ПХГ)»
            </p>
          </li>

          <li className="">
            <p className="geoecology__info geoecology__info--margin-none">
              - Разработана «Методическая рекомендация по проведению
              геолого-экологического мониторинга и аудита».
            </p>
          </li>
        </ul>

        <div className="geoecology__images-box--flex">
          <div className="image14">
            <Image src={image14} alt="Requirement for hydrogeological" width={400} height={609} />
          </div>
          <div className="image15">
            <Image src={image15} alt="The requirement for hydrogeological and engineering-geological studies to assess the territory for the possible creation of underground oil storages (UGS) and gas storages (UGS)" width={400} height={609} />
          </div>
          <div className="image16">
            <Image src={image16} alt="Methodological recommendation for conducting geological and environmental monitoring and audit" width={400} height={609} />
          </div>
        </div>

        <p className="geoecology__info geoecology__info--margin-none">
          <span className=""></span>
          Успешно развиваются сотрудничество с зарубежными компаниями такими
          как: Японской компания JOGMEC - выполнены разработки заявление
          воздействия окружающей среды (ЗВОС) и заявление экологического
          последствия (ЗЭП) Японской компания MITSUBISHI MATERIALS TECHNO
          CORPORATION - проводился непрерывный экологический мониторинг на
          Тамдыкудук-Тулянташской и Джускудукской площадях загрязнения
          окружающей среды.
        </p>

        <p className="geoecology__info">
          <span className=""></span>
          Корейская компания ИП ООО «KNOC FERGANA OPERATING COMPANY» -
          выполнялся экологический мониторинг при проведении сейсморазведочных
          работ 2D в объеме 500 пог.км в пределах Дехканабадского и
          Ташкурганского инвестиционных блоков юго-западного Гиссарского региона
          Республики Узбекистан
        </p>

        <div className="image17">
          <Image src={image17} alt="photo team" width={1280} height={712} />
        </div>

        <div className="image18">
          <Image src={image18} alt="team work" width={1280} height={730} />
        </div>

        <div className="image19">
          <Image src={image19} alt="workers" width={1280} height={720} />
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

export default geoecology;
