import Link from "next/link";

const InnerDropdown3 = () => {
  return (
    <>
      <ul className="inner__drop-down">
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">Маркетинг и патентоведение</a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">
              Отдел выпуска научно-технической продукции
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">Отдел ИКТ</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InnerDropdown3;
