import styled from 'styled-components';

export const HeaderDiv = styled.header`
  width: 100%;
  height: 14vh;
  background-color: white;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 10px 30px #0000001a;

  @media (max-width: 880px) {
    padding-left: 10%;
  }
`;

export const ButtonTitle = styled.button`
  background: none;
  border: none;
`;

export const Title = styled.h2`
  font: normal normal 600 24px/32px Segoe UI;
  font-weight: 600;
  color: #313136;
  display: inline;
`;

export const Title2 = styled.h2`
  display: inline;
  font-weight: 500;
  font-size: 1.1em;
`;

export const SearchDiv = styled.div`
  background: #f3f1fc 0% 0% no-repeat padding-box;
  border-radius: 18px;
  width: 540px;
  height: 36px;
  opacity: 0.59;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 6px;
  padding-right: 6px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: none;
`;

export const Icon = styled.img`
  padding-right: 5px;
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: white;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 1px #dadada;
`;

export const Sign = styled.button<{ border?: boolean }>`
  font: normal normal bold 16px/21px Segoe UI;
  background: none;
  color: #7b89f4;
  border-radius: 13px;
  width: 84px;
  height: 36px;
  border: ${(props) => (props.border ? '2px solid #7b89f4' : 'none')};
  margin-right: 4px;
  margin-left: 4px;
`;

export const Dropdown = styled.div`
  position: relative;
  left: 20;
  top: 20;
  display: inline-block;

  .dropdown-content {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }
`;
