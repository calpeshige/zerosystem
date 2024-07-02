import React from 'react';
import styled from 'styled-components';

const BettingContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 650px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NumberRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

const NumberItem = styled.div`
  margin: 5px;
  padding: 10px;
  font-size: 18px;
  color: white;
  background-color: #2c3e50;
  border-radius: 5px;
  min-width: 30px;
  text-align: center;
`;

const BettingNumbers = ({ numbers }) => {
  const firstRow = numbers.slice(0, 6);
  const secondRow = numbers.slice(6, 12);

  return (
    <BettingContainer>
      <NumberRow>
        {firstRow.map((num, index) => (
          <NumberItem key={index}>{num}</NumberItem>
        ))}
      </NumberRow>
      <NumberRow>
        {secondRow.map((num, index) => (
          <NumberItem key={index}>{num}</NumberItem>
        ))}
      </NumberRow>
    </BettingContainer>
  );
};

export default BettingNumbers;
