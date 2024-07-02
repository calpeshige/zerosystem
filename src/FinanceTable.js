import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: ${props => (props.active ? '#3498db' : '#bdc3c7')};
  color: #ffffff;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  transition: background 0.3s;
  &:hover {
    background: #2980b9;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background: #34495e;
  color: #ffffff;
  padding: 10px;
  border: 1px solid #dddddd;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #dddddd;
`;

const financeData = {
  usd: [
    [1, 0.4, 12, 4.8, 4.8, 9.6],
    [2, 0.8, 12, 9.6, 14.4, 14.4],
    [3, 1.2, 12, 14.4, 28.8, 14.4],
    [4, 1.6, 12, 19.2, 48, 9.6],
    [5, 2.4, 12, 28.8, 76.8, 9.6],
    [6, 3.6, 12, 43.2, 120, 9.6],
    [7, 5.6, 12, 67.2, 187.2, 14.4],
    [8, 8.4, 12, 100.8, 288, 14.4],
    [9, 12.4, 12, 148.8, 436.8, 9.6],
    [10, 18.8, 12, 225.6, 662.4, 14.4],
    [11, 28.0, 12, 336, 998.4, 9.6],
  ],
  jpy: [
    [1, 40, 12, 480, 480, 960],
    [2, 80, 12, 960, 1440, 1440],
    [3, 120, 12, 1440, 2880, 1440],
    [4, 160, 12, 1920, 4800, 960],
    [5, 240, 12, 2880, 7680, 960],
    [6, 360, 12, 4320, 12000, 960],
    [7, 560, 12, 6720, 18720, 1440],
    [8, 840, 12, 10080, 28800, 1440],
    [9, 1240, 12, 14880, 43680, 960],
    [10, 1880, 12, 22560, 66240, 1440],
    [11, 2800, 12, 33600, 99840, 960],
  ],
};

const FinanceTable = () => {
  const [activeTab, setActiveTab] = useState('usd');

  return (
    <TableContainer>
      <Tabs>
        <Tab active={activeTab === 'usd'} onClick={() => setActiveTab('usd')}>
          ドル表記
        </Tab>
        <Tab active={activeTab === 'jpy'} onClick={() => setActiveTab('jpy')}>
          円表記
        </Tab>
      </Tabs>
      <Table>
        <thead>
          <tr>
            <Th>BET回数</Th>
            <Th>BET額</Th>
            <Th>BET箇所</Th>
            <Th>BET額小計</Th>
            <Th>BET額合計</Th>
            <Th>利益</Th>
          </tr>
        </thead>
        <tbody>
          {financeData[activeTab].map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <Td key={i}>{cell}</Td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default FinanceTable;
