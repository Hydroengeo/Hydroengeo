import Image from "next/image";
import Link from "next/link";

import Card from "../card/card";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import scrolls from "../../assets/images/scrolls.svg";
import avatar from "../../assets/images/engineering-avatar.png";
import image1 from "../../assets/images/engineering1.png";
import image2 from "../../assets/images/engineering2.png";
import image3 from "../../assets/images/engineering3.png";
import image4 from "../../assets/images/engineering4.png";
import image5 from "../../assets/images/engineering5.png";
import image6 from "../../assets/images/engineering6.png";
import image7 from "../../assets/images/engineering7.png";
import image8 from "../../assets/images/engineering8.png";
import image9 from "../../assets/images/engineering9.png";
import image10 from "../../assets/images/engineering10.png";
import image11 from "../../assets/images/engineering11.png";
import image12 from "../../assets/images/engineering12.png";

function engineering() {
  return (
    <section className="engineering">
      <div className="container">
        <div className="ameliorative__head-box">
          <h1 className="ameliorative__heading groundwater__heading--width">
            ЛАБОРАТОРИЯ МОНИТОРИНГА ПОДЗЕМНЫХ ВОД И РЕГИОНАЛЬНЫХ ИССЛЕДОВАНИЙ
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
          name={"Саидова Сайера Анваровна"}
          date={"С 1 марта 2013 года"}
          position={"Заведующий лабораторией"}
        />

        <p className="engineering__info">
          Лаборатория оказывает следующие услуги:
        </p>

        <ul className="">
          <li>
            <p className="engineering__info">
              1. Комплексные гидрогеологические и инженерно-геологические
              обследования;
            </p>
          </li>

          <li>
            <p className="engineering__info">
              2. Разработка и усовершенствование методов по изучению
              гидрогеологических и инженерно-геологических условий,
              месторождений полезных ископаемых.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              3. Оценка и анализ изменения гидрогеологических,
              инженерно-геологических условий месторождений полезных ископаемых
              при их разработке.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              4. Изучение гидрогеологических и инженерно-геологических условий
              месторождений полезных ископаемых;
            </p>
          </li>

          <li>
            <p className="engineering__info">
              5. Оценка нарушенности и трещиноватости горного массива и их роль
              в устойчивость подземных горных выработок».
            </p>
          </li>

          <li>
            <p className="engineering__info">
              6. Исследования для обоснования горнотехнических условий
              эксплуатации месторождений полезных ископаемых.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              7. Изучение закономерности изменения физико-механических свойств
              горных пород в зависимости от горных пород изменений,
              трещиноватости и нарушенности.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              8. Изучение изменения физико-механических свойств горных пород при
              длительной устойчивости.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              9. Установлены закономерности изменения трещинноватости и
              физико-механических свойств горных пород и их роль в оценке
              устойчивости породных массивов месторождений твердых полезных
              ископаемых при подземной и открытой разработке.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              10. Составление крупномасштабных цифровых карт для анализа и
              оценки изменения гидрогеологических и инженерно-геологических
              условий при разработке месторождений подземными и открытыми
              способами МПТИ.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              11. Наблюдения при бурения геологоразведочных скважин
            </p>
          </li>

          <li>
            <p className="engineering__info">
              12. Гидрогеологические и инженерно-геологические условия определит
              водопритоков горные выработки и инженерно-геологические процессы
              месторождения твердых полезных ископаемых.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              13. Инженерно-геологические условия шахта, штольневых горизонтов и
              районирование по степени устойчивости при подземной разработке.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              14. Расчет устойчивости бортов карьера.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              15. Определение глубины залегания и типа подземных вод и их
              химического состава.
            </p>
          </li>
        </ul>

        <div className="image1">
          <Image src={image1} alt="map uzb" width={1280} height={740} />
        </div>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          Лаборатория выполняет:
        </h2>

        <ul className="engineering__list engineering__list--margin-none">
          <li>
            <p className="engineering__info">
              разработку и усовершенствование методов по изучению
              гидрогеологических и инженерно-геологических условий месторождений
              полезных ископаемых.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              оценку изменения гидрогеологических, инженерно-геологических
              условий рудных месторождений при их разработке.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              определение физико-механических свойств горных пород;. изучение
              гидрогеологических и инженерно-геологических условий рудных
              месторождений;
            </p>
          </li>

          <li>
            <p className="engineering__info">
              исследования для обоснования горно-технических условий
              эксплуатации рудных месторождений.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              изучение особенности изменения физико-механических свойств горных
              пород в зависимости от метасоматических изменений, трещиноватости
              и нарушенности.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              изучение физико-механических свойств горных пород при устойчивости
              подземных горных выработок.
            </p>
          </li>

          <li>
            <p className="engineering__info engineering__info--margin-none">
              создание фильтрационных потока подземных вод за счёт просачивание
              из плотине.
            </p>
          </li>
        </ul>

        <p className="engineering__info engineering__info--margin-none">
          В настоящее время лаборатория большое внимание уделяет изучению
          напряженно-деформированного состояния массива горных пород, а также
          прочностных свойств и устойчивости подземных горных выработок.
        </p>

        <p className="engineering__info engineering__info--margin-big">
          При подземной добыче месторождений полезных ископаемых выше указанные
          исследования (изучения) являются недостаточно (мало) изученными
          вопросами в области инженерной геологии МТПИ. На сегодняшний день
          лаборатория обеспечена необходимыми кадрами, которые могут решать
          современные задачи по направлению инженерной геологии и гидрогеологии
          рудных месторождений.
        </p>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          Полученные научные результаты
        </h2>

        <ul className="engineering__list">
          <li>
            <p className="engineering__info">
              установлены закономерности изменения трещинноватости и
              физико-механических свойств горных пород и их роль в оценке и
              прогнозе устойчивости породных массивов месторождений (по
              категории изменения) твердых полезных ископаемых при подземной и
              открытой разработке
            </p>
          </li>

          <li>
            <p className="engineering__info">
              составлена 3D модель вольфрамового месторождения Гуссай (подземная
              разработка). 3D моделирование геологических объектов, является
              одним из наиболее успешных инструментов визуализации,
              разработанной к настоящему времени и которое совершенствуется с
              развитием программного обеспечения.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              в ГИС составлены крупномасштабные цифровые карты для анализ и
              оценки изменения гидрогеологических и инженерно-геологических
              условий при разработке месторождений подземными и открытыми
              способами МТПИ.
            </p>
          </li>

          <li>
            <p className="engineering__info">
              по ГИС технологии составлена карта прогноза изменений
              гидрогеологических и инженерно-геологических условий при подземной
              и открытой разработке месторождений твердых полезных ископаемых.
            </p>
          </li>
        </ul>

        <div className="image2">
          <Image
            src={image2}
            alt="three-dimensional"
            width={1280}
            height={905}
          />
        </div>

        <p className="engineering__info">
          Выявлены особенности изменения трещиноватости и физико-механических
          свойств горных пород и их роль в оценке устойчивости при подземной и
          открытой разработке.
        </p>

        <div className="engineering__images-box">
          <div className="image3">
            <Image className="image3" src={image3} alt="dry mountain" width={420} height={605} />
          </div>

          <div className="image4">
            <Image src={image4} alt="green mountain" width={720} height={605} />
          </div>
        </div>

        <div className="engineering__images-box">
          <div className="image5">
            <Image
              src={image5}
              alt="Fissure waters, mountains +720m, (m-e Guzhumsay)"
              width={580}
              height={350}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>Фото №1 Трещинные воды, гор.+720м, (м-е Гужумсай)</strong>
            </p>
          </div>

          <div className="image6">
            <Image
              src={image6}
              alt="Collapse on the right wall of mine workings (sectionKhodzhadyk)"
              width={580}
              height={350}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>
                Фото №2 Обрушение на правой стенке горных выработок (участок
                Ходжадык).
              </strong>
            </p>
          </div>
        </div>

        <div className="engineering__images-box">
          <div className="image7">
            <Image
              src={image7}
              alt="Encountering fissure waters, mountains. +600m,(Guzhumsay deposit)"
              width={580}
              height={400}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>
                Фото №3 Встречающиеся трещинные воды, гор. +600м, (месторождение
                Гужумсай)
              </strong>
            </p>
          </div>

          <div className="image8">
            <Image
              src={image8}
              alt="Breakout on the roof of mine workings (Khodzhadyk site)"
              width={580}
              height={400}
            />

            <p className="engineering__info engineering__info--margin-top engineering__info--margin-middle">
              <strong>
                Фото 4. Вывал на кровле горных выработок (участок Ходжадык) .
              </strong>
            </p>
          </div>
        </div>

        <div className="engineering__images-box">
          <div className="image9">
            <Image
              src={image9}
              alt="rocky high mountain 1"
              width={590}
              height={650}
            />
          </div>

          <div className="image10">
            <Image
              src={image10}
              alt="rocky high mountain 2"
              width={540}
              height={650}
            />
          </div>
        </div>

        <p className="engineering__info">
          Прорабатывается применение современных геофизических исследований по
          скважинам с использованием ГИС. Рациональный комплексный метод
          «скважинный каротаж» - позволяет определить плотности горных пород по
          площади и глубине. В конечном итоге исследований получим: «Карта
          плотности горных пород месторождений по площади и глубине»
        </p>

        <div className="engineering__images-box">
          <div className="image11">
            <Image src={image11} alt="use laptop" width={605} height={490} />
          </div>

          <div className="image12">
            <Image
              src={image12}
              alt="work in mountain"
              width={575}
              height={490}
            />
          </div>
        </div>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          Применение и освоение современных методов.
        </h2>

        <p className="engineering__info">
          В настоящее время, применяется и осваивается моделирование
          гидрогеологических и инженерно-геологических условий, геофизические
          методы для анализа и оценки изменения гидрогеологических и
          инженерно-геологических условий рудных месторождений при открытых или
          подземных способах разработки. Для объектов Узбекистана, в частности,
          моделирование использовалось для месторождений Гуссай и Гужумсай. В
          ГИС-технологии будет составлена цифровая карта прогноза изменения
          инженерно-геологических и гидрогеологических условий месторождений при
          подземной разработке. Карта составляется по типам районирования, где
          по интенсивности и оценке инженерно-геологических условий при
          разработке месторождений выделены участки: неизменяющиеся, слабо
          изменяющиеся и сильно изменяющиеся. При выделении участков учитывались
          инженерно-геологические особенности, а также интерпретация
          геофизических исследований (материалов) и моделирования. Большое
          внимание уделяется изучению и оценке устойчивости горных выработок
          месторождений. Это позволяет оценить изменения
          напряженно-деформированного состояния массивов горных пород с широким
          применением геофизических методов; геолого-структурного строения
          месторождений; моделирования геологических объектов и других
          процессов; а также изучением трещиноватости и физико-механических
          свойств горных пород и т. д.
        </p>

        <p className="engineering__info">
          -Изучение условий формирования и механизма развития обрушений, вывалов
          и провальных воронок, а также водопритоков (обводнение), вызванных
          техногенным воздействием при подземном способе отработки. - Изучение
          условий формирования подземных вод в связи с углублением разработки и
          их влияния на устойчивость горных выработок в условиях техногенного
          воздействия. Исследования в конечном итоге позволяют своевременно,
          эффективно и безопасно осваивать (разрабатывать) месторождения
          открытыми или подземными способами разработки. Основными
          научно-исследовательскими направлениями лаборатории являются
          применение и освоение современных методов для внедрения в
          гидрогеологические и инженерно-геологические исследования (МТПИ).
        </p>

        <h2 className="engineering__info engineering__info--text engineering__info--bold">
          Внедрение результатов работ:
        </h2>

        <p className="engineering__info">
          Результаты проведенных работ на стадиях предварительной и детальной
          разведки отражены в отчетах, которые послужили инженерно-геологическим
          обоснованием при утверждении запасов рудных месторождений в ГКЗ и ТКЗ
          Республики Узбекистан. Научно-методические рекомендации, анализ и
          оценка инженерно-геологических и гидрогеологических условий внедрены и
          внедряются в АО «Гиссаргеология», АО «Сурхангеология», АО
          «Кызилкумгеология», «Зармитанская» ГСПЭ, ЮРУ «НГМК».
        </p>

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

export default engineering;
