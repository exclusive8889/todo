import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

import { ApiClient } from "../../request/request";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../stores/slice/authSlice";
import { useEffect } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    ApiClient.get(`/api/users/${localStorage.getItem("id")}`).then((res) => {
      dispatch(loginSuccess(res.data));
    });
  }, []);
  const user = useSelector((state) => state.auth.login.currenUser);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrap-search")}>
        <div className={cx("search")}>
          <select className={cx("search-select", "search--height")}>
            <option value="volvo">All</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <input
            placeholder="Search task"
            className={cx("search-input", "search--height")}
          ></input>
          <button className={cx("search-btn", "search--height")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx("user")}>
          <FontAwesomeIcon icon={faUser} />
          <p>{user?.username}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
