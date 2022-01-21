import React from 'react';
import { ArrowButton, Container, MainSquare, Square } from './styles';
import Car from '../../assets/cars/ferrari.png';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function ColorCarList() {
  return (
    <Container>
      <div>
        <ArrowButton>
          <BsArrowLeft style={{ fontSize: 20, color: 'white' }} />
        </ArrowButton>
      </div>
      <div>
        <Square>
          <img src={Car} alt='car' />
        </Square>
      </div>
      <div>
        <MainSquare>
          <img src={Car} alt='car' />
        </MainSquare>
      </div>
      <div>
        <Square>
          <img src={Car} alt='car' />
        </Square>
      </div>
      <div>
        <ArrowButton>
          <BsArrowRight style={{ fontSize: 20, color: 'white' }} />
        </ArrowButton>
      </div>
    </Container>
  );
}

export default ColorCarList;
