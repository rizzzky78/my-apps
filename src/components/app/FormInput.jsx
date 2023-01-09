import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';

const FormInput = () => {
  const emailInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailInput.current.value);
  }

  return (
    <Container>
      <Form onChange={emailInput}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </Form>
    </Container>
  );
}

export default FormInput;
