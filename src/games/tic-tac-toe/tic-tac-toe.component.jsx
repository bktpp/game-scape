import { Link } from "react-router-dom";
import { useState } from "react";
import winningCombos from "./winning-combos";

import "./tic-tac-toe.styles.scss";

function TicTacToe() {
   const [tileValues, setTileValues] = useState(Array(9).fill(""));
   const [isPlayersTurn, setIsPlayersTurn] = useState(true);
   const [pickedTiles, setPickedTiles] = useState([]);
   // const [userPicks, setUserPicks] = useState([Array(3).fill(""), Array(3).fill("")]);
   const [userPicks, setUserPicks] = useState([]);
   const [computerPicks, setComputerPicks] = useState([]);

   const check = [1, 2, 3];

   function checkWinner(picks) {
      console.log(picks);
      const isEqual = check.every((value, index) => value === picks[index]);

      if (isEqual) {
         alert("congrats you won");
      } else {
         console.log("no winner");
      }
   }

   function handleClick(index) {
      if (pickedTiles.includes(index)) {
         alert("spot already picked. try again");
      } else if (!pickedTiles.includes(index)) {
         setTileValues((previousValues) => {
            const newValues = [...previousValues];
            if (isPlayersTurn) {
               newValues[index] = "X";
               setUserPicks((picks) => {
                  const updatedPicks = [...picks, index + 1];
                  checkWinner(updatedPicks);
                  return updatedPicks;
               });
               setIsPlayersTurn(!isPlayersTurn);
            } else if (!isPlayersTurn) {
               newValues[index] = "O";
               setIsPlayersTurn(!isPlayersTurn);
            }
            setPickedTiles((tiles) => [...tiles, index]);
            return newValues;
         });
      }
   }

   function handleClearBoard() {
      setIsPlayersTurn(true);
      setTileValues(Array(9).fill(""));
      setPickedTiles([]);
   }

   const tiles = tileValues.map((value, index) => (
      <div key={index} className="tile" onClick={() => handleClick(index)}>
         <div className="tile-content">{value}</div>
      </div>
   ));

   return (
      <div className="main-container">
         <Link to={"/"}>
            <button>Home</button>
         </Link>
         <h1> Tic Tac Toe</h1>
         <div className="gameboard-container">{tiles}</div>
         <button onClick={handleClearBoard}>Reset</button>
      </div>
   );
}

export default TicTacToe;
