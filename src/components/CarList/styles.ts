import styled from 'styled-components';

export const Container = styled.ul`
  overflow-x: hidden;
  height: 90vh;
  display: flex;
  justify-content: flex-start;
  margin-top: 84px;
  padding-top: 34px;
  flex-wrap: wrap;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: center;

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
