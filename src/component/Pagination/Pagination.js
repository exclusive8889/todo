import styles from "./Pagination.module.scss";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Pagination() {
  const pages = [];
  for(let i=1 ; i<=totalPage; i++){
      pages.push(i);
  }
  const listItems = pages.map((page) =>
  <li
    className={cx("page-item")}
    onClick={() => {
      setCurrentPage(page);
    }}
  >
    <a className={cx("page-link")}>{page}</a>
 </li>
  );
    return ( 
      <div className={cx("pagi")}>
      <ul className={cx("pagination")}>
        {currentPage > 1 && (
          <li className={cx("page-pre")}>
            <button className={cx("page-link")} disabled={currentPage <= 1}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </li>
        )}
        {
          listItems
        }
        {currentPage < totalPage && (
          <li className={cx("page-next")}>
            <a className={cx("page-link")}>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </li>
        )}
      </ul>
    </div>
     );
}

export default Pagination;