import { Alert } from "react-bootstrap";

function MsgAlert({ msg, variant }) {
  return (
    <>
      <Alert variant={variant || "danger"}>
        {msg || "Message Placeholder"}
      </Alert>
    </>
  );
}

export default MsgAlert;
