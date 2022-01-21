import Card from "../card/card";

// Images
import Minchenko from "../../assets/images/minchenko.jpg";

const Overture = () => {
  return (
    <>
      <section id="overture">
        <div className="small-container">
          <h1 className="heading">
            ЛАБОРАТОРИЯ ИНЖЕНЕРНОЙ ГЕОДИНАМИКИ И ДИСТАНЦИОННОГО ЗОНДИРОВАНИЯ ЗЕМЛИ
          </h1>

          <Card
            avatar={Minchenko}
            name={"Минченко Вячаслав Дмитриевич"}
            date={"С 28 марта 1988 года"}
            position={"Заведующий лабораторией"}
          />
        </div>
      </section>
    </>
  );
};

export default Overture;
