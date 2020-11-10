import React, {Component} from 'react';
import {uuid} from 'uuidv4';
// import Counter from './Module_3-4/Counter';
import TasksList from './Module_3-4/TasksList';
import TaskEditor from './Module_3-4/TaskEditor';
import Filter from './Module_3-4/Filter';
import createTask from './Module_3-4/create-task';

// COUNTER====================================================
// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Counter initialValue = {0} step = {1}/>
//       </>
//     )
//   }
// }

export default class App extends Component {
  state = {
    tasks: [],
    // firstName: 'Mango',
    // lastName: 'zeDog',
    filter: '',
  };
  
  componentDidMount () {
    console.log('Tasks componentDidMount');

    const persistedTasks = localStorage.getItem('tasks');

    if (persistedTasks) {
      this.setState({
        tasks: JSON.parse(persistedTasks)
      })
    }
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('Tasks componentDidUpdate');
    // console.log('prevState:', prevState);
    // console.log('this.state:', this.state);
    if (prevState.tasks !== this.state.tasks) {
      console.log('Потрібно писати в LS');
      localStorage.setItem('Tasks', JSON.stringify(this.state.tasks));
    }
  }
  
  addTask = (text) => {
    // const task = createTask();
    const task ={
      id: uuid(),
      text,
      completed: false,
    }
    this.setState(prevState => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  }

  removeTask = (taskId) => {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter(({id})=> id !== taskId),
      }
    })
  }
  
  updateCompleted = (taskId) => {
    this.setState (prevState => {
      return {
        tasks: prevState.tasks.map(task => {
          return task.id === taskId
          ? {...task, completed: !task.completed}
          : task
        })
      }
    })
  }

  changeFilter = (filter) => {
    this.setState({filter});
  }

  getVisibleTask = () => {
    const {tasks, filter} = this.state
    return tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase())
      )
  }
  
  render() {
    const {tasks, filter} = this.state;
    // const fullName = this.state.firstName + ' ' + this.state.lastName;
    const visibleTask = this.getVisibleTask();
    return(
      <div>
        {/* <h1>{fullName}</h1> */}
        <TaskEditor 
        onAddTask={this.addTask}
        />
        {visibleTask.length > 1 && (
        <Filter 
        value={filter} 
        onChangeFilter={this.changeFilter} />
        )}
        {tasks.length > 0 && (
        <TasksList 
        tasks={visibleTask} 
        onRemoveTask={this.removeTask} 
        onUpdateTask={this.updateCompleted} />
        )}
      </div>
    );
  }
}

   


































  
