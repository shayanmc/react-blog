import Article from "../../components/articles/Article";
import Navbar from "../../components/navbar/Navbar";
import style from "./home.module.css";
import ArticleData from './../../data/data'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className={style.homepageTitle}>article</h1>

        <div className={style.articleWrapper} >
          {ArticleData.map((article) => {
            return <Article article={article} key={article.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
