import { Card } from 'react-bootstrap';
import React from 'react';
import EditCardModal from './EditCardModal/EditCardModal';
import editPen from '../../Icons/editPen.svg';
import done from '../../Icons/done.svg';
import deleteIcon from '../../Icons/delete.svg';

const TaskCard = (props: any) => {
  const [modalShow, setModalShow] = React.useState(false);
  const handleDelete = (event: any) => {
    event.preventDefault();
    props.handleClick('delete', props.id);
  };
  const handleEdit = (event: any) => {
    event.preventDefault();
    setModalShow(true);
  };
  const handleDone = (event: any) => {
    event.preventDefault();
    props.handleClick('done', props.id);
  };

  return (
    <Card style={{ width: '18rem' }} bg={props.status}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Link href={props.title} onClick={handleEdit}>
          <img src={editPen} alt='edit'></img>
        </Card.Link>
        <Card.Link href={props.title} onClick={handleDelete}>
          <img src={deleteIcon} alt='delete'></img>
        </Card.Link>
        <Card.Link href={props.title} onClick={handleDone}>
          <img src={done} alt='done'></img>
        </Card.Link>
        <EditCardModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          object={props}
        />
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
