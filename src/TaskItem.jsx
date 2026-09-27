import React, { useState } from 'react';

function TaskItem({ id, title, category, isDone, onDelete, onToggle }) {
  const [completed, setCompleted] = useState(isDone);

  return (
    <div className='task-item-card'>
      {/* 1-checkbox(isDone-true or not) - title -category*/}
      <div className='task-info'>
        <input type="checkbox" checked={isDone} 
          onChange={() => onToggle(id)} />
        <p className={`task-title ${isDone ? 'completed' : ""}`}
        >{title}</p>
      </div>

      <p className='task-category'
      >{category}</p>
      <button onClick={() => onDelete(id)} className='delete-btn'>X</button>
    </div>
  )
}

export default TaskItem
