import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Loading from "./Loading";

import { URLS } from "../constants";
import { useApiContext } from "../contexts";

function AddInputGroup({ label, placeholder, button, buttonVariant }) {
  const [title, setTitle] = useState({});
  const { error, loading, create } = useApiContext();

  const handleSubmit = async () => {
    await create({ url: URLS.TODOS, payload: title });
    setTitle({});
  };

  if (error) return <>{JSON.stringify(error)}</>;
  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text>{label || "Label"}</InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "Placeholder"}
          onChange={(event) => {
            setTitle((title) => {
              return { ...title, title: event.target.value };
            });
          }}
        />
        <Button variant={buttonVariant || "success"} onClick={handleSubmit}>
          {button || "Button Name"}
        </Button>
      </InputGroup>
    </>
  );
}

export default AddInputGroup;
