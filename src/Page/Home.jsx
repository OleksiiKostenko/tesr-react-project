import { useEffect } from "react";
import css from "./Page.module.css";

function Home() {
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={css.section}>
      <div className={css.wrapp_title}>
        <h1 className={css.title}>All your favorite Tweets in one place</h1>
      </div>
    </section>
  );
}

export default Home;
