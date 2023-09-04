import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function AddInputGroup({ label, placeholder, button }) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Loading..."}</InputGroup.Text>
        <Form.Control placeholder={placeholder || "Loading..."} />
        <Button variant="primary" id="button-addon2">
          {button || "Loading...."}
        </Button>
      </InputGroup>
    </>
  );
}

export default AddInputGroup;
