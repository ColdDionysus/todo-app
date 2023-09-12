import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function Toaster({ title, msg }) {
  const [show, setShow] = useState(true);
  const [position] = useState("bottom-end");

  return (
    <>
      <ToastContainer className="p-3" position={position} style={{ zIndex: 1 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">{title || "Title"}</strong>
          </Toast.Header>
          <Toast.Body>{msg || "Toast Message"}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default Toaster;
