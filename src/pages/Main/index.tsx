import { Container } from './styles';
import CarList from '../../components/CarList';
import Header from '../../components/Header';
import './styles';

function Main() {
  return (
    <>
      <Header />
      <Container>
        <CarList />
      </Container>
    </>
  );
}

export default Main;
