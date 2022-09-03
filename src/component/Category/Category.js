import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";
import Task from "../Task/Task";
import { ApiClient } from "../../request/request";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../stores/slice/taskSlice";
import { taskSelector } from "../../stores/selector";
import { useState, useEffect } from "react";
import { getTasks } from "../../stores/slice/taskSlice";
const cx = classNames.bind(styles);

function Category({ data, children }) {
  const [tasknname, setTaskname] = useState("");
  // const [tasks, setTasks] = useState([]);
  const [render, setRender] = useState(false);
  const [btnupdate, setBtnupdate] = useState(false);
  const [getidtask, setGetidtask] = useState("");
  const [updateCate, setUpdatecate] = useState(false);
  const [textCate, setTextcate] = useState(data.name);
  const dispatch = useDispatch();
  const [catesss,setcate]=useState()
 
  const [dataa,setDataa]=useState()
  const tasks = useSelector(taskSelector);
  
  useEffect(()=>{
    tasks && setDataa(tasks)
  },[tasks])
  // console.log(tasks)
  
  const handleAddtask = async() => {
    const dis=
    await dispatch(
       addTask({
        title: tasknname,
        categoryIds: [data.id]
      })
    )
    console.log(dis)
    setTaskname("");
  };
  const handleChangeInput = (e) => {
    setTaskname(e.target.value)
  }
  const removeTask = async (idtask) => {
    await ApiClient.delete(`/api/tasks/${idtask}`);
    setRender(!render);
  };
  const completed = async (idcate, title, state, idtask) => {
    await ApiClient.patch(`/api/tasks/${idtask}`, {
      title: title,
      categoryIds: [idcate],
      status: state,
    });
    setRender(!render);
  };
  const updateTask = (title, idcate, idtask) => {
    setGetidtask(idtask);
    setTaskname(title);
    setBtnupdate(!btnupdate);
    if (btnupdate) setTaskname("");
  };
  const handleUpdateTask = async (title) => {
    await ApiClient.patch(`/api/tasks/${getidtask}`, {
      title: tasknname,
      categoryIds: [data.id],
      status: "IN_PROGRESS",
    });
    setRender(!render);
    setTaskname("");
    setBtnupdate(!btnupdate);
  };
  return (
    
    <div className={cx("wrap")}>
      <div className={cx("remove-cate")}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className={cx("category")}>
        <div className={cx("category-createDay")}>
          <input
            placeholder="add task"
            onChange={handleChangeInput}
            value={tasknname}
          ></input>
          {!btnupdate ? (
            <button onClick={handleAddtask}>Add</button>
          ) : (
            <button onClick={handleUpdateTask}>update</button>
          )}
        </div>
        <div className={cx("category-name")}>
          {!updateCate ? (
            <>
              <p>{data.name}</p>
              <button className={cx("category-name--update")}>
                <FontAwesomeIcon
                  icon={faPen}
                  onClick={() => {
                    setUpdatecate(!updateCate);
                  }}
                />
              </button>
            </>
          ) : (
            <>
              <input
                className={cx("category-name--input")}
                // onChange={(e) => {
                //   setTextcate(e.target.value);
                // }}
                value={data.name}
              >
                {}
              </input>
              <button
                className={cx("category-name--update")}
                onClick={async () => {
                  // await ApiClient.patch(`api/categories/${data.id}`,{
                  //   name: textCate
                  // })
                  setUpdatecate(!updateCate);
                }}
              >
                save
              </button>
            </>
          )}
        </div>
        <div className={cx("category-task")}>
          {
          tasks?.map((task) =>
            task.categories.map(
              (idcate, index) =>
                idcate.id == data.id && (
                  <Task
                    key={index}
                    idcate={data.id}
                    title={task.title}
                    idtask={task.id}
                    removeTask={removeTask}
                    status={task.status}
                    completed={completed}
                    updateTask={updateTask}
                  />
                )
            )
          )
          }
        </div>
      </div>
    </div>
  );
}

export default Category;
