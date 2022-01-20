import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles';
import {
  Button,
  ButtonTitle,
  HeaderDiv,
  Icon,
  SearchButton,
  SearchDiv,
  Sign,
  Title,
  Title2,
} from './styles';
import locationIcon from '../../assets/icons/location.svg';
import calendarIcon from '../../assets/icons/calendar.svg';
import searchIcon from '../../assets/icons/search.svg';

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderDiv>
      <ButtonTitle onClick={() => navigate('/')}>
        <Title>EXOTIC</Title> <Title2>CARS</Title2>
      </ButtonTitle>
      <SearchDiv>
        <Button>
          <Icon src={locationIcon} alt='location' /> North Carolina, NC 90025
        </Button>
        <div>
          <Button style={{ marginRight: 5 }}>
            <Icon src={calendarIcon} alt='calendar' />
            11/03/2021
          </Button>
          <Button>
            <Icon src={calendarIcon} alt='calendar' />
            12/12/2021
          </Button>
        </div>
        <SearchButton>
          <img src={searchIcon} alt='search' />
        </SearchButton>
      </SearchDiv>
      <div>
        <Sign>Sign up</Sign>
        <Sign border={true}>Sign in</Sign>
      </div>
    </HeaderDiv>
  );
}

export default Header;
