import { useEffect } from "react";
import { getAllUsers, getUsersFollow } from "../../service/getQuery";
import User from "../User/User";
import css from "./UserCard.module.css";
import { useInputContex } from "../Hooks/Contex";

function UserCard() {
  const { users, setUsers, query, page, setPage, arrayLangth } =
    useInputContex();

  useEffect(() => {
    if (query === "all") {
      getAllUsers(page).then((data) => setUsers((prev) => [...prev, ...data]));
    }
    getUsersFollow(page, query).then((data) =>
      setUsers((prev) => [...prev, ...data])
    );
  }, [page, query]);
  console.log("arrayLangth", arrayLangth);
  const handelClick = () => {
    setPage((prevPage) => prevPage + 1);
    setTimeout(() => {
      window.scrollBy({
        top: 500,
        behavior: "smooth",
      });
    }, 300);
    console.log("first", users.length);
    console.log("first", arrayLangth.length);
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
