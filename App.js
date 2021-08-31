
import Header from './compoents/Header.js';
import AddTask from './compoents/AddTask.js';
import Tasks from './compoents/Tasks.js';

import {useState, useEffect} from 'react'

function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  const [buttonText, setbuttonText] = useState('Add');
  const [tasks, setTasks] = useState([])

  useEffect( () => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, [])

  //Fetch tasks

  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const addTask = async(task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  }
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter( (task) => task.id !== id))
  }

  const onToggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder}: task));
  }
  return (
    <div className="container">
      <Header onAdd={ () => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {onToggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
