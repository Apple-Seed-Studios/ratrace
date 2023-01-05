import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { convertTimeReadable } from "../../hooks/convertTime";
import showCompletedHook from '../../hooks/showCompleted';
import { getTasks, deleteTask, updateTask } from "../../store/tasks";
import { setActiveTask } from "../../store/activeTask";
import {
  Typography,
  IconButton,
  Fab,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
// import ClearIcon from "@mui/icons-material/Clear";
import DeleteButton from "./DeleteButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ToggleCompleted from "./ToggleCompleted";
import EditTaskForm from "./EditTaskForm"
import "./TaskDisplay.scss";

const TaskDisplay = function () {
  let dispatch = useDispatch();
  let tasks = useSelector((state) => state.tasks);
  let activeTask = useSelector((state) => state.activeTask);
  let [modalOn, setModalOn] = useState(false);
  let [currentEdit, setCurrentEdit] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  let [tasksToDisplay, setTasksToDisplay] = useState(tasks);

  useEffect(() => {
    const loadTasks = async () => {
      await dispatch(getTasks());
    };
    loadTasks();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    let filteredTasks = showCompletedHook(showCompleted, tasks);
    setTasksToDisplay(filteredTasks)
  }, [showCompleted, tasks])

  let completeTask = (event, task) => {
    event.preventDefault();
    task.completed = !task.completed;
    dispatch(updateTask(task));
  };



  let toggleForm = () => {
    setModalOn(!modalOn);
  };

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const notCompletedTextStyle = {};
  const completedTextStyle = {
    textDecoration: "line-through",
    color: "grey",
  };

  return (
    <div className="taskdisplay">
      <ToggleCompleted
        handleShowCompleted={handleShowCompleted}
        showCompleted={showCompleted}
      />
          <List>
            {tasksToDisplay
              .map((task) => {
                return (
                  <ListItem
                    divider
                    disablePadding
                    secondaryAction={
                      // <IconButton onClick={() => dispatch(deleteTask(task))}>
                      //   <ClearIcon />
                      // </IconButton>
                      <DeleteButton deleteFunction={() => dispatch(deleteTask(task))}></DeleteButton>
                      }
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <Fab
                          size="small"
                          onClick={() => dispatch(setActiveTask(task))}
                        >
                          <PlayArrowIcon />
                        </Fab>
                        <IconButton onClick={(event) => completeTask(event, task)}>
                          <CheckIcon />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography
                             variant='h6'
                             sx={{ display: 'inline', }}
                             style={task.completed ? completedTextStyle : notCompletedTextStyle}
                             >
                              {task.task_name + ' '}
                            </Typography>
                            {task.tag.map(tag => {
                              return (
                                <Typography
                                 variant="caption" 
                                 sx={{ display: 'inline', 
                                 fontStyle: 'italic' }}
                                 style={task.completed ? completedTextStyle : notCompletedTextStyle}
                                 >
                                  #{tag} {' '}
                                </Typography>
                              )
                            })}
                          </React.Fragment>
                        }
                        secondary={task.task_description}
                        secondaryTypographyProps={{
                          style: task.completed ? completedTextStyle : notCompletedTextStyle
                        }}
                        onClick={() => {
                          setCurrentEdit(task);
                          setModalOn(true);
                        }}
                      ></ListItemText>
                      <Typography sx={{ marginRight: 2 }} variant="subtitle1">
                        {activeTask && task._id === activeTask._id
                          ? convertTimeReadable(activeTask.tracked_time)
                            .minutesSeconds
                          : convertTimeReadable(task.tracked_time)
                            .minutesSeconds}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
      <EditTaskForm
      modalOn={modalOn}
      toggleForm={toggleForm}
      currentEdit={currentEdit}
      />
    </div>
  );
};

export default TaskDisplay;
