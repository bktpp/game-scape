import Title from "../components/title/title.component";
import CardContainer from "../components/card-container/card-container.component";

function Root() {
   return (
      <div>
         <Title />
         <p>Pick a game and start playing!</p>
         <CardContainer />
      </div>
   );
}

export default Root;
