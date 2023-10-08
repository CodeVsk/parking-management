import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import "./index.css";
import { Button, Modal } from "react-bootstrap";

const ModalCustom = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);

  const handleShow = () => setShow(!show);

  const handleConfirm = () => {
    setShow(!show);
    props.onCallback(id);
  };

  useImperativeHandle(ref, () => ({
    handleShow(value) {
      handleShow();
      setId(value);
    },
    handleConfirm() {
      handleConfirm();
    },
  }));

  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={handleShow}>
          Cancelar
        </Button>
        <Button variant="dark" onClick={handleConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default ModalCustom;
