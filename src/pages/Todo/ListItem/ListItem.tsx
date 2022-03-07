/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import * as C from "./ListItem.style";
import React from "react";
import { ListItemType } from "../../../types/ListItem.type";
import Button from "../UI/Button";

type Props = {
  item: ListItemType;
  onChange: (id: string, done: boolean) => void;
  onRemove: (id: string) => void;
};

const ListItem = ({ item, onChange, onRemove }: Props) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    const id = item.id;
    onChange(id, value);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <C.Container>
      <input
        type="checkbox"
        checked={item.done}
        name="isChecked"
        id={item.id}
        onChange={handleCheck}
      />
      <label className={item.done ? 'checked' : ''} htmlFor={item.id}>{item.name}</label>
      <Button text="Remover da lista" onClick={handleRemove} />
    </C.Container>
  );
};

export default ListItem;
