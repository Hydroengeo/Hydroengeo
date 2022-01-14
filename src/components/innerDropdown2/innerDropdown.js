import Link from "next/link";

const InnerDropdown2 = () => {
  return (
    <>
      <ul className="inner__drop-down">
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">Геоэкология</a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">
              Геоинформационные технологии и моделирование
            </a>
          </Link>
        </li>
        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">
              Мониторинг подземных вод и региональные исследования
            </a>
          </Link>
        </li>

        <li className="inner__drop-down-item">
          <Link href="/">
            <a className="inner__drop-down-link">Геоэколого-химическая лаборатория</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default InnerDropdown2;
