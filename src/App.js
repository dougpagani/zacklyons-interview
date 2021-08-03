import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

export default function App() {
  return <Game/>
}

const Square = ({gameState,markBoardSquare,marking}) => {
  return (
    <button className="square" disabled={gameState !== 'currentlyPlaying'} onClick={markBoardSquare}>
      {marking}
    </button>
  );
}

const Board = ({currentPlayer,gameState,grid,markBoardSquare}) => {
  const renderSquare = (row, column) => {
    return <Square gameState={gameState} markBoardSquare={()=>{markBoardSquare(row,column)}} marking={grid[row][column]}/>;
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
  const [gameState,setGameState] = useState('currentlyPlaying') // ['currentlyPlaying','tie','winnerX','winnerO']

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
      const hasVerticalWin = isVerticalWin()
      const hasHorizontalWin = isHorizontalWin()
      const hasDiagonalWin = isDiagonalWin()
      return hasVerticalWin || hasHorizontalWin || hasDiagonalWin
    }

    function isVerticalWin(){
      return false
    }

    function isHorizontalWin(){
      return false
    }

    function isDiagonalWin(){
      return false
    }

    function hasSpacesLeft(){
      let row1 = grid[0].some(square => square === '')
      let row2 = grid[1].some(square => square === '' )
      let row3 = grid[2].some(square => square === '' )
      return row1 || row2 || row3
    }
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board currentPlayer={currentPlayer} gameState={gameState} grid={grid} markBoardSquare={markBoardSquare}/>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

