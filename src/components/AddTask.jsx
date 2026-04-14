import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription) {
      addTask(taskDescription);
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>
    </div>
  );
};

export default AddTask;