import styled from 'styled-components';

export const Container = styled.ul`
  overflow-x: hidden;
  height: 87vh;
  display: flex;
  justify-content: center;
  margin-top: 13vh;
  padding-top: 50px;
  padding-left: 10px;
  padding-right: 10px;
  flex-wrap: wrap;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(150deg, #e6d3f1 29%, #a1a7f4 77%);
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(150deg, #e6d3f1 6%, #a1a7f4 85%);
  }
  ::-webkit-scrollbar-track {
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
`;

export const ScrollButton = styled.img`
  cursor: pointer;
  position: absolute;
  bottom: 70px;
  right: 70px;
`;
