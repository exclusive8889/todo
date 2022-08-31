import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ApiClient } from '../../request/request';
import styles from'./Task.module.scss'
import classNames from 'classnames/bind';
const cx=classNames.bind(styles)
function Task({data}) {
    const handleRemoveTask=()=>{
        console.log()
        ApiClient.delete(`/api/tasks/${data.id}`,)
    }
    return ( 
        <div className={cx('wrap')}>
            <div className={cx('task-info')}>
                <input type='checkbox'/>
                <p>{data}</p>
            </div>
            <div className={cx('task-option')}>
                <span><FontAwesomeIcon icon={faPen}/></span>
                <span
                onClick={handleRemoveTask}
                ><FontAwesomeIcon icon={faTrash}/></span>
            </div>
        </div>
    );
}

export default Task;