import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

//images
import ScrollTop from "../../assets/images/ScrollTop.svg";
import institute from "../../assets/images/Institute.png";
import Employees from "../../assets/images/team-line.svg";
import PhDstudents from "../../assets/images/briefcase-5-line.svg";
import Candidates from "../../assets/images/contacts-line.svg";
import PhDs from "../../assets/images/spy-line.svg";

function homeAbout() {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch("https://hydroengeo.herokuapp.com/staff")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setdata(data.data[0]);
        }
      });
  }, []);

  return (
    <>
      <section className="home-about">
        <div className="container">
          <h1 className="home-about__heading">Об Институте</h1>
          <div className="border-box"></div>

          <div className="home-about__box">
            <div className="institute-img">
              <Image
                src={institute}
                alt="About the Institute"
                width={1000}
                height={710}
              />
            </div>
            <div className="">
              <p className="home-about__institute-info">
                <strong>Разрабатывает: </strong>
                Комплект постоянно действующих запросов по интересующей
                заказчиков тематике.
              </p>
              <p className="home-about__institute-info">
                <strong>Выполняет: </strong>
                Информационное обеспечение по постоянно действующим запросам;
                разовые поиски, целевые запросы; заказы первоисточников по МБА,
                переводы публикаций с иностранных языков, ксерокопирование
                научно-технической литературы, информационные поиски НТД в
                области новой техники и технологии, заказы на приобретение
                технической документации.
              </p>
              <p className="home-about__institute-info">
                <strong>Располагает: </strong>
                Справочно-информационным фондом глубиной 12-15 лет по
                направлениям гидрогеологии, инженерной геологии, гидрогеофизики
                и др., картотекой НТД, ИК, переводов, адресов.
              </p>
              <p className="home-about__institute-info">
                <strong>Предлагает: </strong>
                Комплексное информационное обеспечение по вопросам
                гидрогеологии, инженерной геологии, гидрогеофизики и др.
              </p>
            </div>
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

      <section className="home-about__list--section">
        <div className="container">
          <ul className="home-about__list">
            <li className="home-about__item">
              <div className="home-about__item__box">
                <Image src={Employees} alt="Employees" width={64} height={64} />
                <span className="home-about__span">{data.staff_name}</span>
              </div>

              <p className="home-about__item__info">Сотрудников</p>
            </li>
            <li className="home-about__item">
              <div className="home-about__item__box">
                <Image
                  src={PhDstudents}
                  alt="PhD students"
                  width={64}
                  height={64}
                />
                <span className="home-about__span">{data.doctor_name}</span>
              </div>

              <p className="home-about__item__info">Докторанты</p>
            </li>
            <li className="home-about__item">
              <div className="home-about__item__box">
                <Image
                  src={Candidates}
                  alt="Candidates of Sciences"
                  width={64}
                  height={64}
                />
                <span className="home-about__span">{data.redoctors_name}</span>
              </div>

              <p className="home-about__item__info">Кандидатов наук</p>
            </li>
            <li className="home-about__item">
              <div className="home-about__item__box">
                <Image src={PhDs} alt="PhDs" width={64} height={64} />
                <span className="home-about__span">{data.scientist_name}</span>
              </div>

              <p className="home-about__item__info">Доктора наук</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default homeAbout;
