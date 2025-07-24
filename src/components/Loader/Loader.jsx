import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.wrapper}>
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
}

export default Loader;
