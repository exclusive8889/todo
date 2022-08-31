import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Category.module.scss";
import classNames from "classnames/bind";
import Task from "../Task/Task";
import { ApiClient } from "../../request/request";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function Category({ data, children }) {
  const [tasknname, setTaskname] = useState("");
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    ApiClient.get("/api/tasks")
      .then((res) => {
        setTasks(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(tasks)
// cach1
  // const itemtask= tasks.map((task) => (
  //   task.categories.map((idcate,index)=>(
  //     idcate.id==data.id ? <Task title={task.title}/>:null
  //   )
  // )))
  // cach2
    // let arr = [];
  // const itemtask= tasks.map((task) => {
  //   task.categories.map((idcate,index)=>{
  //    if(idcate.id==data.id){
  //      console.log(task.title)
  //      return <Task title={task.title}/>
  //     // arr.push(task.title)
  //    }
  //   })
     
  //  })
  //  console.log(arr)
    // console.log(arr)
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
        console.log(tasks)
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
            //   task.categories.map((idcate,index)=>{
            //    if(idcate.id==data.id){
            //      console.log(task.title)
            //     //  return <Task title={task.title}/>
            //     // arr.push(task.title)
            //    }
            //   })
               
            //  })
            tasks.map((task) => (
              task.categories.map((idcate,index)=>(
                idcate.id==data.id ? <Task title={task.title}/>:null
              )
            )))

          //  arr.map((task)=>(
          //   <Task title={task}/>
          //  ))
          }
          {/* <Task/> */}
          
        </div>
      </div>
    </div>
  );
}

export default Category;
