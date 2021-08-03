import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

export default function App() {
  return <Game/>
}

const Square = ({markBoardSquare,marking}) => {
  return (
    <button className="square" onClick={markBoardSquare}>
      {marking}
    </button>
  );
}

const Board = ({currentPlayer,grid,markBoardSquare}) => {
  const renderSquare = (row, column) => {
    return <Square markBoardSquare={()=>{markBoardSquare(row,column)}} marking={grid[row][column]}/>;
  }

  const status = `Next player: ${currentPlayer}`;

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
  const [currentPlayer,setCurrentPlayer] = useState('x') // ['x','o']
  const [gameState,setGameState] = useState('currentlyPlaying') // ['currentlyPlaying','tie','winner p1',winner p2]

  const markBoardSquare = (row,column) => {
    let gridCopy = grid.slice()
    if(gridCopy[row][column]){
      window.alert('YO! THATS CHEATING')
      return
    }
    else{
      gridCopy[row][column] = currentPlayer
    }
    setGrid(gridCopy)
    updateGameState()
    setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
  }

  const updateGameState = () => {
    if(isWinState()){
      setGameState(`winner${currentPlayer}`)
      window.alert(`GAME OVER! ${currentPlayer} WINS!!!`)
    }
    if(!hasSpacesLeft()){
      setGameState(`tie`)
      window.alert(`GAME OVER! ITS A TIE!!!`)
    }

    function isWinState(){
      return false
    }

    function hasSpacesLeft(){
      return true
    }
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board currentPlayer={currentPlayer} grid={grid} markBoardSquare={markBoardSquare}/>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

