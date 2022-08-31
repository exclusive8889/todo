import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";
import Task from "../Task/Task";
import { ApiClient } from "../../request/request";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function Category({ data, children }) {
  const [tasks, setTasks] = useState([]);
  const [tasknname, setTaskname] = useState("");
  const [num, setNum] = useState(1);
  useEffect(() => {
    ApiClient.get("/api/tasks")
      .then((res) => {
        setTasks(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [num]);

  let arr = [];
  const taskitem = tasks.map((task) => {
    task.categories.map((tas) => {
      if (tas.id == data.id) {
        arr.push(task.title);
        return tas.id
      }
    });
  });

    // console.log(tasks)
  const handleAddtask = () => {
    // ApiClient.post("/api/tasks", {
    //   title: tasknname,
    //   categoryIds: [data.id],
    // });
    // setTaskname("");
    // setNum((pre) => pre + 1);
  };
  return (
    <div
      className={cx("wrap")}
      onClick={() => {
        // console.log(data.id);
      }}
    >
      <div className={cx("remove-cate")}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={cx("category")}>
        <div className={cx("category-createDay")}>
          <input
            placeholder="add task"
            onChange={(e) => {
              setTaskname(e.target.value);
            }}
          ></input>
          <button onClick={handleAddtask}>Add</button>
        </div>
        <div className={cx("category-name")}>
          <p>{data.name}</p>
        </div>
        <div className={cx("category-task")}>
          {
            // tasks.map((task) => {
            //   task.categories.map((tas) => {
            //       if (tas.id == data.id) {
            //         // console.log(task.title)
            //         return task.title
            //       }
             
            // })
            // })
          }
          {/* <Task/> */}
        </div>
      </div>
    </div>
  );
}

export default Category;
