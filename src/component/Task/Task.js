import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ApiClient } from "../../request/request";
import styles from "./Task.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
const cx = classNames.bind(styles);
function Task({ title, idcate, removeTask, status, completed, idtask,updateTask }) {
  // const [complete,setComplete]=useState(false)
  // console.log(complete)
  return (
    <div
      className={cx("wrap")}
      style={{ textDecoration: status != "IN_PROGRESS" ? "line-through" : "" }}
      // onClick={()=>{
      //     console.log('idtask',idtask)
      // }}
    >
      <div className={cx("task-info")}>
        <input
          type="checkbox"
          onChange={() => {
            console.log("t");
            if (status == "IN_PROGRESS") {
              completed(idcate, title, "Finish", idtask);
            } else if (status == "finish") {
              completed(idcate, title, "IN_PROGRESS", idtask);
            }
          }}
        ></input>
        <p
          className={cx("task-info")}
        >
          {title}
        </p>
      </div>
      <div className={cx(status)}>
        <span
        onClick={() => {
            // console.log('t')
            updateTask(title,idcate,idtask);
          }}
        >
          <FontAwesomeIcon icon={faPen} />
        </span>
        <span onClick={() => removeTask(idtask)}>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </div>
  );
}

export default Task;
