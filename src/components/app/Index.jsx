import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../style/index.css'

const Home = () => {
  return (
    <Container>
      <h2>Hello World!</h2>
      <Link to='/'>Home</Link>{' '}
      <Link to='/entertainment'>Entertainment</Link>{' '}
      <Link to='/testing'>Testting</Link>{' '}
    </Container>
  )
};
export { Home }