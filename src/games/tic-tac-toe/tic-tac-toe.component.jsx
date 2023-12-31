import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './tic-tac-toe.styles.scss';

function calculateWinner(squares) {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];

   // This will check if we have a winner and returns that winner
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         return squares[a];
      }
   }

   // check if all indexs are not null
   const remainingSpots = squares.filter((index) => index === null);
   if (remainingSpots.length > 0) {
      return null;
   } else return 'tie';
}

function Square({ value, onSquareClick }) {
   return (
      <button className="square" onClick={onSquareClick}>
         {value}
      </button>
   );
}

function Board() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [isXTurn, setIsXTurn] = useState(true);
   const [playerScore, setPlayerScore] = useState(0);
   const [compScore, setCompScore] = useState(0);

   const winner = calculateWinner(squares);
   let status;

   if (winner && winner !== 'tie') {
      status = `${winner} has won the game!`;
   } else if (winner === 'tie') {
      status = `It's a tie!`;
   } else {
      status = `Current pick: ${isXTurn ? 'X' : 'O'}`;
   }

   useEffect(() => {
      if (!isXTurn && !calculateWinner(squares)) {
         setTimeout(() => {
            getCompChoice();
         }, 1500);
      } else if (winner === 'X') {
         setPlayerScore((score) => (score += 1));
      } else if (winner === 'O') {
         setCompScore((score) => (score += 1));
      }
   }, [squares]);

   function getCompChoice() {
      let emptyIndices = squares.reduce((indices, square, index) => {
         if (square === null) {
            indices.push(index);
         }
         return indices;
      }, []);
      if (emptyIndices.length > 0) {
         let randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
         let nextSquares = squares.slice();
         nextSquares[randomIndex] = 'O';
         setSquares(nextSquares);
         setIsXTurn(true);
      }
   }

   function handleClick(i) {
      if (squares[i] || calculateWinner(squares)) {
         return;
      }
      const nextSquares = squares.slice();
      if (isXTurn) {
         nextSquares[i] = 'X';
         setSquares(nextSquares);
         setIsXTurn(!isXTurn);
      }
   }

   function clearBoard() {
      setSquares(Array(9).fill(null));
      setIsXTurn(true);
   }

   return (
      <>
         <div>{status}</div>
         <div>Player&apos;s score: {playerScore}</div>
         <div>Computer&apos;s score: {compScore}</div>
         <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
         </div>
         <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
         </div>
         <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
         </div>
         <div>
            <button onClick={clearBoard}>Reset</button>
         </div>
      </>
   );
}

function TicTacToe() {
   return (
      <div className="main-container">
         <Link to={'/'}>
            <button>Home</button>
         </Link>
         <h1> Tic-Tac-Toe</h1>
         <div className="gameboard-container">
            <Board />
         </div>
      </div>
   );
}

export default TicTacToe;
