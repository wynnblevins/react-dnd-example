import React from 'react';

const taskItemStyle = {
  'backgroundColor': '010101',
  'border': '2px solid black',
  'margin': '0px 0px 10px 0px',
  'padding': '5px'
}

const TaskItem = (props) => {
  const taskItem = props.taskItem;
  
  if (taskItem) {
    return (
      <div style={taskItemStyle}>
        <p>{taskItem.id}</p>
        <p>{taskItem.status}</p>
        <p>{taskItem.category}</p>
        <p>{taskItem.title}</p>
        <p>{taskItem.details}</p>
      </div>
    )
  }
  
  return null;
}

export default TaskItem;