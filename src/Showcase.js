import bulbasaur from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Bulbasaur";
  const data = { type: "Grass", move: "Vine Whip" };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbasaur}></img>
      <h2>
        Bulbosaur's type is {data.type} and one of their moves is {data.move}
      </h2>
    </div>
  );
}

export default Showcase;
