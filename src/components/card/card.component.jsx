import { Link } from "react-router-dom";

function Card({ children, game }) {
   return (
      <div>
         <h2>{children}</h2>
         <Link to={game}>
            <button>Play Game</button>
         </Link>
      </div>
   );
}

export default Card;
