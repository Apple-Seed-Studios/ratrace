let showCompletedHook = (showCompleted, tasks) => {
  if(!showCompleted){
    let filteredTasks = tasks.filter(task => task.completed === false);
    console.log(filteredTasks);
   return filteredTasks
  }
  else {
    console.log(tasks)
    return tasks
  }
}

export default showCompletedHook;