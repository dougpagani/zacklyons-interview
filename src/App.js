import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

export default function App() {
  return <Game/>
}

const Square = ({marking}) => {
  return (
    <button className="square">
      {marking}
    </button>
  );
}

const Board = ({grid}) => {
  const renderSquare = (row, column) => {
    return <Square marking={grid[row][column]}/>;
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0,0)}
        {renderSquare(0,1)}
        {renderSquare(0,2)}
      </div>
      <div className="board-row">
        {renderSquare(1,0)}
        {renderSquare(1,1)}
        {renderSquare(1,2)}
      </div>
      <div className="board-row">
        {renderSquare(2,0)}
        {renderSquare(2,1)}
        {renderSquare(2,2)}
      </div>
    </div>
  );
}

const Game = props => {
  const [grid,setGrid] = useState([['','',''],['','',''],['','','']])
  const [currentPlayer,setCurrentPlayer] = useState('p1') // ['p1','p2']
  const [gameState,setGameState] = useState('currentlyPlaying') // ['currentlyPlaying','tie','winner p1',winner p2]

  return (
    <div className="game">
      <div className="game-board">
        <Board grid={grid} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

