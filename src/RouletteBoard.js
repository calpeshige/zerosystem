import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: 50px repeat(12, 50px); /* 13列: 0用の列を含む */
  grid-template-rows: repeat(3, 50px);
  gap: 5px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 40px repeat(12, 40px); /* 列幅を縮小 */
    grid-template-rows: repeat(3, 40px); /* 行高さを縮小 */
  }
`;

const NumberBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.color};
  color: white;
  font-weight: bold;
  border-radius: 5px;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
`;

const ZeroBox = styled(NumberBox)`
  grid-row: span 3; /* 3行分を占める */
  height: 100%; /* 全高さを満たす */
`;

const rouletteNumbers = [
  { number: 0, color: 'teal' },
  { number: 3, color: 'red' }, { number: 6, color: 'black' }, { number: 9, color: 'red' }, { number: 12, color: 'red' }, { number: 15, color: 'black' }, { number: 18, color: 'red' }, { number: 21, color: 'red' }, { number: 24, color: 'black' }, { number: 27, color: 'red' }, { number: 30, color: 'black' }, { number: 33, color: 'black' }, { number: 36, color: 'red' },
  { number: 2, color: 'black' }, { number: 5, color: 'red' }, { number: 8, color: 'black' }, { number: 11, color: 'black' }, { number: 14, color: 'red' }, { number: 17, color: 'black' }, { number: 20, color: 'black' }, { number: 23, color: 'red' }, { number: 26, color: 'black' }, { number: 29, color: 'black' }, { number: 32, color: 'red' }, { number: 35, color: 'black' },
  { number: 1, color: 'red' }, { number: 4, color: 'black' }, { number: 7, color: 'red' }, { number: 10, color: 'black' }, { number: 13, color: 'black' }, { number: 16, color: 'red' }, { number: 19, color: 'red' }, { number: 22, color: 'black' }, { number: 25, color: 'red' }, { number: 28, color: 'black' }, { number: 31, color: 'black' }, { number: 34, color: 'red' }
];

const RouletteBoard = ({ onNumberSelect }) => {
  return (
    <BoardContainer>
      <ZeroBox color='teal' onClick={() => onNumberSelect(0)}>
        0
      </ZeroBox>
      {rouletteNumbers.slice(1).map((numObj, index) => (
        <NumberBox
          key={index}
          color={numObj.color}
          onClick={() => onNumberSelect(numObj.number)}
        >
          {numObj.number}
        </NumberBox>
      ))}
    </BoardContainer>
  );
};

export default RouletteBoard;
