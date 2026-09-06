import { useState } from 'react'
import TaskItem from './TaskItem';


function App() {
  const initialTasks = [
    { id: 1, title: "Morning meditation and stretching", category: 'Health', isDone: true },
    { id: 2, title: "Learn React fundamentals", category: 'Study', isDone: false },
    { id: 3, title: "Review pull requests", category: 'Work', isDone: true },
    { id: 4, title: "Grocery shopping for the week", category: 'Errands', isDone: true },
    { id: 5, title: "30-minute Cardio workout", category: 'Health', isDone: false },
    { id: 6, title: "Read 20 pages for current book", category: 'Personal', isDone: true },
    { id: 7, title: "Team standup meeting", category: 'Work', isDone: true },
    { id: 8, title: "Practice javascript algorithms", category: 'Study', isDone: false },
    { id: 9, title: "Organisze desk setup", category: 'Chores', isDone: true },
    { id: 10, title: "Meal prep for dinner", category: 'Personal', isDone: true },
  ];


  return (
    <>
      <main style={{backgroundColor: '#cbe7f3'}}>
        <header>
          <div style={{
            width: "100%",
            padding: '20px 0',
            backgroundColor: '#0d6489',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>
     <h1 style={{color: 'white',margin: '0',fontSize: '28px'}}>Tasks</h1>
     <span style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: "4px"}}>All Lists</span>

          </div>
        </header>
        

        {initialTasks.map(task => (
          <TaskItem
            key={task.id}
            title={task.title}
            category={task.category}
            isDone={task.isDone}

          />
        ))}
      </main>



    </>
  )
}

export default App
