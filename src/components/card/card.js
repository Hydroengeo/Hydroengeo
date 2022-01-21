import Image from "next/image";

const card = ({ avatar, name, date, position }) => {
  return (
    <>
      {/* <div className="card">
        <Image src={avatar} width={240} height={320} />
      </div> */}

      <div className="workers workers--padding">
        <div className="workers__card">
          <div className="avatar">
            <Image src={avatar} width="240" height="320" alt={name} />
          </div>

          <table className="workers__info">
            <tbody>
              <tr className="workers__info-row">
                <td>
                  <p>Ф.И.О.</p>
                </td>
                <td>{name}</td>
              </tr>

              <tr className="workers__info-row">
                <td>На должности:</td>
                <td>{date} </td>
              </tr>
              <tr className="workers__info-row">
                <td>Должность:</td>
                <td>{position} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default card;
