import { Container } from './styles';
import { CarList, Header } from 'components';
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
