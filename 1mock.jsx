// Thinking in Components  > Mocking up our Application

function Application() {
  return (
//className is like class in HTML
    <div className="scoreboard">
      <div className="header">
        <h1>Scoreboard</h1>
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
ReactDOM.render(
  <Application/>, document.getElementById('container'));