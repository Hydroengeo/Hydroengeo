import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";

//images
import ScrollTop from '../../assets/images/ScrollTop.svg'
import scrolls from '../../assets/images/scrolls.svg'
import avatar from '../../assets/images/ameliorative1.jpg'
import image1 from '../../assets/images/ameliorative2.png'
import image2 from '../../assets/images/ameliorative3.png'
import image3 from '../../assets/images/ameliorative4.png'
import image4 from '../../assets/images/ameliorative5.png'
import image5 from '../../assets/images/ameliorative6.png'
import image6 from '../../assets/images/ameliorative7.png'
import image7 from '../../assets/images/ameliorative8.png'
import image8 from '../../assets/images/ameliorative9.png'
import image9 from '../../assets/images/ameliorative10.png'
import image10 from '../../assets/images/ameliorative11.png'
import image11 from '../../assets/images/ameliorative12.png'
import image12 from '../../assets/images/ameliorative13.png'
import image13 from '../../assets/images/ameliorative14.png'
import image14 from '../../assets/images/ameliorative15.png'
import image15 from '../../assets/images/ameliorative16.png'
import image16 from '../../assets/images/ameliorative17.png'
import image17 from '../../assets/images/ameliorative18.png'
import image18 from '../../assets/images/ameliorative19.png'
import image19 from '../../assets/images/ameliorative20.png'
import image20 from '../../assets/images/ameliorative21.png'
import image21 from '../../assets/images/ameliorative22.png'
import image22 from '../../assets/images/ameliorative23.png'
import image23 from '../../assets/images/ameliorative24.png'

import image24 from '../../assets/images/ameliorative25.png'
import image24_1 from '../../assets/images/ameliorative25-2.png'
import image24_2 from '../../assets/images/ameliorative25-1.png'

import image25 from '../../assets/images/ameliorative26.png'
import image25_1 from '../../assets/images/ameliorative26-1.png'
import image25_2 from '../../assets/images/ameliorative26-2.png'


