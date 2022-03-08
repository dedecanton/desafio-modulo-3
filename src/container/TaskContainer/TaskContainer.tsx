/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable  react-hooks/exhaustive-deps */

// import * as React from 'react';
import { useEffect, useState } from "react";

// types
import { ListItemType } from "../../types/ListItem.type";

import useApi from "../../services/useApi";


// async function updateTasks({tasks}:any){
//     const response = await fetch('https://62224954666291106a22d82f.mockapi.io/todo', {
//         method: 'POST',
//         body: JSON.stringify(tasks),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
//       console.log(data);
// }

const TaskContainer = (): any => {
  const { data, deleteData, fetchData } = useApi();

  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    setTasks(data);
  }, [data]);


  // Handlers
  const handleAddTask = (text: string) => {
    const newTask = {
      name: text,
      done: false,
      id: Math.random().toString(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    // updateTasks(tasks)
  };

  const findIndexById = (array: ListItemType[], id: string) =>
    array.findIndex((item) => item.id === id);

  const handleChangeTask = (id: string, done: boolean) => {
    const newList = [...tasks];
    const index = findIndexById(newList, id);
    newList[index].done = done;
    // newList[findIndexById(newList, id)].done = done
    setTasks(newList);
    // updateTasks(tasks)
  };

  const handleRemoveTask = (id: string) => {
    deleteData(id)
    fetchData()
};

  return { tasks, handleAddTask, handleChangeTask, handleRemoveTask };
};

export default TaskContainer;
