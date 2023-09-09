import { forwardRef, useRef, useState } from "react";
import "./index.css";
import { Button, Modal } from "react-bootstrap";

const ModalCustom = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const handleConfirm = () => {
    setShow(!show);
    props.onCallback(true);
  };

  useRef(() => {
    ref.current = {
      handleConfirm,
      handleShow,
    };
  });

  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleShow}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default ModalCustom;
