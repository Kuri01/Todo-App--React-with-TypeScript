import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
const TaskInput = (props: any) => {
  const [newTaskTitle, setNewTaskTitle] = React.useState('');

  const handleClick = (event: any) => {
    event.preventDefault();
    props.handleAddTask(newTaskTitle);
    setNewTaskTitle('');
  };

  const handleEnter = (event: any) => {
    if (event.charCode === 13) {
      event.preventDefault();
      props.handleAddTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  const handleChange = (event: any) => {
    setNewTaskTitle(event.target.value);
  };

  return (
    <InputGroup className='mb-3'>
      <FormControl
        placeholder='Enter task name'
        aria-label="Recipient's username"
        aria-describedby='basic-addon2'
        value={newTaskTitle}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
      <Button
        variant='outline-secondary'
        id='button-addon2'
        onClick={handleClick}
      >
        Go
      </Button>
    </InputGroup>
  );
};

export default TaskInput;
