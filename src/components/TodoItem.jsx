import React from 'react';

const TodoItem = ({ tarefas, removeTarefa }) => {
  return (
    <li>
      {tarefas.text} 
      {/*Botão para remover a tarefa*/}
      <button onClick={() => removeTarefa(tarefas.id)}>Excluir</button>
    </li>
  );
};

export default TodoItem;