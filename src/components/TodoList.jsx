import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  //iniciar com uma lista vazia usando useState
  const [tarefas, setTarefas] = useState([]);

  //adicionar uma nova tarefa à lista
  const addTarefa = () => {
    //novo objeto de tarefa
    const newTarefa = { id: tarefas.length + 1, text: `Tarefa ${tarefas.length + 1}` };
    //atualizar o estado com a nova lista de tarefas
    setTarefas([...tarefas, newTarefa]);
  };

  //remover uma tarefa da lista
  const removeTarefa = (id) => {
    //remove a tarefa com o id especificado
    setTarefas(tarefas.filter(tarefas => tarefas.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <button onClick={addTarefa}>Adicionar tarefa</button>
      <ul>
        {tarefas.map(tarefas => (
          <TodoItem key={tarefas.id} tarefas={tarefas} removeTarefa={removeTarefa} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;