import Article from "../../components/articles/Article";
import Navbar from "../../components/navbar/Navbar";
import style from './home.module.css'
const ArticleData = [
  {
    id: 1,
    title: "sample1",
    content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.
      `,
    date: "01/02/2003",
    author: "moein",
  },
  {
    id: 2,
    title: "sample2",
    content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.
      `,
    date: "01/02/2003",
    author: "farhad",
  },
  {
    id: 3,
    title: "sample3",
    content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.
      `,
    date: "01/02/2003",
    author: "asd",
  },
  {
    id: 4,
    title: "sample4",
    content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.
      `,
    date: "01/02/2003",
    author: "reza",
  },
  {
    id: 5,
    title: "sample5",
    content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.
      `,
    date: "01/02/2003",
    author: "alii",
  },
  {
    id : 6,
    title: "sample6",
    content: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reiciendis quo ipsam unde ullam, eos quidem? Eos repudiandae exercitationem a facilis, eveniet doloribus atque laborum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus id laborum deleniti eos neque, ea tempora nesciunt, perferendis officia eligendi. Dicta eum mollitia id porro culpa laudantium magnam voluptate, corporis in explicabo, quaerat quidem.
      `,
    date: "01/02/2003",
    author: "shayan",
  },
];
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className={style.homepageTitle}>article</h1>

        <div>
            <Article />
        </div>
      </div>
    </div>
  );
}
