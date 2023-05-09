import { Rings } from "react-loader-spinner";

import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader_wrapp}>
      <Rings
        height="200"
        width="200"
        color="#EBD8FF"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default Loader;
