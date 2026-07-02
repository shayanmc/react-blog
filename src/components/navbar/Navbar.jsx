import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className="container">
        <div className={style.header}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Articles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
