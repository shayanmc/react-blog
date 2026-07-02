import style from "./article.module.css";

export default function Article({article}) {
  return (
    
      <div className={style.articleCard}>
        <img src="./../../../public/image.jpg" alt="asd" />

        <div className={style.articleContent}>
          <h1>{article.title}</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
          </p>
        </div>
      </div>
  );
}
