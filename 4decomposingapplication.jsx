// Thinking in Components  > Decomposing our Application
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
<Player name ="George Clown" score={21} />
<Player name ="Nuvi Njinimbam" score={1} />
</div> 
</div>
  );
}

Application.propTypes = {
    //React.PropTypes.string.isRequired makes something required of course
    title: React.PropTypes.string,
};

//this is will now be the default property
Application.defaultProps ={
    title: "Scoreboard"
}

ReactDOM.render(
  //anything i change in title below is reflected
//   for strings we can use double quotes
// but for numbers we gotta use the brackets like {}

  <Application  / >,
  document.getElementById('container'));