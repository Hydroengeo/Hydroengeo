import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import "swiper/css";

import ScrollTop from "../../assets/images/ScrollTop.svg";

function News() {
  const [data, setData] = useState([]);
  const [dat, setDat] = useState([]);

  useEffect(() => {
    fetch("https://hydroengeo.herokuapp.com/introNews")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.reverse()), setDat(data.data.slice(0, 5));
      });
  }, []);

  return (
    <section className="news">
      <div className="container">
        <div className="">
          <Swiper
            className="news__slider"
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {dat &&
              dat.map((e) => (
                <SwiperSlide className="news__slider__item" key={e.news_id}>
                  <div className="news__slider__item__img">
                    <Image
                      src={`https://hydroengeo.herokuapp.com/${e.news_main_img}`}
                      alt={e.news_heading}
                      width="1100"
                      height="700"
                      loader={() =>
                        `https://hydroengeo.herokuapp.com/${e.news_main_img}`
                      }
                    />

                    <h2 className="news__slider__item__heading">
                      {e.news_heading}
                    </h2>
                  </div>{" "}
                  <p className="news__slider__item__title">{e.news_title}</p>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="controllers">
            <button className="controllers-btn prev-btn" disabled>
              <Image src={ScrollTop} alt="icon prev" width="64" height="64" />
            </button>
            <button className="controllers-btn next-btn">
              <Image src={ScrollTop} alt="icon next" width="64" height="64" />
            </button>
          </div>
        </div>

        <div className="news__border"></div>

        <ul className="news__list">
          {data &&
            data.map((e) => (
              <li
                className="news__item"
                data-set-id={e.news_id}
                key={e.news_id}
              >
                <div className="news__item-img">
                  <Image
                    src={  `https://hydroengeo.herokuapp.com/${e.news_main_img}`}
                    loader={() =>
                      `https://hydroengeo.herokuapp.com/${e.news_main_img}`
                    }
                    alt={e.news_heading}
                    width={600}
                    height={400}
                  />
                </div>

                <div className="">
                  <p className="news__box-time">{e.news_data}</p>
                  <h3 className="news__box-heading">{e.news_heading}</h3>
                  <p className="news__box-title">{e.news_title}</p>
                </div>
              </li>
            ))}
        </ul>

        <button className="news__btn" type="button">Загрузить еще</button>

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

export default News;
