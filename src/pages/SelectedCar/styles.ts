import styled from 'styled-components';

export const Container = styled.div`
  background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
  height: 86vh;
  overflow-y: auto;
  margin-top: 83px;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const CarHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoDiv = styled.div`
  margin-left: 40px;
`;

export const Price = styled.h1`
  font-weight: 300;
  margin: 0;
`;

export const CarDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CarColorDiv = styled.div`
  height: 300px;

  div h1,
  h3 {
    margin: 0;
  }

  div h3 {
    font-weight: 400;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background: none;
  border: 1px solid #313136;
  border-radius: 25px;
  box-shadow: 0px 5px 10px #0000001a;

  :hover {
    background-color: white;
  }
`;

export const BookButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #313136;

  box-shadow: 0px 5px 10px #0000001a;
  border-radius: 25px;
  color: white;

  :hover {
    background-color: #313136af;
  }
`;
