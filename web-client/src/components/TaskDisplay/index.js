import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../store/tasks';


const TaskDisplay = function ()
{

    let dispatch = useDispatch();
    let tasks = useSelector(state => state.tasks);

    console.log(tasks);
    useEffect( () =>{
    const loadTasks = async () => {

    
    await dispatch(getTasks());
    };
    loadTasks();
} ,[]);


    return (<>
        {tasks.map(task => {
            console.log(task);
            return (<div key={task._id}>
            <h1>hello{task.task_name}</h1>
            <p>{task.task_description}</p>
            </div>)
        })}
    </>)

}

export default TaskDisplay;
