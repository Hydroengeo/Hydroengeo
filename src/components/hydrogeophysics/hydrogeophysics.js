import Image from "next/image"
import Link from "next/link";
// import { useEffect, useState } from "react";

import Card from "../card/card";

//images
import ScrollTop from '../../assets/images/ScrollTop.svg'
import scrolls from '../../assets/images/scrolls.svg'
import avatar from '../../assets/images/hydrogeophysics-avatar.png'
import image1 from '../../assets/images/hydrogeophysics1.png'
import image2 from '../../assets/images/hydrogeophysics2.png'
import image3 from '../../assets/images/hydrogeophysics3.png'
import image4 from '../../assets/images/hydrogeophysics4.png'
import image5 from '../../assets/images/hydrogeophysics5.png'
import image6 from '../../assets/images/hydrogeophysics6.png'
import image7 from '../../assets/images/hydrogeophysics7.png'
import image8 from '../../assets/images/hydrogeophysics8.png'
import image9 from '../../assets/images/hydrogeophysics9.png'
import image10 from '../../assets/images/hydrogeophysics10.png'
import image11 from '../../assets/images/hydrogeophysics11.png'
import image12 from '../../assets/images/hydrogeophysics12.png'
import image13 from '../../assets/images/hydrogeophysics13.png'
import image14 from '../../assets/images/hydrogeophysics14.png'
import image15 from '../../assets/images/hydrogeophysics15.png'
import image16 from '../../assets/images/hydrogeophysics16.png'
import image17 from '../../assets/images/hydrogeophysics17.png'
import image18
   from '../../assets/images/hydrogeophysics18.png'

