
import Header from './compoents/Header.js';
import Tasks from './compoents/Tasks.js';

import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "id1",
      name: "name1",
      day: "Feb 5th at 2.30 pm",
      text: "doctor appointment",
      reminder: false
    },
    {
      id: "id2",
      name: "name2",
      day: "Feb 6th at 1.30 pm",
      text: "Meeting at school",
      reminder: false
    },
    {
      id: "id3",
      name: "name3",
      day: "Feb 5th at 1.30 pm",
      text: "Food shopping",
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id))
  }

  const onToggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder}: task));
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle = {onToggleReminder} /> : 'No Tasks to show'}
    </div>
  );
}

export default App;
