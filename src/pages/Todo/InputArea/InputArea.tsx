/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */

import React, { KeyboardEvent, useState } from "react";
import * as C from "./InputArea.style";
// import Button from "../UI/Button";


// components
import Button from "../../../components/Button";
import Input from '../../../components/Input'

type Props = {
  onAddTask: (text: string) => void;
};

const InputArea = ({ onAddTask }: Props) => {
  const [inputContent, setInputContent] = useState("");

  const handleSubmit = () => {
    if (!(inputContent.trim().length > 0)) return;

    onAddTask(inputContent);
    setInputContent("");
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === "Enter" && inputContent.trim().length > 0) {
      onAddTask(inputContent);
      setInputContent("");
    }
  };

  return (
    <C.Container>
      <Input
        addStyles="border: 2px solid #4abdac;"
        type="text"
        placeholder="Descrição da tarefa..."
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        onKeyPress={handleKeyUp}
      />
      <Button addStyle="margin-left: 1rem; padding: .9rem;" type="button" onClick={handleSubmit}  text="Adicionar" />
    </C.Container>
  );
};

export default InputArea;
