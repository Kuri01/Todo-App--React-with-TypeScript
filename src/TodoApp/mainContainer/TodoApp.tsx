import React from 'react';
import TaskInput from '../TaskInput/TaskInput';
import { Container } from 'react-bootstrap';
import TaskCard from '../TaskCard/TaskCard';

class TodoApp extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  state = {
    tasks: [{ title: 'Go home', id: 1, status: '' }],
  };

  handleClick = (action: string, target: number, newTitle: string) => {
    switch (action) {
      case 'delete':
        this.setState({
          tasks: this.state.tasks.filter((task) => {
            return task.id !== target;
          }),
        });
        break;
      case 'edit':
        this.setState((prevState: any) => ({
          tasks: prevState.tasks.map((obj: any) =>
            obj.id === target ? Object.assign(obj, { title: newTitle }) : obj
          ),
        }));
        break;
      case 'done':
        this.setState((prevState: any) => ({
          tasks: prevState.tasks.map((obj: any) =>
            obj.id === target ? Object.assign(obj, { status: 'success' }) : obj
          ),
        }));
        break;
      default:
        console.log('default');
    }
  };

  handleAddTask = (newTaskTitle: string) => {
    const newObj = {
      id: Math.floor(Math.random() * 1000),
      title: newTaskTitle,
      status: '',
    };
    this.setState({ tasks: [...this.state.tasks, newObj] });
  };

  render() {
    return (
      <Container>
        <h1>Todo app</h1>
        <TaskInput handleAddTask={this.handleAddTask} />
        {this.state.tasks.map((task) => (
          <TaskCard
            title={task.title}
            id={task.id}
            status={task.status}
            handleClick={this.handleClick}
            key={task.id}
          />
        ))}
      </Container>
    );
  }
}

export default TodoApp;
