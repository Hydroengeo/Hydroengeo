import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function HomeNews() {
  const [data, setData] = useState([]);
  const [dat, setDat] = useState([]);

  useEffect(() => {
    fetch("https://hydroengeo.herokuapp.com/introNews")
      .then((res) => res.json())
      .then((data) => {
        setDat(data.data.reverse()[0]),
          setData(data.data.slice(1, 5));
      });
  }, []);

  return (
    <>
      <section className="home-news">
        <div className="container">
          <h1 className="home-news__heading">Новости</h1>
          <div className="border-box"></div>

          <div className="home-news__box">
            {dat && (
              <>
                <div className="home-news__box-img">
                  <Image
                    src={`https://hydroengeo.herokuapp.com/${dat.news_main_img}`}
                    alt={dat.news_heading}
                    loader={() =>
                      `https://hydroengeo.herokuapp.com/${dat.news_main_img}`
                    }
                    width={710}
                    height={400}
                  />
                </div>

                <div className="">
                  <p className="home-news__box-time">{dat.news_data}</p>
                  <span className=""></span>
                  <h2 className="home-news__box-heading">{dat.news_heading}</h2>
                  <p className="home-news__box-title">{dat.news_title}</p>
                </div>
              </>
            )}
          </div>

          <ul className="home-news__list">
            {data.length  &&
              data.map(e => (
                <li className="home-news__item" data-set-id={e.news_id} key={e.news_id}>
                  <div className="home-news__item-img">
                    <Image
                      src={e.news_main_img}
                      loader={() =>
                        `https://hydroengeo.herokuapp.com/${e.news_main_img}`
                      }
                      alt={dat.news_heading}
                      width={300}
                      height={200}
                    />
                  </div>

                  <div className="">
                    <p className="home-news__box-time">{e.news_data}</p>
                    <h3 className="home-news__box-heading">{e.news_heading}</h3>
                  </div>
                </li>
              ))}
          </ul>

          <Link href="/news">
            <a className="home-news__btn">Больше новостей</a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HomeNews;