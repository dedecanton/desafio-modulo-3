/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react';
import * as C from "./ListArea.style";
import ListItem from "../ListItem";

// types
import { ListItemType } from "../../../types/ListItem.type";

type Props = {
  taskList: ListItemType[];
  onTaskChange: (id: string, done: boolean) => void;
  onTaskRemove: (id: string) => void;
};

const ListArea = ({ taskList, onTaskChange, onTaskRemove }: Props) => {
  const onChange = (id: string, done: boolean) => {
    onTaskChange(id, done);
  };

  const onRemove = (id: string) => {
    onTaskRemove(id);
  };

  return (
    <C.Container>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <ListItem
            onRemove={onRemove}
            onChange={onChange}
            key={index}
            item={task}
          />
        ))
      ) : (
        <h2>Nenhuma tarefa cadastrada</h2>
      )}
    </C.Container>
  );
};

export default ListArea;
