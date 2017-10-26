// Thinking in Components  > Loops and Lists in JSX10:17


// the ids are the KEYS
var PLAYERS = [
    {
        name: "George",
        score:2,
        id: 1,
    },

    {
        name: "Nuvi",
        score:6,
        id: 2,
    },

    {
        name: "Wieland",
        score:7,
        id: 3,
    },

]

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  //React.PropTypes.string.isRequired makes something required of course
  title: React.PropTypes.string.isRequired
};

function Counter(props){
    return (
        <div className="counter">
        <button className="counter-action decrement">
          -
        </button>
        <div className="counter-score">
          {props.score}
        </div>
        <button className="counter-action increment">
          +
        </button>
      </div>
    );
}

Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
  }
  

//Player functions and Player prop types must be the same
//but also in general as well.
function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
      <Counter score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}

//props is a common value name
function Application(props) {
  return (
 
  <div className = "scoreboard"> 
  <Header title={props.title}/> 
  <div className = "players" > 
  {/* what is the map function? */}
  {/* what below means is what should be rendered for this particular player in our array */}
  {props.players.map(function(player){
      //key is added in
    return <Player name ={player.name} score = {player.score} key={player.id} />
  })}

</div> 
</div>
  );
}

Application.propTypes = {
    //React.PropTypes.string.isRequired makes something required of course
    title: React.PropTypes.string,
    //we could have just done array below
    //but arrayof can take the types of stuff that can go in the array.
    //this .arrayOf(React.PropTypes.object) will accept objects
    // now shape. is a whole new different level
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
    })).isRequired,
};

//this is will now be the default property
Application.defaultProps ={
    title: "Scoreboard"
}

ReactDOM.render(
  //anything i change in title below is reflected
//   for strings we can use double quotes
// but for numbers we gotta use the brackets like {}

//added players in Application because there was an error in the code. still worked though
  <Application  players={PLAYERS} / >,
  document.getElementById('container'));