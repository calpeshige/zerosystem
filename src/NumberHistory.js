import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 650px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 40px;
  box-sizing: border-box;
  position: relative;
  background: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const NumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  max-height: 100px;
  overflow-y: auto;
`;

const NumberItem = styled.span`
  margin: 5px;
  font-size: 18px;
`;

const Placeholder = styled.div`
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: #888;
`;

const NumberHistory = ({ numbers }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [numbers]);

  return (
    <HistoryContainer>
      <NumbersContainer ref={containerRef}>
        {numbers.length > 0 ? (
          numbers.flatMap((num, index) => [
            <NumberItem key={index}>{num}</NumberItem>,
            index < numbers.length - 1 && <NumberItem key={`${index}-comma`}>,</NumberItem>
          ])
        ) : (
          <Placeholder>出目履歴</Placeholder>
        )}
      </NumbersContainer>
    </HistoryContainer>
  );
};

export default NumberHistory;
