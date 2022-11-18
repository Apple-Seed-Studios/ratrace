import { useSelector } from 'react-redux';


const TaskDisplay = function (){

    let tasks = useSelector(state => state.tasks);

    return (<>
        {tasks.map(task => {
            return (<>
            <h1>{task.task_name}</h1>
            <p>{task.task_description}</p>
            </>)
        })}
    </>)

}

export default TaskDisplay;