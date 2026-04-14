import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <ul>
    {tasks.length === 0 ? (
        <p style={{ color: "gray" }}>Nenhuma tarefa cadastrada</p>
    ) : (
        tasks.map((task, index) => (
        <TodoItem
            key={index}
            task={task}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
        />
        ))
    )}
    </ul>
  );
};

export default TodoList;