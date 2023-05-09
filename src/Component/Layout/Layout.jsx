import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Loader from "../Loader/Loader";
import { styled } from "goober";

const StyledLink = styled(NavLink)`
  &.active {
    color: yellow;
  }
`;

function Layout() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <StyledLink className={css.nav_link} to="/">
            Home
          </StyledLink>
          <StyledLink className={css.nav_link} to="/tweets">
            Tweets
          </StyledLink>
        </nav>
      </header>

      <main className={css.main}>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <Suspense fallback={<Loader></Loader>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;
