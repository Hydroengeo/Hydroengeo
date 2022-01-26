import Image from "next/image"
import Link from "next/link";
// import { useEffect, useState } from "react";

import Card from "../card/card";

//images
import ScrollTop from '../../assets/images/ScrollTop.svg'
import scrolls from '../../assets/images/scrolls.svg'
import avatar from '../../assets/images/modeling-avatar.png'
import image1 from '../../assets/images/modeling1.png'
import image2 from '../../assets/images/modeling2.png'
import image3 from '../../assets/images/modeling3.png'
import image4 from '../../assets/images/modeling4.png'
import image5 from '../../assets/images/modeling5.png'
import image6 from '../../assets/images/modeling6.png'
import image7 from '../../assets/images/modeling7.png'
import image8 from '../../assets/images/modeling8.png'
import image9 from '../../assets/images/modeling9.png'
import image10 from '../../assets/images/modeling10.png'
import image11 from '../../assets/images/modeling11.png'
import image12 from '../../assets/images/modeling12.png'
import image13 from '../../assets/images/modeling13.png'
import image14 from '../../assets/images/modeling14.png'
import image15 from '../../assets/images/modeling15.png'
import image16 from '../../assets/images/modeling16.png'
import image17 from '../../assets/images/modeling17.png'
import image18 from '../../assets/images/modeling18.png'
import image19 from '../../assets/images/modeling19.png'
import image20 from '../../assets/images/modeling20.png'
import image21 from '../../assets/images/modeling21.png'
import image22 from '../../assets/images/modeling22.png'
import image23 from '../../assets/images/modeling23.png'
import image24 from '../../assets/images/modeling24.png'
import image25 from '../../assets/images/modeling25.png'
import image26 from '../../assets/images/modeling26.png'
import image27 from '../../assets/images/modeling27.png'
import image28 from '../../assets/images/modeling28.png'
import image29 from '../../assets/images/modeling29.png'
import image30 from '../../assets/images/modeling30.png'
import image31 from '../../assets/images/modeling31.png'
import image32 from '../../assets/images/modeling32.png'
import image33 from '../../assets/images/modeling33.png'
import image34 from '../../assets/images/modeling34.png'
import image35 from '../../assets/images/modeling35.png'
import image36 from '../../assets/images/modeling36.png'
import image37 from '../../assets/images/modeling37.png'
import image38 from '../../assets/images/modeling38.png'
import image39 from '../../assets/images/modeling39.png'
import image40 from '../../assets/images/modeling40.png'
import image41 from '../../assets/images/modeling41.png'
import image42 from '../../assets/images/modeling42.png'
import image43 from '../../assets/images/modeling43.png'
import image44 from '../../assets/images/modeling44.png'


