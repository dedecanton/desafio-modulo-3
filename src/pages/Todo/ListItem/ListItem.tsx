/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import React from "react";
import { ListItemType } from "../../../types/ListItem.type";
// import Button from "../UI/Button";

import Button from "../../../components/Button";
import Container from "../../../components/Container";

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

  const addStyleButton = `
    width:100%;
    padding: .5rem 1rem;
    margin-top: .5rem;

    @media (min-width:980px){
        width: initial;
        position: absolute;
        right:2%;
        margin-top: 0;
    }
}
  `;

  const addStyleContainer = `
  margin: 1rem auto;
  max-width: 900px;
  width: 95%;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(0,0,0,.5);
  border-radius: .5rem;
  flex-direction: column;
  justify-content:initial;
  position: relative;
  text-align:center;
  input{
    width:20px;
    height:20px;
    margin-left: 0;
  }

  label{
    margin: .5rem auto;
    text-align: center;
    word-break: break-word;
  }

  label.checked{
    text-decoration: line-through;
  }

  @media (min-width:980px){
    flex-direction: row;

    input{
        width:15px;
    height:15px;
    }

  label{
      width: 75%;
      margin: 0;
      margin-left: .5rem;
      text-align: justify;
  }

}
  `;

  return (
    <Container addStyle={addStyleContainer}>
      <input
        type="checkbox"
        checked={item.done}
        name="isChecked"
        id={item.id}
        onChange={handleCheck}
      />
      <label className={item.done ? "checked" : ""} htmlFor={item.id}>
        {item.name}
      </label>
      <Button
        addStyle={addStyleButton}
        backgroundColor="#4abdac"
        color="#fff"
        text="Remover da lista"
        onClick={handleRemove}
      />
    </Container>
  );
};

export default ListItem;
