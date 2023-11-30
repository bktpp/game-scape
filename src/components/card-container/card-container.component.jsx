import Card from "../card/card.component";

function CardContainer() {
   return (
      <div>
         <Card game={"tic-tac-toe"}>Tic Tac Toe</Card>
         <Card game={"connect-four"}>Connect Four</Card>
         <Card game={"memory"}>Memory</Card>
      </div>
   );
}

export default CardContainer;
