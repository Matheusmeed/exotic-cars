import styled from 'styled-components';

export const Container = styled.li<{ last: boolean }>`
  list-style: none;
  width: 287px;
  height: 220px;
  background: #f8f8fa 0% 0% no-repeat padding-box;
  border-radius: 20px;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 12px;
  margin-left: 12px;
  margin-bottom: ${(props) => (props.last ? '100px' : '32px')};
  cursor: pointer;

  :hover {
    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 90px;
  padding-top: 10px;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 8px;
`;

export const DivCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CarBrand = styled.h4`
  margin: 0;
`;

export const CarName = styled.h4`
  font-weight: 400;
  margin: 0;
`;

export const OptionsButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`;

export const DivDolar = styled.div`
  display: flex;
  margin-right: 2px;
  margin-top: 2px;
`;

export const Dolar = styled.h4`
  display: inline;
  margin: 0;
`;

export const BookNow = styled.h4`
  color: #f8f8fa;
  padding-left: 20px;
`;
