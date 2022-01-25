import React from 'react';
import { ArrowButton, Container, MainSquare, Square } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function ColorCarList() {
  const selectedCarInfo = useSelector(
    (state: RootState) => state.stock.selectedCarInfo
  );
  return (
    <Container>
      <div>
        <ArrowButton>
          <BsArrowLeft style={{ fontSize: 20, color: 'white' }} />
        </ArrowButton>
      </div>
      <div>
        <Square>
          <img src={selectedCarInfo.colors[1].image} alt='car' />
        </Square>
      </div>
      <div>
        <MainSquare>
          <img src={selectedCarInfo.colors[0].image} alt='car' />
        </MainSquare>
      </div>
      <div>
        <Square>
          <img src={selectedCarInfo.colors[2].image} alt='car' />
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
