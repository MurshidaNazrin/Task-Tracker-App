import { useState, useEffect, useRef } from 'react'
import TaskItem from './TaskItem';
import './App.css';


function App() {
  const initialTasks = [];
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem('myTasks');
    if (savedTasks && savedTasks !== 'undefined') {
      try {
        return JSON.parse(savedTasks);
      } catch (e) {
        return initialTasks;
      }
    }
    return initialTasks;
  })
  const [taskInput, settaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [showForm, setShowForm] = useState(false);

  const inputRef = useRef(null);

  useEffect(()=> {
    if(showForm && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showForm]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      category: categoryInput,
      isDone: false
    };
    setTask(prevTask => [...prevTask, newTask]);
    settaskInput('');
    setShowForm(false);
  };

  const handleToggle = (id) => {
    setTask((prevTasks) => 
      prevTasks.map((t) => 
      t.id === id ? {...t, isDone: !t.isDone }: t
  ) )
  }

  const handleDeleteTask = (idToDelete) => {
    setTask(prevTask => prevTask.filter(task => task.id !== idToDelete));
  }

  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(task));
  }, [task])


  return (
    <>
      <main
        className='app-container'>
        <header className='app-header'>
          <div>
            <h1 className='header-title'>Tasks</h1>
            <span className='header-subtitle' >All Lists</span>
          </div>
          <button className='toggle-btn'
            onClick={() => setShowForm(!showForm)}>
            {showForm ? 'x' : '+'}
          </button>
        </header>

        {/* Add task form */}
        {showForm && (
          <div className='form-container'>
            <form onSubmit={handleAddTask} className='task-form'>
              <input
              ref={inputRef}
                type="text"
                placeholder='Enter a new Task...'
                value={taskInput}
                onChange={(e) => settaskInput(e.target.value)}
                className='task-input'
              />

              <input
                type="text"
                placeholder='Enter category...'
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                className='task-input'
              />

              <button type="submit" className='submit-btn'>Add</button>
            </form>
          </div>
        )}

        <section className='task-list'>
          {task.map(task => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              category={task.category}
              isDone={task.isDone}
              onDelete={handleDeleteTask}
              onToggle={handleToggle}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