function Ameliorative() {
   const [width, setWidth] = useState(350);
   const [height, setHeight] = useState(250);

   const [height2, setHeight2] = useState(230);
   const [width2, setWidth2] = useState(430);

   const [width3, setWidth3] = useState(640);
   const [height3, setHeight3] = useState(430);

   const [width4, setWidth4] = useState(360);
   const [height4, setHeight4] = useState(430);

   const [width5, setWidth5] = useState(380);
   const [height5, setHeight5] = useState(215);

   const [width6, setWidth6] = useState(410);
   const [height6, setHeight6] = useState(307);

   const [width7, setWidth7] = useState(500);
   const [height7, setHeight7] = useState(375);

   useEffect(() => {
      if (window.innerWidth <= 1110) {
         setHeight(380)
         setWidth(540)

         setWidth2(540)
         setHeight2(300)

         setWidth3(540)
         setHeight3(360)

         setWidth4(540)
         setHeight4(480)

         setWidth5(540)
         setHeight5(300)

         setWidth6(540)
         setHeight6(406)

         setWidth6(540)
         setHeight6(406)

         setWidth7(540)
         setHeight7(380)
      } else if (window.innerWidth <= 495) {
         setWidth4(350)
      }
   }, [])


   return (
      <section className="ameliorative">
         <div className="container">
            <div className="ameliorative__head-box">
               <h1 className="ameliorative__heading">ЛАБОРАТОРИЯ МЕЛИОРАТИВНОЙ ГИДРОГЕОЛОГИИ И ДРЕНАЖА</h1>
               <Image className="scrolls" src={scrolls} alt=" " width={80} height={80} />
            </div>

            <div className="workers workers--padding">
               <div className="workers__card">
                  <div className="avatar">
                     <Image
                        src={avatar}
                        width="240"
                        height="320"
                        alt="Бимурзаев Гани Амиргалиевич"
                     />
                  </div>

                  <table className="workers__info">
                     <tbody>
                        <tr className="workers__info-row">
                           <td>
                              <p>Ф.И.О.</p>
                           </td>
                           <td>Мирюсупов Фазлиддин Мухитдинович</td>
                        </tr>

                        <tr className="workers__info-row">
                           <td>На должности:</td>
                           <td>С 1 декабря 2015 года </td>
                        </tr>
                        <tr className="workers__info-row">
                           <td>Должность:</td>
                           <td>Заведующий лабораторией </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="ameliorative__services">
               <p className="ameliorative__services__title">Лаборатория оказывает следующие услуги:</p>
               <ul className="ameliorative__services__list">
                  <li className="ameliorative__services__item">
                     Обоснование технологий извлечения подземных вод водозаборами горизонтального типа для хозяйственно-питьевого водоснабжения для Министерства жилищно-коммунального хозяйства.
                  </li>
                  <li className="ameliorative__services__item">
                     Оценка эксплуатационных запасов подземных вод по скважинным централизованным водозаборам для хозяйственно-питьевого водоснабжения
                  </li>
               </ul>
            </div>


            <p className="ameliorative__info">
               Согласно Постановлению Президента Республики Узбекистан «О мерах по упорядочению контроля и учета рационального использования запасов подземных вод на 2017 — 2021 годы»
               сформирована лаборатория "Мелиоративная гидрогеология и дренаж". <br />
               <span className="ameliorative__info__span">В настоящее время в лаборатории  работает 12 сотрудников, из которых 5 – ведущие специалисты, 1 магистрант.</span>
            </p>

            <ul className="developed__list">
               <li className="developed__item developed__item--mobile-margin">
                  <Image className="image1" src={image1} alt="" width={width} height={height} />
                  <p className="ameliorative__info">Освоенные территории с благоприятными условиями мелиорации</p>
               </li>

               <li className="developed__item developed__item--mobile-margin">
                  <Image className="image1" src={image2} alt="" width={width} height={height} />
                  <p className="ameliorative__info">Освоенные территории со слабой дренированностью</p>
               </li>

               <li className="developed__item developed__item--mobile-margin">
                  <Image className="image1" src={image3} alt="" width={width} height={height} />
                  <p className="ameliorative__info">Территории, подверженные процессам вторичного засоления</p>
               </li>
            </ul>

            <p className="ameliorative__info ameliorative__info--margin">
               Предметом деятельности лаборатории является проведение научно-исследовательских работ по изучению процесса регионального засоления грунтов  зоны аэрации и грунтовых вод и их прогноз на орошаемых территориях,  в том числе:
            </p>

            <ul className="ameliorative__services__list">
               <li className="ameliorative__services__item">
                  Выявление пространственно-временных  закономерностей фильтрационных и миграционных процессов, протекающих в зоне аэрации на основе экспериментальных исследований на участках с различным механическим составом, степенью засоления почвогрунтов и режимом грунтовых вод;
               </li>
               <li className="ameliorative__services__item">
                  Математическое моделирование физико-химических процессов, протекающих в зоне аэрации и в грунтовых водах, и прогноз выноса солей с орошаемых территорий;
               </li>
               <li className="ameliorative__services__item">
                  Разработка комплекса мероприятий по улучшению мелиоративного состояния земель на основе натурных исследований на опытных полигонах и математического моделирования процессов засоления.
               </li>
            </ul>

            <ul className="developed__list developed__list--flex">
               <li className="developed__item developed__item--width">
                  <Image src={image4} alt="" width={width2} height={height2} />
                  <p className="">Ранее применяемый подход, без учета процессов в зоне аэрации</p>
               </li>

               <li className="developed__item developed__item--width">
                  <Image src={image5} alt="" width={width2} height={height2} />
                  <p className="">Физико-химические процессы в зоне аэрации и их связь с грунтовыми водами</p>
               </li>
            </ul>

            <ul className="developed__list developed__list--flex">
               <li className="developed__item developed__item--width">
                  <Image src={image6} alt="" width={width} height={height} />
                  <p className="">Структура модели тестового полигона</p>
               </li>

               <li className="developed__item developed__item--width">
                  <div className="image7">
                     <Image src={image7} alt="" width={238} height={307} />
                  </div>
                  <p className="ameliorative__info ameliorative__info--mobile-text">Уровни грунтовых вод по результатам моделирования</p>
               </li>
            </ul>

            <div className="territories">
               <h2 className="territories__heading">Территории Республики Узбекистан, подверженные процессам засоления</h2>
               <Image src={image8} alt="" width={1280} height={762} />
               <p className="ameliorative__info ameliorative__info--margin ameliorative__info--mobile-bold">
                  Изучение агрофизических  и агрохимических свойств почвогрунтов  приповерхностных горизонтов и взаимосвязи подземных вод различных  горизонтов в течение годичного цикла
               </p>
            </div>

            <div className="developed__list developed__list--width">
               <div className="image9">
                  <Image src={image9} alt="" width={width3} height={height3} />
               </div>
               <div className="image10">
                  <Image src={image10} alt="" width={304} height={427} />
               </div>
            </div>

            <p className="ameliorative__info ameliorative__info--margin">
               Физические свойства грунтов обусловлены гранулометрическим и минералогическим составом грунтов. Более высокими значениями в целом характеризуются тяжелые суглинистые породы, более низкими средние, пылеватые суглинки. Естественная влажность грунтов изменяется в широких пределах, увеличиваясь в разрезе выработок с увеличением содержаний пылеватых и глинистых частиц.
               Фильтрационные свойства пород отличаются крайней пространственной неоднородностью как от одной геоморфологической зоны к другой, так и в пределах одной зоны..
            </p>

            <p className="ameliorative__info ameliorative__info--margin-many">
               Построение гидрогеологических моделей водозаборов горизонтального типа (галерей) с целью переоценки запасов подземных вод.
            </p>

            <div className="developed__list developed__list">
               <div className="developed__item developed__item--width">
                  <Image src={image11} alt="" width={width} height={height} />
                  <p className="ameliorative__info">
                     Укладка перфорированной трубы
                     на дно траншеи на участке Дамходжа
                  </p>
               </div>

               <div className="">
                  <ul className="developed__list">
                     <li className="developed__item--mobile-margin-small">
                        <Image src={image12} alt="" width={width5} height={height5} />
                     </li>
                     <li className="developed__item--margin">
                        <Image src={image13} alt="" width={width5} height={height5} />
                     </li>
                  </ul>
                  <p className="ameliorative__info ameliorative__info--text developed__item--mobile-margin-small">Кадры из видео, снятого внутри водозаборной галереи</p>
               </div>
            </div>

            <p className="ameliorative__info ameliorative__info--margin">
               Поиски и нахождение участков, пригодных для строительства и эксплуатации водозаборов галерейного типа, является задачей сложной и требует пристального внимания и интеллектуальных затрат специалистов – гидрогеологов. Строительство таких сооружений без гидрогеологического обоснования является недопустимым и приведет к непредсказуемым материальным и финансовым потерям без получения требуемого эффекта.
               Вместе с тем галерейные водозаборы относительно скважинных более экономичны, поскольку рассчитаны на извлечение подземных вод с глубины до 10м без затрат электроэнергии.
            </p>

            <ul className="developed__list--block">
               <li className="developed__item--width">
                  <Image src={image14} alt="" width={width6} height={height6} />
                  <p className="ameliorative__info ameliorative__info--margin  ameliorative__info--text">Участок работ «Дамходжа»</p>
               </li>

               <li className="developed__item--width developed__item--margin-left">
                  <Image src={image15} alt="" width={width6} height={height6} />
                  <p className="ameliorative__info ameliorative__info--margin ameliorative__info--text">Участок работ «Аккишлак»</p>
               </li>
            </ul>

            <h2 className="ameliorative__info ameliorative__info--margin ameliorative__info--mobile-text">Проходка траншеи под перфорированные трубы на участках Аксу и Дамходжа</h2>

            <div className="developed__list--block" >
               <div className="middle-box">
                  <div className="image16">
                     <Image src={image16} alt="" width={width4} height={height4} />
                  </div>
                  <p className="ameliorative__info ameliorative__info--mobile-text">
                     Участок Аккишлак.<br />
                     При проходке траншеи <br />
                     вскрыты глинистые отложения<br />
                     в центральной части участка
                  </p>
               </div>

               <ul className="developed__list--block developed__list--margin-left ">
                  <li className="developed__item developed__item--mobile-margin-small">
                     <div className="developed__item--margin-bottom developed__item--mobile-margin-small">
                        <Image className="" src={image17} alt="" width={width2} height={height2} />
                     </div>
                     <Image src={image18} alt="" width={width2} height={height2} />
                  </li>

                  <li className="developed__item--margin-small">
                     <div className="developed__item--margin-small developed__item--margin-bottom">
                        <Image src={image19} alt="" width={width2} height={height2} />
                     </div>
                     <p className="developed__item--margin-small ameliorative__info--width">
                        Участок Дамходжа.
                        При проходке траншеи (1030   м от экспериментального  фрагмента) на глубине 7м  вскрыты глинистые отложения
                     </p>
                  </li>
               </ul>

            </div>

            <h2 className="ameliorative__info ameliorative__info--margin desktop">Участок Аксу-Аккишлак. Вода из галереи подаётся в райцентр Дехканабад </h2>

            <div className="developed__list--block desktop">
               <div className="">
                  <Image className="bottom-box__img" src={image20} alt="" width={width7} height={height7} />
                  <p className="">
                     <strong className="ameliorative__info ameliorative__info--margin-little">
                        Расходы воды, замеренные в колодцах по галерее Аксу. В паводковый период  расход галереи выше проектного в 2 раза
                     </strong>
                  </p>

                  <p className="ameliorative__info">Участок Дамходжа. Уложена практически вся перфорированная труба. Идет укладка обратного фильтра</p>
               </div>

               <div className="bottom-box">
                  <Image src={image21} alt="" width={width7} height={height7} />
                  <p className="ameliorative__info ameliorative__info--margin-big ameliorative__info--mobile-margin">
                     На участке Аксу проводятся гидрогеологические исследования по замеру расхода воды в галерее и в саях. В паводок расход воды превышает утвержденный эксплуатационный отбор в 2,1 раза. Отбирались пробы воды через смотровые колодцы и проводилось изучение мутности воды в галерее.
                  </p>
               </div>
            </div>

            <div className="mobile">
               <div className="image21 developed__item--mobile-margin-small"><Image src={image21} alt="" width={width} height={height} /></div>
               <div className="image20"> <Image className="bottom-box__img" src={image20} alt="" width={width} height={height} /></div>
               <p className="ameliorative__info ameliorative__info--mobile-margin-big">Участок Аксу-Аккишлак. Вода из галереи подаётся в райцентр Дехканабад </p>
               <p className="ameliorative__info">
                  <strong className="ameliorative__info ameliorative__info--margin-little">
                     Расходы воды, замеренные в колодцах по галерее Аксу. В паводковый период  расход галереи выше проектного в 2 раза
                  </strong>
               </p>
               <p className="ameliorative__info">Участок Дамходжа. Уложена практически вся перфорированная труба. Идет укладка обратного фильтра</p>
               <p className="ameliorative__info ameliorative__info--margin-big ameliorative__info--mobile-margin">
                  На участке Аксу проводятся гидрогеологические исследования по замеру расхода воды в галерее и в саях. В паводок расход воды превышает утвержденный эксплуатационный отбор в 2,1 раза. Отбирались пробы воды через смотровые колодцы и проводилось изучение мутности воды в галерее.
               </p>
            </div>

            <div className="developed__list--margin developed__list--block developed__item--mobile-margin-small">
               <div className="developed__item--mobile-margin-small">
                  <Image src={image22} alt="" width={width} height={height} />
               </div>
               <div className="developed__item--margin-left">
                  <Image src={image23} alt="" width={width} height={height2} />
                  <p className="ameliorative__info">Строительство галереи</p>
               </div>
            </div>

            <h2 className="ameliorative__info ameliorative__info--margin">Разработка методов улучшения гидрогеологических условий с целью прогрессивного повышения плодородия почвы без ущерба для геологической обстановки.</h2>

            <div className="desktop--block">
               <Image src={image24} alt="" width={1280} height={630} />
            </div>

            <div className="mobile">
               <Image src={image24_1} alt="" width={540} height={532} />
               <p className="ameliorative__info">Минерализация подземных вод на начало моделирования(3 слой)</p>
               <Image src={image24_2} alt="" width={540} height={510} />
            </div>

            <h2 className="ameliorative__info ameliorative__info--text ameliorative__info--margin">3D моделирование гидрогеологических процессов</h2>

            <ul className="ameliorative__services__list">
               <li className="ameliorative__services__item">Занимается изучением подземных вод в районах поливного земледелия.</li>
               <li className="ameliorative__services__item">Разрабатывает 3D модели влияния орошения на различные регионы.</li>
               <li className="ameliorative__services__item">Выявление микроэлементов зоны аэрации и прогнозирование засоления земель с учетом химического состава зоны аэрации</li>
            </ul>

            <div className="desktop--block">
               <Image src={image25} alt="" width={1280} height={500} />
            </div>

            <div className="mobile">
               <Image src={image25_1} alt="" width={540} height={420} />
               <Image src={image25_2} alt="" width={540} height={435} />
            </div>


            <div className="scientific__btn ">
               <Link href={'#header'}>
                  <a className="cooperation__btn__link">
                     <Image src={ScrollTop} alt="ScrollTop" width='80' height='80' />
                  </a>
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Ameliorative