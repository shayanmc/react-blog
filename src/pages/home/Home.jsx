import Navbar from "../../components/navbar/Navbar";
import style from './home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className={style.homepageTitle}>article</h1>
      </div>
    </div>
  );
}
