import {
  BookNow,
  CarBrand,
  CardBody,
  CardFooter,
  CardHeader,
  CarName,
  Container,
  DivCardFooter,
  DivDolar,
  Dolar,
  OptionsButton,
} from './styles';
import carImg from '../../assets/cars/california.png';
import { FaEllipsisH } from 'react-icons/fa';

function CarCard() {
  return (
    <Container>
      <CardHeader>
        <div>
          <CarBrand>Ferrari</CarBrand>
          <CarName>CALIFORNIA</CarName>
        </div>
        <div>
          <OptionsButton>
            <FaEllipsisH color='#C8C8CA' />
          </OptionsButton>
        </div>
      </CardHeader>
      <CardBody>
        <img src={carImg} alt='car'></img>
      </CardBody>
      <DivCardFooter>
        <BookNow>Book Now</BookNow>
        <CardFooter>
          <DivDolar>
            <Dolar>$</Dolar>
          </DivDolar>
          <div>
            <h1 style={{ display: 'inline' }}>725</h1>/day
          </div>
        </CardFooter>
      </DivCardFooter>
    </Container>
  );
}

export default CarCard;
