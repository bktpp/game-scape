import { Link } from "react-router-dom";

function TicTacToe() {
   return (
      <div>
         <h1> tic tac toe will be here</h1>
         <Link to={"/"}>
            <button>Home</button>
         </Link>
      </div>
   );
}

export default TicTacToe;
