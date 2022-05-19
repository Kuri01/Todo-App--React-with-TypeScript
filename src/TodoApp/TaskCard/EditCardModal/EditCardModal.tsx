import React from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

function EditCardModal(props: any) {
  const [newTitle, setNewTitle] = React.useState('');

  const handleChange = (event: any) => {
    setNewTitle(event.target.value);
  };

  const handleEdit = (event: any) => {
    event.preventDefault();
    props.object.handleClick('edit', props.object.id, newTitle);

    setNewTitle('');
    props.onHide();
  };

  const handleEnter = (event: any) => {
    if (event.charCode === 13) {
      event.preventDefault();
      props.object.handleClick('edit', props.object.id, newTitle);
      setNewTitle('');
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Edit task name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Enter task name'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
            value={newTitle}
            onChange={handleChange}
            onKeyPress={handleEnter}
          />
          <Button
            variant='outline-secondary'
            id='button-addon2'
            onClick={handleEdit}
          >
            Go
          </Button>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCardModal;
