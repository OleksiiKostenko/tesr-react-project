import { useEffect } from "react";
import { useState } from "react";
import { getArrayLangth, getUsers } from "../../service/getQuery";
import User from "../User/User";
import css from "./UserCard.module.css";

function UserCard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [arrayLangth, setArrayLangth] = useState([]);

  useEffect(() => {
    getArrayLangth().then((data) => setArrayLangth(data));
  }, []);

  useEffect(() => {
    getUsers(page).then((data) => setUsers((prev) => [...prev, ...data]));
  }, [page]);

  const handelClick = () => {
    setPage((prevPage) => prevPage + 1);
    setTimeout(() => {
      window.scrollBy({
        top: 500,
        behavior: "smooth",
      });
    }, 300);
  };
  return (
    <>
      {users?.map(({ followers, id, avatar, tweets, following }) => (
        <div key={id} className={css.card}>
          <div className={css.bgi_wrapp}>
            <div className={css.logo_wrapp}></div>
            <div className={css.border_bottom}></div>
          </div>
          <div className={css.user_wrapp}>
            <User
              followers={followers}
              avatar={avatar}
              following={following}
              tweets={tweets}
              id={id}
            ></User>
          </div>
        </div>
      ))}
      {users.length !== arrayLangth.length && (
        <button className={css.btn} type="button" onClick={handelClick}>
          Load More
        </button>
      )}
    </>
  );
}

export default UserCard;
