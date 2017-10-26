// Thinking in Components  > PropTypes and DefaultProps


//props is a common value name
function Application(props) {
  return (
//className is like class in HTML
    <div className="scoreboard">
      <div className="header">
  {/* made the h1 into a property */}
        <h1>{props.title}</h1>
      </div>
      <div className="players">

        <div className="player">
          <div className="player-name">
            George Garcia
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">
                -
              </button>
              <div className="counter-score">
                31
              </div>
              <button className="counter-action increment">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
          Nuvi Njinimbam
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">
                -
              </button>
              <div className="counter-score">
                20
              </div>
              <button className="counter-action increment">
                +
              </button>
            </div>
          </div>
        </div>

        <div className="player">
          <div className="player-name">
            Wieland Mego
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">
                -
              </button>
              <div className="counter-score">
                21
              </div>
              <button className="counter-action increment">
                +
              </button>
            </div>
          </div>
        </div>

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

  <Application  />, document.getElementById('container'));