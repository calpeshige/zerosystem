import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import RouletteBoard from './RouletteBoard';
import NumberHistory from './NumberHistory';
import BettingNumbers from './BettingNumbers';
import FinanceTable from './FinanceTable';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial, sans-serif';
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 95%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.5;
  font-weight: bold;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.div`
  font-size: 20px;
  color: #34495e;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FixedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 650px;
  margin-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HistoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 140px;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

const ResetButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: #e74c3c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;
  &:hover {
    background: #c0392b;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const FinanceTitle = styled.div`
  margin-top: 40px;
  font-size: 24px;
  color: #2c3e50;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
  }
`;

const Counter = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 20px;
  background: #34495e;
  color: #ffffff;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

function getRandomNumbers(count, min, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(randomNum);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [bettingNumbers, setBettingNumbers] = useState([]);
  const [showPrediction, setShowPrediction] = useState(false);

  const handleNumberSelect = (number) => {
    if (showPrediction) return;

    const newSelectedNumbers = [...selectedNumbers, number];
    setSelectedNumbers(newSelectedNumbers);

    let showProbability = 0.0;

    if (newSelectedNumbers.length >= 8 && newSelectedNumbers.length <= 33) {
      showProbability = 0.999999 / (33 - 8 + 1); // 8〜33回目の入力で合計99.9999%の確率で表示
    } else if (newSelectedNumbers.length === 34) {
      showProbability = 0.5; // 34回目で50%の確率で表示
    } else if (newSelectedNumbers.length === 35) {
      showProbability = 0.75; // 35回目で75%の確率で表示
    } else if (newSelectedNumbers.length === 36) {
      showProbability = 1.0; // 36回目で100%の確率で表示
    }

    if (Math.random() < showProbability || newSelectedNumbers.length === 37) {
      const randomNumbers = getRandomNumbers(12, 0, 36);
      setBettingNumbers(randomNumbers);
      setShowPrediction(true);
    }
  };

  const handleReset = () => {
    setSelectedNumbers([]);
    setBettingNumbers([]);
    setShowPrediction(false);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>
          ZEROルーレット
          <Subtitle>ストラテジーシステム</Subtitle>
        </Title>
        <RouletteBoard onNumberSelect={handleNumberSelect} />
        <FixedContainer>
          <div>出目予測（12個）</div>
          <BettingNumbers numbers={bettingNumbers} />
          <HistoryContainer>
            <NumberHistory numbers={selectedNumbers} />
          </HistoryContainer>
          <Counter>入力された数字の個数: {selectedNumbers.length}</Counter>
          <ResetButton onClick={handleReset}>リセット</ResetButton>
        </FixedContainer>
        <FinanceTitle>資金管理表</FinanceTitle>
        <FinanceTable />
      </AppContainer>
    </>
  );
}

export default App;
