import { Link } from "react-router-dom";
import UserCard from "../Component/UserCard/UserCard";
import css from "./Page.module.css";

import { useEffect, useState } from "react";
import Loader from "../Component/Loader/Loader";
import Filter from "../Component/Filter/Filter";

function Tweets() {
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setFirstRender(true);
    }, 700);
  }, []);

  return !firstRender ? (
    <Loader></Loader>
  ) : (
    <section className={css.section}>
      <Filter />
      <div className={css.container}>
        <UserCard />
        <Link className={css.btn} to="/">
          Home
        </Link>
      </div>
    </section>
  );
}

export default Tweets;
