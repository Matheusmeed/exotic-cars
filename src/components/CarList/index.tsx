import { useEffect, useState } from 'react';
import CarCard from '../CarCard';
import { Container } from './styles';

function CarList() {
  const [car, setCar] = useState('oi');
  useEffect(() => {
    fetch('./cars.json')
      .then((res) => res.json())
      .then((res) => setCar(res.data[0].image))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <CarCard />
      <div>
        <img src={car} alt='car'></img>
      </div>
    </Container>
  );
}

export default CarList;
