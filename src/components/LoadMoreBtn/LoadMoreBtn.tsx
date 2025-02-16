import { Gallery } from "../../components/App.types";
import css from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  handleLoadMore: () => void;
};

const LoadMoreBtn = ({ handleLoadMore }: LoadMoreBtnProps) => {
  return (
    <div>
      <button
        className={css.btn}
        onClick={() => {
          handleLoadMore();
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
