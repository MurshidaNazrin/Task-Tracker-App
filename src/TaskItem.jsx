import React from 'react'

function TaskItem({ title, category, isDone }) {
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        <li style={{
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '6px',
          margin: '10px',
          padding: '10px',
          boxShadow: '1px 2px 3px rgba(0,0,0,0.5)',
          display: 'flex',
          justifyItems: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          {/* 1-checkbox(isDone-true or not) - title -category*/}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" checked={isDone} style={{ marginRight: '10px' }} />
            <p style={{ fontSize: '18px', margin: '0' }}>{title}</p>
          </div>

          <p style={{ fontSize: '16px', color: '#514f4f' }}>{category}</p>
        </li>
      </ul>
    </div>
  )
}

export default TaskItem
