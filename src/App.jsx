import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import imagem from './assets/produtividade.png'

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Aplicação de Gerenciamento de Tarefas Iniciada");
  }, []);

  const addTask = (description) => {
    setTasks([...tasks, { description, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div>
      <Header />
      <AddTask addTask={addTask} />
      <img src={imagem} alt="produtividade" />
      <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
      <Footer />
    </div>
  );
};

export default App;