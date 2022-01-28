import Image from "next/image";

import firstImg from '../../assets/images/education1.jpg'
import secondImg from '../../assets/images/education2.jpg'

function education() {
   return (
      <section className="education">
         <div className="container">
            <div className="education__info-box">
               <h2 className="education__info-box__heading">Образование</h2>

               <p className="education__info-box__info">
                  Каждый квартал, согласно утвержденного плана в институте организованы курсы повышения квалификации <br />
                  специалистов по следующим направлениям:
               </p>

               <p className="education__info-box__info">
                  графические пакеты семейств Corel DRAW и Adobe Photoshop; <br />
                  геоинформационные графические базы данных — MapInfo и ArcGIS 10.3<br />
                  По завершению выдаются дипломы об окончании соответствующих курсов.<br />
               </p>

               <p className="education__info-box__info education__info-box__info--margin">
                  Курсы проходят в специализированных классах, группами до 10 человек в виде теоретических и <br />
                  практических занятий. На каждого учащегося компьютер предоставляется персонально. При проведении <br />
                  курсов используются презентационные материалы, обучающие программы.
               </p>

               <div className="education__img-box">
                  <Image className="education__img-box__img" src={secondImg} alt="education1" width='540' height='360' />
                  <Image className="education__img-box__img" src={firstImg} alt="education2" width='540' height='360' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default education