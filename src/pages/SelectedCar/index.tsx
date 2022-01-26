import React from 'react';
import Header from '../../components/Header';
import './styles';
import {
  BackButton,
  BookButton,
  CarColorDiv,
  CarDiv,
  CarHeader,
  CarImgDiv,
  Container,
  InfoDiv,
  Price,
} from './styles';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import ColorCarList from '../../components/ColorCarList';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function SelectedCar() {
  const selectedCarInfo = useSelector(
    (state: RootState) => state.stock.selectedCarInfo
  );

  return (
    <>
      <Header />
      <Container>
        <CarHeader>
          <img src={selectedCarInfo.logo} alt='logo' />
          <InfoDiv>
            <h1
              style={{ margin: 0 }}
            >{`${selectedCarInfo.brand} ${selectedCarInfo.name}`}</h1>
            <Price>${selectedCarInfo.price}/day</Price>
          </InfoDiv>
        </CarHeader>
        <CarDiv>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <BackButton>
              <BsArrowLeft
                style={{ marginRight: 9, fontSize: 20, color: '#313136' }}
              />
              Back to catalog
            </BackButton>
          </div>
          <CarImgDiv>
            <img src={selectedCarInfo.colors[0].image} alt='carro' />
            <div>
              <BookButton>
                Book now{' '}
                <BsArrowRight
                  style={{ marginLeft: 9, fontSize: 20, color: 'white' }}
                />
              </BookButton>
            </div>
          </CarImgDiv>
          <CarColorDiv>
            <div>
              <h1>{selectedCarInfo.colors[0].id}</h1>
              <h3>{selectedCarInfo.colors[0].color}</h3>
            </div>
          </CarColorDiv>
        </CarDiv>
        <ColorCarList />
      </Container>
    </>
  );
}

export default SelectedCar;