function modeling() {
   return (
      <section className="modeling">
         <div className="container">
            <div className="ameliorative__head-box">
               <h1 className="ameliorative__heading">ЛАБОРАТОРИЯ ГЕОИНФОРМАЦИОННЫХ ТЕХНОЛОГИИ И МОДЕЛИРОВАНИЕ</h1>
               <Image className="scrolls" src={scrolls} alt=" " width={80} height={80} />
            </div>

            <Card
               avatar={avatar}
               name={"Хушвактов Сайдулла Холбазарович"}
               date={"С 14 октября 2016 года"}
               position={"Заведующий лабораторией"}
            />


            <p className="modeling__info modeling__info--padding-left modeling__info--margin">
               Лаборатория оказывает следующие услуги:
            </p>

            <ul className="modeling__methods-list">
               <li className="">
                  <p className="modeling__info">Монтаж, установка и наладка «Модуля телеметрии автоматического мониторинга подземных вод в гидрогеологических скважинах»;</p>
               </li>

               <li className="">
                  <p className="modeling__info">Геопривязка и векторизация растров;</p>
               </li>

               <li className="">
                  <p className="modeling__info">Проектирование пространственных баз данных;</p>
               </li>

               <li className="">
                  <p className="modeling__info">Компьютерная картография;</p>
               </li>

               <li className="">
                  <p className="modeling__info">Трёхмерное геологическое моделирование;</p>
               </li>

               <li className="">
                  <p className="modeling__info">Разработка и составление картографических отчётов;</p>
               </li>

               <li className="">
                  <p className="modeling__info">Разработка программного обеспечения.</p>
               </li>
            </ul>

            <h2 className="modeling__info modeling__info--margin-small">ОСНОВНЫЕ ЗАДАЧИ ЛАБОРАТОРИИ</h2>

            <ul className="modeling__methods-list">
               <li className="modeling__info">
                  • Разработка математических моделей месторождений подземных вод на основе современных программных продуктов;
               </li>

               <li className="modeling__info">
                  • Создание природных, геофильтрационных и  математических моделей процессов геофильтрации с целью прогноза поведения уровня подземных вод и оценки их качества на основе современных программных продуктов; Построение и обработка гидрогеологических и инженерно-геологических карт с применением ГИС-технологии;
               </li>

               <li className="modeling__info">
                  • Обработка и обобщения геолого-гидрогеологических, геофизических и аэрокосмических данных методами компьютерной технологии;
               </li>

               <li className="modeling__info">
                  • Статистическая обработка гидрогеологической и инженерно – геологических данных;
               </li>

               <li className="modeling__info">
                  • Обоснование и совершенствования методов мониторинга подземных вод;
               </li>

               <li className="modeling__info">
                  • Разработка компьютерных технологий и приборов автоматического замера уровня, температуры и удельной электропроводимости подземных вод, к условиям Узбекистана;
               </li>

               <li className="modeling__info">
                  • Применение и внедрение автоматизированных приборов для замера уровня, температура и удельной электропроводимость грунтовых вод и их модификации с целью оптимизации мониторинга ПВ.
               </li>

               <li className="modeling__info">
                  • Разработка и внедрение в практику современных программных обеспечений и моделирующих систем;
               </li>

               <li className="modeling__info">
                  • Разработка рекомендаций и методических руководств по применению и внедрению математических методов для моделирования, автоматизированных измерительных приборов геоинформационной технологии, а также программного обеспечению.
               </li>
            </ul>

            <h2 className="modeling__info modeling__info--margin-small">ОСНОВНЫЕ РЕЗУЛЬТАТЫ</h2>

            <p className="modeling__info modeling__info--margin-small">
               «Создание современных цифровых гидрогеологических 3D моделей по месторождениям подземных вод Республики Узбекистан для обработки результатов геологоразведочных работ, оценки ресурсов и рационального использования» (на примере долины р.Ахангаран).
            </p>

            <p className="modeling__info">
               В результате исследований для 3D модели подготовлены фактографической и картографической основы гидрогеолого-информационной системы, гидрогеологические параметры и факторы, определяющие состояние подземных вод, гидрогеологические условия объекта исследования, а также произведен сбор материалов по гидрогеологическим, геоморфологическим и водохозяйственным условиям объекта исследований.<br />
               База данных созданная в системе ArcGIS, включает картографический материал и табличные сведения, которые введены в атрибутивную информацию объектов. 3D моделирование выполнено с использованием программы Visual Modflow, в результате были построены цифровые карты уровней грунтовых вод и пьезометрической поверхности исследуемого района.
            </p>

            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image1} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image2} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image3} alt="" width={420} height={300} />
               </div>
            </div>

            <div className="modeling__images-box modeling__info--margin-small">
               <div className="">
                  <Image className="" src={image4} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image5} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image6} alt="" width={420} height={300} />
               </div>
            </div>

            <p className="modeling__info modeling__info--margin-small">
               «Исследование процессов подпора подземных вод и подтопления территории под влиянием Айдар-Арнасайской озерной системы<br />
               на основе ГИС-технологий»
            </p>

            <p className="modeling__info">
               Составлен набор последовательных форм диаграмм, табличных, графических и картографических материалов, как исходных данных для моделирования, анализа и оценки гидрогеологических условий в целях выявления причин и темпов изменения состояния подземных вод неоген-четвертичных отложений под влиянием ААОС. <br />
               Создана геофильтрационная модель месторождений подземных вод неоген-четвертичных отложений в пределах влияния Айдар-Арнасайской озерной системы на основе современных программных продуктов Modflow и ArcGIS в условиях антропогенного воздействия.
            </p>

            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image7} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image8} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image9} alt="" width={420} height={300} />
               </div>
            </div>

            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image10} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image11} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image12} alt="" width={420} height={300} />
               </div>
            </div>


            <p className="modeling__info">
               «Разработка математической модели месторождений подземных вод  на примере Ферганской долины  с целью  оценки прогнозных ресурсов в связи  с изменением водохозяйственных условий»
            </p>

            <p className="modeling__info">
               Разработана геофильтрационная математическая модель месторождений подземных вод Ферганской долины для выявления перспектив их использования в народном хозяйстве, повышения водообеспеченности орошаемых земель в условиях техногенного маловодья.<br />
               При геофильтрационной схематизации выполнены анализ рядов режимных наблюдений за уровнем подземных вод и геофильтрационных параметров, Кф, m, Km, m, а также ретроспективных данных по водозаборам и др.<br />
               При региональной оценке прогнозных ресурсов (ПР) и эксплуатационных запасов (ЭЗ) учитывались закономерности формирования подземных вод, их баланс, литолого-фациальные условия залегания водоносных горизонтов, гидродинамическое (и гидравлическое) состояние водоносных горизонтов, взаимоотношение между подземными и поверхностными водами и др. <br />
               Создана схематическая карта различных типов взаимосвязи между напорными и грунтовыми водами Ферганской долины и построена схематическая 3D модель уровня грунтовых вод Ферганской долины в Visual ModFlow.<br />
               На созданной математической модели были решены следующие задачи: а) отбор подземных вод  в количестве возможных ресурсов в прибортовых частях (заадырных впадинах) в однослойной среде:  б) отбор подземных вод в трехслойной среде (периферии конусов выноса, Центральное Фергана, долина р. Нарына, Карадарыи, Сырдары).<br />
            </p>

            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image13} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image14} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image15} alt="" width={420} height={300} />
               </div>
            </div>

            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image16} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image17} alt="" width={420} height={300} />
               </div>
               <div className="">
                  <Image className="" src={image18} alt="" width={420} height={300} />
               </div>
            </div>

            <h2 className="modeling__info modeling__info--margin-small">НАУЧНЫЕ РАЗРАБОТКИ</h2>

            <p className="modeling__info modeling__info--margin-small">
               Научные разработки лаборатории «Геоинформационной технологии и моделирование», связаны с широким кругом фундаментальных, прикладных и инновационных задач моделирования и внедрения новых геоинформационных технологий. Они  включают:
            </p>


            <ul className="">
               <li className="modeling__info">
                  • построение математических моделей геофильтрационных  процессов,
               </li>
               <li className="modeling__info">
                  • -решение на их основе актуальных задач гидрогеологии, мелиоративной гидрогеологии и инженерной геологии
               </li>
               <li className="modeling__info">
                  • -создание и разработка численных методов и адаптация ее к новейшей вычислительной технике, составление геоинформационных систем с помощью ArcGIS.
               </li>
               <li className="modeling__info">
                  • разработка новых программных обеспечений по поставленной задаче.
               </li>
            </ul>

            <ul className="modeling__methods-list">
               <li className="modeling__info">
                  В лаборатории разработано устройство автоматизированного измерения уровня, температуры и электропроводности подземных вод в наблюдательных скважинах с дистанционной передачей данных.
                  Назначение устройства. Устройство автоматизированного измерения уровня, температуры и минерализации подземных вод в наблюдательных скважинах, позволяет измерять, собирать, хранить, обрабатывать и дистанционно передавать в центр обработки информацию о состоянии подземных вод.
                  Преимущества применения автоматизированного прибора для контроля количественных и качественных характеристик подземных вод (ПВ):
               </li>

               <li className="modeling__info">
                  - не требуется периодическое опускание, поднятие поплавка или электродов датчика  уровня воды;
               </li>

               <li className="modeling__info">
                  - получение параметров ПВ в режиме онлайн;
               </li>

               <li className="modeling__info">
                  - автономная работа без участия человека;
               </li>

               <li className="modeling__info">
                  - возможность организации беспроводной передачи данных;
               </li>

               <li className="modeling__info">
                  - возможность электронного протоколирования данных с требующейся периодичностью.
               </li>

               <li className="modeling__info">
                  Основные технические характеристики прибора
               </li>

               <li className="modeling__info">
                  Глубина измерений уровня, м <span className="">200</span>
               </li>

               <li className="modeling__info">
                  Диапазон измерений уровня, м <span className="">0 - 2</span>
               </li>

               <li className="modeling__info">
                  Объем памяти, замеров, не менее <span className="">50000</span>
               </li>

               <li className="modeling__info">
                  Диапазон замера температуры воды в скважине, С <span className="">от +5 до +30</span>
               </li>

               <li className="modeling__info">
                  Питание осуществляется от батарейки (аккумулятора)	3,6 В
               </li>

               <li className="modeling__info">
                  Средний срок службы, лет, не менее	<span className="">5</span>
               </li>

               <li className="modeling__info">
                  Устройство состоит из двух взаимосвязанных частей:
               </li>

               <li className="modeling__info">
                  1) погружной блок с датчиками давления, температуры, минерализации и электронная плата с микроконтроллером;
               </li>

               <code className="modeling__info">
                  2) гермоотсек, где размещены соединенные между собой GSM-модем с внешней антенной и источник электропитания прибора.
               </code>
            </ul>

            <div className="">
               <Image className="" src={image19} alt="" width={415} height={196} />
            </div>

            <p className="modeling__info">
               Принцип работы. Работа прибора начинается с подключения его к источнику питания (аккумуляторной батареи). После подключения батареи к разъему, происходит запуск и инициализация микроконтроллера.<br />
               После опускания и установки прибора в скважину, необходимо войти на специальный веб-сайт и установить требуемый интервал измерений в разделе настроек. Микроконтроллер запускается и инициализируется через заданный интервал времени.<br />
               После окончания измерений микроконтроллер сохраняет данные в микросхеме памяти, а затем подает сигнал на отправку результатов измерений в центр сбора информации через интернет (3G, GPRS, EDGE), с указанием идентификационного номера прибора, даты и времени измерения. По окончании передачи информации микроконтроллер отключает питание, переводит в режим пониженного энергопотребления микросхемы устройства, запускает внутренний таймер и уходит в спящий режим. Таким образом, данный цикл измерения повторяется с заданной при настройке периодичностью.
            </p>

            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image20} alt="" width={486} height={385} />
               </div>
               <div className="">
                  <Image className="" src={image21} alt="" width={746} height={385} />
               </div>
            </div>

            <p className="modeling__info">
               Передача результатов измерений через интернет непосредственно сразу после измерения обеспечивает оперативный сбор данных, т.е. с использованием интернет канала можно передавать измеренные данные на любые расстояния.<br />
               Применение устройство для автоматического измерения параметров подземных вод в гидрогеологических скважинах, дает возможность сэкономить время и материальные затраты при гидрогеологическом мониторинге, повысит продуктивность работ и надежность данных, а также создаст эффективную систему мониторинга подземных вод в режиме реального времени.
            </p>

            <div className="image22">
               <Image className="" src={image22} alt="" width={717} height={632} />
            </div>

            <h2 className="modeling__info modeling__info--bold modeling__info--text modeling__info--margin-small">Установка прибора в гидрогеологические скважины</h2>


            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image23} alt="" width={330} height={550} />
               </div>
               <div className="">
                  <Image className="" src={image24} alt="" width={330} height={550} />
               </div>
               <div className="">
                  <Image className="" src={image25} alt="" width={330} height={550} />
               </div>
            </div>


            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image26} alt="" width={330} height={550} />
               </div>
               <div className="">
                  <Image className="" src={image27} alt="" width={330} height={550} />
               </div>
               <div className="">
                  <Image className="" src={image28} alt="" width={330} height={550} />
               </div>
            </div>

            <h2 className="modeling__info modeling__info--bold modeling__info--font-size">Научные достижения лаборатории</h2>

            <ul className="modeling__methods-list modeling__methods-list--padding-left">
               <li className="">
                  <p className='modeling__info'>Создано компьютерная  информационная система подземных вод Республики Каракалпакистан, Хорезмской и Самаркандской областей на основе ГИС –технологии.</p>
               </li>

               <li className="">
                  <p className="modeling__info">Создана модель гидродинамических процессов  с целью исследования негативных явлений (подтопление, загрязнение, засоление, деформация зданий и сооружений и др.) на основе ГИС – технологии.</p>
               </li>

               <li className="">
                  <p className="modeling__info">Создана компьютерная информационная системы и банка данных по регистрации, учету и оценки зон проявления опасных геологических процессов РУз.</p>
               </li>

               <li className="">
                  <p className="modeling__info"> Разработана математическая модель месторождений подземных вод Ферганской долины для оценки прогнозных ресурсов в связи с изменением водохозяйственных условий»</p>
               </li>

               <li className="">
                  <p className="modeling__info"> Применительно к режиму грунтовых вод в лаборатории разработан метод оценки репрезентативности наблюдений и составления региональных характеристик режима подземных вод по среднегодовой региональной норме обеспеченности уровня грунтовых вод.</p>
               </li>

               <li className="">
                  <p className="modeling__info">Разработана методика  применения  оборудования  типа diver для изучения режима подземных вод в кустовых скважинах.</p>
               </li>

               <li className="">
                  <p className="modeling__info">
                     Установлена возможность  использования водяного датчика типа diver вместо воздушного.
                  </p>
               </li>

               <li className="">
                  <p className="modeling__info">
                     Методика оценки репрезентативности наблюдений и составления региональных характеристик режима подземных вод по среднегодовой региональной норме обеспеченности уровня грунтовых вод передана для использования Ангренской гидрогеологической  станции
                  </p>
               </li>
            </ul>

            <p className="modeling__info">
               В настоящее время при гидрогеологических, инженерно-геологических и геоэкологических исследований создается картографические, фактографические баз данных, т.е. информационное обеспечение, которое широко применяются в системе охраны окружающей среды, в частности для решения мониторинговых задач. Геоинформационная технология становятся одной из распространенных форм представления различного рода информации. Современный тезис «хочу все знать здесь и сейчас» в данный момент становится все более актуальным.
            </p>

            <p className="modeling__info">
               Проблемы информационных ресурсов и качества их представления, играют определяющую роль в экономике и функционирования экосистем в XXI веке в связи, с чем служба геоинформационных технологий, как в отдельных государствах, так и мире в целом приобрела большое значение,
            </p>

            <p className="modeling__info">
               Гидрогеологические условия являются одним из основных факторов, которые существенно влияют на состояние подземной гидросферы, на оснований знания и проводится  для оценки проектируемых защитных мероприятий от загрязнения, истощения и подтопления территорий будущих или уже построенных зданий и сооружений. Прогноз изменений этих условий, а также оценка современного состояния подземной гидросферы, оценка возможности использования подземных вод для повышения водообеспеченности территории  на основе решения прогнозных задач, прогноз изменения ресурсов подземных вод в связи с возможным строительством гидротехнических сооружений и.т.др. решается с применением современных ГИС-технологий (ArcGIS, HydroGeoAnalyst, ENVI, MapInfo, Erdasimaging), методами математического моделирования (Visual Modflow, GWVistas, Gidpar, Modgidpros и др.) является необходимым элементом любого гидрогеологического, инженерно – геологического и геоэкологического исследования, связанного с расчетами водозаборных сооружений, искусственным формированием подземных вод,  мелиорацией  и  статистической обработкой.
            </p>


            <h2 className="modeling__info modeling__info--bold modeling__info--text">Контроль состояния подземных вод через веб-сайт</h2>

            <div className="modeling__images-box modeling__images-box--around">
               <div className="">
                  <Image className="" src={image29} alt="" width={419} height={208} />
               </div>
               <div className="">
                  <Image className="" src={image30} alt="" width={419} height={208} />
               </div>
            </div>

            <div className="modeling__images-box modeling__images-box--around">
               <div className="">
                  <Image className="" src={image31} alt="" width={419} height={208} />
               </div>
               <div className="">
                  <Image className="" src={image32} alt="" width={419} height={208} />
               </div>
            </div>

            <h2 className="modeling__info modeling__info--bold modeling__info--text">Эффективность от внедрения научно-исследовательских результатов</h2>

            <h2 className="modeling__info  modeling__info--bold modeling__info--text">Расположение устройств автоматизированного измерения уровня и температуры подземных вод в наблюдательных скважинах по регионам РУз.</h2>

            <div className="image33">
               <Image className="" src={image33} alt="" width={1280} height={882} />
            </div>



            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image34} alt="" width={380} height={450} />
               </div>
               <div className="">
                  <Image className="" src={image35} alt="" width={340} height={450} />
               </div>
               <div className="">
                  <Image className="" src={image36} alt="" width={487} height={450} />
               </div>
            </div>

            <div className="modeling__images-box modeling__images-box--margin">
               <div className="">
                  <Image className="" src={image37} alt="" width={274} height={366} />
               </div>
               <div className="">
                  <Image className="" src={image38} alt="" width={368} height={366} />
               </div>
               <div className="">
                  <Image className="" src={image39} alt="" width={253} height={366} />
               </div>
               <div className="">
                  <Image className="" src={image40} alt="" width={264} height={366} />
               </div>
            </div>

            <h2 className="modeling__info  modeling__info--bold modeling__info--margin-small modeling__info--font-size">
               Получены сертификаты на разработанные программные обеспечения
               Агентством интеллектуальной собственности при Министерстве юстиции Республики Узбекистан
               в соответствии с Законом Республики Узбекистан «О правовой охране программ для электронных вычислительных машин и баз данных»
            </h2>


            <div className="modeling__images-box modeling__images-box--margin">
               <div className="">
                  <Image className="" src={image41} alt="" width={570} height={814} />
               </div>
               <div className="">
                  <Image className="" src={image42} alt="" width={570} height={814} />
               </div>
            </div>


            <div className="modeling__images-box">
               <div className="">
                  <Image className="" src={image43} alt="" width={570} height={814} />
               </div>
               <div className="">
                  <Image className="" src={image44} alt="" width={570} height={814} />
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

export default modeling