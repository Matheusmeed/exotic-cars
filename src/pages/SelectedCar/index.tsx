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
import logo from '../../assets/icons/ferrari.png';
import carro from '../../assets/cars/ferrari.png';
import ColorCarList from '../../components/ColorCarList';

function SelectedCar() {
  return (
    <>
      <Header />
      <Container>
        <CarHeader>
          <img src={logo} alt='logo' height={90} />
          <InfoDiv>
            <h1 style={{ margin: 0 }}>Ferrari California</h1>
            <Price>$725/day</Price>
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
            <img src={carro} alt='carro' width={600} />
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
              <h1>01</h1>
              <h3>Red</h3>
            </div>
          </CarColorDiv>
        </CarDiv>
        <ColorCarList />
      </Container>
    </>
  );
}

export default SelectedCar;
