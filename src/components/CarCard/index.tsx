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
import { FaEllipsisH } from 'react-icons/fa';
import { CarCardProps } from '../../@types';

function CarCard(props: CarCardProps) {
  return (
    <Container last={props.last} onClick={() => props.onClick()}>
      <CardHeader>
        <div>
          <CarBrand>{props.brand}</CarBrand>
          <CarName>{props.name}</CarName>
        </div>
        <div>
          <OptionsButton>
            <FaEllipsisH color='#C8C8CA' />
          </OptionsButton>
        </div>
      </CardHeader>
      <CardBody>
        <div>
          <img src={props.image} alt='car' width={240}></img>
        </div>
      </CardBody>
      <DivCardFooter>
        <BookNow>Book Now</BookNow>
        <CardFooter>
          <DivDolar>
            <Dolar>$</Dolar>
          </DivDolar>
          <div>
            <h1 style={{ display: 'inline' }}>{props.price}</h1>/day
          </div>
        </CardFooter>
      </DivCardFooter>
    </Container>
  );
}

export default CarCard;
