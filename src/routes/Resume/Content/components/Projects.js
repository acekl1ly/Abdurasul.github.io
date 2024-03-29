// import { useTranslation } from "react-i18next";

import "./Projects.scss";

export default function Projects() {
  // const { t } = useTranslation();

  return (
    <>
      <ul className="projects-container">
        <li>
          <a href="/online_shop" target="_blank" rel="noreferrer">Online Shop</a>
          <span> - ReactJs, TypeScript, Bootstrap 5, AxiosJs</span>
        </li>
        <li>
          <a href="/top_obmennik" target="_blank" rel="noreferrer">Top obmennik</a>
          <span> - HTML, CSS, JS, Sass</span>
        </li>
        <li>
          <a href="/abdurasul_dev" target="_blank" rel="noreferrer">Abdurasul.dev(v.1)</a>
          <span> - HTML, Sass, JS</span>
        </li>
        <li>
          <a href="https://puremilky.uz/" target="_blank" rel="noreferrer">PureMilky.uz</a>
          <span> - HTML, CSS, JS</span>
        </li>
        <li>
          <a href="https://gesys.uz/" target="_blank" rel="noreferrer">Gesys.uz</a>
          <span> - HTML, CSS, Bootstrap 4</span>
        </li>
      </ul>
    </>
  );
}
