import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';
import Auth from './components/Auth';
import imagem from './assets/produtividade.png';

import { db, auth } from './firebase';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);

  // manter login
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAtual) => {
      setUser(userAtual);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setTasks([]);
      return;
    }

    const fetchTasks = async () => {
      const q = query(
        collection(db, "tasks"),
        where("userId", "==", user.uid)
      );

      const querySnapshot = await getDocs(q);
      const lista = [];

      querySnapshot.forEach((doc) => {
        lista.push(doc.data());
      });

      setTasks(lista);
    };

    fetchTasks();
  }, [user]);

  // adicionar tarefa
  const addTask = async (description) => {
    if (!user) {
      alert("Faça login primeiro!");
      return;
    }

    await addDoc(collection(db, "tasks"), {
      description,
      completed: false,
      userId: user.uid
    });

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

      <Auth user={user} setUser={setUser} />

      {user && (
        <>
          <AddTask addTask={addTask} />
          <TodoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
        </>
      )}

      <img src={imagem} alt="produtividade" />

      <Footer />
    </div>
  );
};

export default App;