import React from 'react';
import { ArrowButton, Container, MainSquare, Square } from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCarColor } from '../../store/Stock.store';

function ColorCarList() {
  const dispatch = useDispatch();
  const selectedCarInfo = useSelector(
    (state: RootState) => state.stock.selectedCarInfo
  );
  return (
    <Container>
      <div>
        <ArrowButton onClick={() => dispatch(setCarColor('02'))}>
          <BsArrowLeft style={{ fontSize: 20, color: 'white' }} />
        </ArrowButton>
      </div>
      {selectedCarInfo.colors.length &&
        selectedCarInfo.colors.forEach((color) => {
          return (
            <div>
              oi
              {/* <Square onClick={() => dispatch(setCarColor(color.id))}>
            <img src={color.image} alt='car' />
          </Square> */}
            </div>
          );
        })}
      {/* <div>
        <Square onClick={() => dispatch(setCarColor('01'))}>
          <img src={selectedCarInfo.colors[2].image} alt='car' />
        </Square>
      </div>
      <div>
        <MainSquare>
          <img src={selectedCarInfo.colors[0].image} alt='car' />
        </MainSquare>
      </div>
      <div>
        <Square onClick={() => dispatch(setCarColor('02'))}>
          <img src={selectedCarInfo.colors[1].image} alt='car' />
        </Square>
      </div> */}
      <div>
        <ArrowButton onClick={() => console.log('oi')}>
          <BsArrowRight style={{ fontSize: 20, color: 'white' }} />
        </ArrowButton>
      </div>
    </Container>
  );
}

export default ColorCarList;
