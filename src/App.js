import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

export default function App() {
  return <Game/>
}

const Square = props => {
  return (
    <button className="square">
      {/* TODO */}
    </button>
  );
}

const Board = props => {
  const renderSquare = i => {
    return <Square />;
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
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
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

