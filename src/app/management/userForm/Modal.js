import React from "react";
import { Modal, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import ModalConstant from "./ModalConstant";

const getTitleAndBody = mode => {
  const { ADD, DELETED, NOT_VALID, UPDATED, ERROR } = ModalConstant.cases;
  switch (mode) {
    case ADD:
      return ModalConstant.userAdded;
    case DELETED:
      return ModalConstant.userDeleted;
    case NOT_VALID:
      return ModalConstant.userNotValid;
    case UPDATED:
      return ModalConstant.userUpdated;
    case ERROR:
      return ModalConstant.error;
  }
};

const CustomModal = ({ show, mode, history, close }) => {
  const goHome = () => {
    history.push("/dashboard");
  };
  const { title, body } = getTitleAndBody(mode);
  return (
    <Modal show={show}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button
          className="btn btn-primary"
          onClick={mode === ModalConstant.cases.NOT_VALID ? close : goHome}
        >
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default withRouter(CustomModal);
