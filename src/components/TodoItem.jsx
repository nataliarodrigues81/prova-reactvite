import React from 'react';

const TodoItem = ({ task, index, toggleTaskCompletion }) => {
  return (
<li>
  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
    {task.description}
  </span>
      <button onClick={() => toggleTaskCompletion(index)}>
        {task.completed ? 'Desmarcar' : 'Concluir'}
      </button>
    </li>
  );
};

export default TodoItem;