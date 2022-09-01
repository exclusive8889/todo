import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";
import Task from "../Task/Task";
import { ApiClient } from "../../request/request";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function Category({ data, children }) {
  const [tasknname, setTaskname] = useState("");
  const [tasks, setTasks] = useState([]);
  const [render,setRender]=useState(false)
  const [btnupdate,setBtnupdate]=useState(false)
  const [getidtask,setGetidtask]=useState('')
  useEffect(() => {
    ApiClient.get("/api/tasks")
      .then((res) => {
        setTasks(res.data.items);
      })
      .catch((err) => console.log(err));
  }, [render]);
  const handleAddtask = async() => {
    await ApiClient.post("/api/tasks", {
      title: tasknname,
      categoryIds: [data.id],
    });
    setTaskname("");
    setRender(!render)
  };
  const removeTask=async(idtask)=>{
    await ApiClient.delete(`/api/tasks/${idtask}`)
    setRender(!render)
  }
  const completed=async(idcate,title,state,idtask)=>{
    // console.log(idcate,title,state,idtask)
    await ApiClient.patch(`/api/tasks/${idtask}`,{
      title: title,
      categoryIds: [
        idcate
      ],
      status: state
    })
    setRender(!render)
  }
  const updateTask=(title,idcate,idtask)=>{
    setGetidtask(idtask)
    setTaskname(title)
    setBtnupdate(!btnupdate)
    if(btnupdate) setTaskname('')
    
  }
  const handleUpdateTask=async(title)=>{
    // console.log(data.id,getidtask)
    await ApiClient.patch(`/api/tasks/${getidtask}`,{
      title: tasknname,
      categoryIds: [
        data.id
      ],
      status: 'IN_PROGRESS'
    })
    setRender(!render)
    setTaskname('')
    setBtnupdate(!btnupdate)
  }
  return (
    <div
      className={cx("wrap")}
      // onClick={() => {
      //   console.log(tasks)
      // }}
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
            value={tasknname}
          ></input>
          {
            (!btnupdate)? <button onClick={handleAddtask}>Add</button> :<button onClick={handleUpdateTask}>update</button>
          }
        </div>
        <div className={cx("category-name")}>
          <p>{data.name}</p>
          <button className={cx("category-name--update")}><FontAwesomeIcon icon={faPen} /></button>
        </div>
        <div className={cx("category-task")}>
          {
          tasks.map((task) =>
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
