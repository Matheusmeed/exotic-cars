import React from 'react';
import CarList from '../../components/CarList';
import Header from '../../components/Header';
import './styles';
import { Container } from './styles';

function Main() {
  return (
    <Container>
      <Header />
      <CarList />
    </Container>
  );
}

export default Main;
