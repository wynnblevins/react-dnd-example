import React from 'react';
import { bindActionCreators } from 'redux';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';

import Task from '../components/TaskItem';

const columnStyle = { 
  padding: '10px', 
  margin: '5px',
  display: 'inline-block'
};

const columnHeadingStyle = {
  display: 'inline-block',
  margin: '0px 5px 0px 0px'
};

class KanbanBoard extends React.Component {
  taskItemMoved() {
    console.log('inside task item moved function');  
  }
  
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <h2>To Do</h2>
          <div style={columnStyle}>
            { this.props.taskItems.filter((taskItem) => taskItem.status === 'WIP').map((task) => <Task key={task.id} taskItem={task}></Task>) }
          </div>
        </div>
        <div className="col s6">
          <h2>Done</h2>
          <div style={columnStyle}>
            { this.props.taskItems.filter((taskItem) => taskItem.status === 'Done').map((task) => <Task key={task.id} taskItem={task}></Task>) }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taskItems: state.taskItems
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({});
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);