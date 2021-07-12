
import Header from './compoents/Header.js';
import Tasks from './compoents/Tasks.js';

import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "id1",
      name: "name1",
      day: "Feb 5th at 2.30 pm",
      text: "doctor appointment"
    },
    {
      id: "id2",
      name: "name2",
      day: "Feb 6th at 1.30 pm",
      text: "Meeting at school"
    },
    {
      id: "id3",
      name: "name3",
      day: "Feb 5th at 1.30 pm",
      text: "Food shopping"
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete = {deleteTask} />
    </div>
  );
}

export default App;
