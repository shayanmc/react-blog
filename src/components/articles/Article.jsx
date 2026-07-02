import style from "./article.module.css";

export default function Article() {
  return (
    <div>
      <div className={style.articleCard}>
        <img src="./../../../public/image.jpg" alt="asd" />

        <div className={style.articleContent}>
          <h1>sample 1</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            dolorum! Doloremque, quia.
          </p>
        </div>
      </div>
    </div>
  );
}
