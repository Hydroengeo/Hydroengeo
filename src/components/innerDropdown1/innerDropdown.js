import Link from "next/link";

const InnerDropdown1 = () => {
  return (
    <>
      <ul className="inner__drop-down">
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">Гидроминеральные ресурсы</a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">Мелиоративная гидрогеология и дренаж</a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">Ресурсы и запасы подземных вод</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InnerDropdown1;
