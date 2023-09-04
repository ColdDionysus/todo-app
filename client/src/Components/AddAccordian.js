import React from "react";
import { Accordion } from "react-bootstrap";
const AddAccordian = ({ title, desc }) => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{desc}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>{title}</Accordion.Header>
          <Accordion.Body>{desc}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default AddAccordian;
