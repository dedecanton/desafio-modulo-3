import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

// Types
import { ListItemType } from "../../types/ListItem.type";

// Components
import Header from "./Header";
import InputArea from "./InputArea";
import ListArea from "./ListArea";
import InfoArea from "./InfoArea";

const Todo: React.FC = () => {
  const authCtx = useContext(AuthContext);
  const logout = authCtx.logout;

  const [taskList, setTaskList] = useState<ListItemType[]>([]);

  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/auth", { replace: true });
  };
  useEffect(() => {
    const dataLocalStorage = localStorage.getItem("listTask");
    if (dataLocalStorage !== null) {
      const data = JSON.parse(dataLocalStorage);
      setTaskList(data);
    }
  }, []);

  // LocalStorage Management
  const updateLocalStorage = () => {
    localStorage.setItem("listTask", JSON.stringify(taskList));
  };
  useEffect(updateLocalStorage, [taskList]);

  // Handlers
  const handleAddTask = (text: string) => {
    const newTask = {
      name: text,
      done: false,
      id: Math.random().toString(),
    };

    setTaskList((prevTasks) => [...prevTasks, newTask]);
  };

  const findIndexById = (array: ListItemType[], id: string) =>
    array.findIndex((item) => item.id === id);

  const handleChangeTask = (id: string, done: boolean) => {
    const newList = [...taskList];
    const index = findIndexById(newList, id);
    newList[index].done = done;
    // newList[findIndexById(newList, id)].done = done
    setTaskList(newList);
  };

  const handleRemoveTask = (id: string) => {
    const newList = [...taskList];
    const index = findIndexById(newList, id);
    newList.splice(index, 1);
    setTaskList(newList);
  };


  return (
    <>
      <h1>Todo</h1>
      <button onClick={logoutHandler}>Logout</button>
      <Header />
      <InputArea onAddTask={handleAddTask} />
      <InfoArea taskList={taskList} />
      <ListArea
        onTaskRemove={handleRemoveTask}
        onTaskChange={handleChangeTask}
        taskList={taskList}
      />
    </>
  );
};

export default Todo;