function hydrogeophysics() {
   return (
      <section className="hydrogeophysics">
         <div className="container">
            <div className="ameliorative__head-box">
               <h1 className="ameliorative__heading">ЛАБОРАТОРИЯ ГИДРОГЕОФИЗИКИ</h1>
               <Image className="scrolls" src={scrolls} alt=" " width={80} height={80} />
            </div>

            <Card
               avatar={avatar}
               name={"Абдуллаев Шавкат Хадияевич"}
               date={"С 1 июля 1988 года"}
               position={"Заведующий лабораторией"}
            />

            <p className="hydrogeophysics__info hydrogeophysics__info--padding-left">
               Лаборатория выполняет следующие геофизические исследования:
            </p>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">методами сейсоразведки;</p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     сейсмотомографии;
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     электроразведки (ВЭЗ, ВЭЗ-ВП);
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     электротомографии;
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     электропрофилирования;
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     радиометрии;
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     скважинной сейсморазведки (сейсмокаротаж, вертикальное сейсмическое профилирование);
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     георадарными;
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     статического зондирования установкой ПП-3.
                  </p>
               </li>
            </ul>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold">Недавно проведенные научно-исследовательские работы;</h2>

            <p className="hydrogeophysics__info">«Проведение геофизических работ на объекте «Правобережный коллектор» в Бухарской области» (ООО «UZGIP»);</p>

            <p className="hydrogeophysics__info">
               Проведение инженерно-геофизических работ для разработки РД «Строительство хвостохранилища
               МОФ-3» АО АГМК в рамках реализации инвестиционного проекта «Освоение месторождения Ёшлик-1»» (ГУП
               «O’zGEORANGMETLITI»);
            </p>

            <p className="hydrogeophysics__info">
               «Проведение независимого геотехнического контроля качества ведения строительных работ по
               объекту «Увеличение полезной емкости Дехканабадского селеводохранилища до 20.0 млн.м3» («Кашкадарё
               сув курилиш инвест» ГУП);ф
            </p>

            <p className="hydrogeophysics__info">
               "Проведение гидрогеологических, инженерно-геологических, геоэкологических и
               гидрогеофизических работ" АО "АГМК";
            </p>

            <p className="hydrogeophysics__info">
               "Изучение факторов, влияющих на возникновение оползневых явлений на руднике "Кальмакир" АО
               Алмалыкский ГМК"
            </p>

            <div className="image1">
               <Image src={image1} alt="mountain" width={1280} height={917} />
            </div>

            <p className="hydrogeophysics__info hydrogeophysics__info--margin">
               Разработка новых методов и рекомендаций использования геофизических методов выявления перспективных месторождений пресных, минеральных, термальных подземных вод Внедрение современных геофизических методов при изучение загрязнения геологической среды, процессов подтопления территорий, динамики оползневых смещений, геологического строения, физико-механических свойств, степени нарушенности пород, устойчивости . гидротехнических и др. инженерных сооружений, моделирование геофизических полей для решения различных задач гидрогеологии и инженерной геологии
            </p>

            <div className="hydrogeophysics__image-box">
               <div className="mobile-image-box">
                  <div className="image2">
                     <Image src={image2} alt="" width={330} height={268} />
                  </div>
                  <div className="image2">
                     <Image src={image3} alt="" width={330} height={326} />
                  </div>
               </div>

               <div className="image4">
                  <Image src={image4} alt="" width={887} height={570} />
               </div>
            </div>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--size">ОСНОВНЫЕ ЗАДАЧИ</h2>

            <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">1. Инженерно-геологические задачи</h3>

            <h4 className="hydrogeophysics__info hydrogeophysics__info--bold">Изучение геологического строения:</h4>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">
                     Литологическое расчленение поверхностных и коренных пород
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение глубины залегания скального основания
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение мощности и строения зоны выветривания скального основания
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Выявление зон тектонических нарушений и изучение элементов их залегания
                  </p>
               </li>
            </ul>


            <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">
               Изучение инженерно-геологических условий:
            </h3>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">
                     Оценка влажности, трещиноватости, пористости, плотности, прочностных и деформационных показателей и закарстованности горных пород
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение содержания глинистых частиц в породе
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение коррозионной активности грунтов
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Изучение оползневых процессов
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Выявление зон развития глубинных деформаций и подземных пустот
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Выявление карстово-суффизионных образований
                     Изучение подтопляемых территорий
                  </p>
               </li>
            </ul>

            <h3 className="hydrogeophysics__info hydrogeophysics__info--bodl">2. Гидрогеологические задачи</h3>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">Определение глубины залегания уровня грунтовых вод</p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение глубины залегания и мощности водоупоров
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение фильтрационных свойств горных пород
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Оценка минерализации подземных вод
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Оценка степени засоления пород зоны аэрации
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Оценка взаимосвязи грунтовых вод с поверхностными водами и водами нижележащих водоносных горизонтов
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Поиски и изучение верховодки, линз слабоминерализованных вод
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Оценка водопроницаемости горных пород
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение направления и скорости движения подземных вод
                  </p>
               </li>
            </ul>

            <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">3. Геотехнические задачи</h3>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">
                     Изучение состояния дамб, плотин
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Обследование состояний грунтов, слагающих основания зданий, уникальных сооружений, исторических памятников и ведение мониторинга
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Выявление утечек из коммуникационных сетей
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Определение качества уплотнения грунтов при возведении плотин, дамб, насыпей
                  </p>
               </li>
            </ul>

            <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">4. Геоэкологические задачи</h3>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">
                     Картирование нефтяных загрязнений
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Картирование погребенных участков полигонов бытовых и промышленно-технических отходов
                  </p>
               </li>
            </ul>

            <h3 className="hydrogeophysics__info hydrogeophysics__info--bold">5. Археологические задачи</h3>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">
                     Картирование погребенных фундаментов и стен древних поселений
                  </p>
               </li>
               <li className="">
                  <p className="hydrogeophysics__info">
                     Поиск локальных археологических объектов
                  </p>
               </li>
            </ul>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">Достижение лаборатории Гидрогеофизики</h2>

            <ul className="hydrogeophysics__list">
               <li className="">
                  <p className="hydrogeophysics__info">
                     различные методические рекомендации по применению геофизических методов и способов обработки и интерпретации при поисках и разведки пресных и термоминеральных подземных вод в различных геологических условиях на территории Узбекистана.
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     методические рекомендации по изучению опасных инженерно-геологических процессов.
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     методические рекомендации по изучению распространения нефтяного загрязнения в геологической среде.
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     комбинированный метод электрических зондирований (КМЭЗ).
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     метод синтезированного электрического зондирования (СЭЗ).
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     метод направленного электромагнитного зондирования (НЭМЗ).
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     метод данной фильтра метрии.
                  </p>
               </li>

               <li className="">
                  <p className="hydrogeophysics__info">
                     Разработаны и изготовлены опытные образцы следующих технических средств:<br />
                     -аппаратура для проведения электроразведочных измерений методом НЭМЗ<br />
                     - измеритель уровня подземных вод<br />
                     - донный фильтромер<br />
                     - переносная установка статического зондирования ПП-3<br />
                     - аппаратура двух горизонтного электромагнитного про фильтрования.<br />
                  </p>
               </li>
            </ul>

            <p className="hydrogeophysics__info">
               В результате деятельности лаборатории «Гидрогеофизика» сотрудниками получены 18 авторских свидетельствий патентов, предложены 20 рационализаторских предложений, защищены 12 кандидатских диссертаций и 1 докторская.
            </p>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">Геофизические исследования при решении гидрогеологических задач</h2>

            <div className="image5">
               <Image src={image5} alt="" width={1230} height={966} />
            </div>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">Геофизические исследования при изучении инженерно-геологических процессов</h2>

            <div className="image6">
               <Image src={image6} alt="" width={1080} height={966} />
            </div>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">Геофизические исследования при изучении нефтяного загрязнения</h2>

            <div className="image7">
               <Image src={image7} alt="" width={1080} height={915} />
            </div>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">Геофизические исследования при оценке состояния грунтов, слагающие основания исторических памятников</h2>

            <div className="image8">
               <Image src={image8} alt="" width={702} height={621} />
            </div>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">Разработка новых технических средств</h2>

            <div className="hydrogeophysics__image-box hydrogeophysics__image-box--margin">
               <div className="image9">
                  <Image src={image9} alt="" width={754} height={549} />
               </div>
               <div className="">
                  <Image src={image10} alt="" width={511} height={633} />
               </div>
            </div>

            <h2 className="hydrogeophysics__info hydrogeophysics__info--bold hydrogeophysics__info--text">Полученные патенты за период деятельности лаборатории</h2>

            <div className="hydrogeophysics__image-box hydrogeophysics__image-box--margin mobile--none">
               <div className="">
                  <Image src={image11} alt="" width={292} height={412} />
               </div>
               <div className="">
                  <Image src={image12} alt="" width={287} height={412} />
               </div>
               <div className="">
                  <Image src={image13} alt="" width={273} height={412} />
               </div>
               <div className="">
                  <Image src={image14} alt="" width={290} height={412} />
               </div>
            </div>

            <div className="hydrogeophysics__image-box mobile--none">
               <div className="">
                  <Image src={image15} alt="" width={293} height={412} />
               </div>
               <div className="">
                  <Image src={image16} alt="" width={293} height={412} />
               </div>
               <div className="">
                  <Image src={image17} alt="" width={300} height={420} />
               </div>
               <div className="">
                  <Image src={image18} alt="" width={297} height={412} />
               </div>
            </div>

            <div className="hydrogeophysics__image-box--mobile">
               <div className="">
                  <Image src={image11} alt="" width={292} height={412} />
               </div>
               <div className="">
                  <Image src={image12} alt="" width={287} height={412} />
               </div>
            </div>

            <div className="hydrogeophysics__image-box--mobile">
               <div className="">
                  <Image src={image13} alt="" width={292} height={412} />
               </div>
               <div className="">
                  <Image src={image14} alt="" width={287} height={412} />
               </div>
            </div>

            <div className="hydrogeophysics__image-box--mobile">
               <div className="">
                  <Image src={image15} alt="" width={292} height={412} />
               </div>
               <div className="">
                  <Image src={image16} alt="" width={287} height={412} />
               </div>
            </div>

            <div className="hydrogeophysics__image-box--mobile">
               <div className="">
                  <Image src={image17} alt="" width={292} height={412} />
               </div>
               <div className="">
                  <Image src={image18} alt="" width={287} height={412} />
               </div>
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

export default hydrogeophysics