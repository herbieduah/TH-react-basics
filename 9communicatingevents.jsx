// Designing Data Flow  > Communicating Events

var PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andrew Chalkley",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Holligan",
    score: 42,
    id: 3,
  },
];

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

// var Counter = React.createClass({
//   propTypes: {
//     initialScore: React.PropTypes.number.isRequired,
//   },
  
//   getInitialState: function() {
//     return {
//       score: this.props.initialScore,
//     }
//   },
  
//   incrementScore: function() {
//     this.setState({
//       score: (this.state.score + 1),
//     });
//   },
  
//   decrementScore: function() {
//     this.setState({
//       score: (this.state.score - 1),
//     });
//   },
  
//   render: function() {
//     // return (
//     //   <div className="counter">
//     //     <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//     //     <div className="counter-score"> {this.state.score} </div>
//     //     <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//     //   </div>
//     // );
//   }
// });

function Counter(props) {
    return (
        <div className="counter">
          <button className="counter-action decrement" onClick ={function() {props.onChange(-1);}}> - </button>
          <div className="counter-score"> {props.score} </div>
          <button className="counter-action increment" onClick ={function() {props.onChange(+1);}}> + </button>
        </div>
      );

}

Counter.propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired, 
  onScoreChange: React.PropTypes.func.isRequired,
};

var Application = React.createClass({
    propTypes : {
        title: React.PropTypes.string,
        initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
        })).isRequired,
      },

    getDefaultProps: function(){
        return {
            title: "Scoreboard",
        }
    },

    getInitialState: function() {
        return {
            players: this.props.initialPlayers,
        };
    },

    onScoreChange: function(index, delta) {
        // console helps see which player is which
        // console.log('Onscore', index , delta);
        this.state.players[index].score += delta;
        this.setState(this.state);
    },

    render: function() {
        return (
            <div className="scoreboard">
              <Header title={this.props.title} />
            
              <div className="players">
              {/* helps pass index */}
                {this.state.players.map(function(player, index) {
                  return (
                      <Player 
                      onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
                      name={player.name} 
                      score={player.score}
                      key={player.id} />
                       );
                       {/* need to in bind it */}
                }.bind(this))}
              </div>
            </div>
          );
    },
})

// function Application(props) {
//   return (
//     <div className="scoreboard">
//       <Header title={props.title} />
    
//       <div className="players">
//         {props.players.map(function(player) {
//           return <Player name={player.name} score={player.score} key={player.id} />
//         })}
//       </div>
//     </div>
//   );
// }

// Application.propTypes = {
//   title: React.PropTypes.string,
//   players: React.PropTypes.arrayOf(React.PropTypes.shape({
//     name: React.PropTypes.string.isRequired,
//     score: React.PropTypes.number.isRequired,
//     id: React.PropTypes.number.isRequired,
//   })).isRequired,
// };

// Application.defaultProps = {
//   title: "Scoreboard",
// }

ReactDOM.render(<Application initialPlayers={PLAYERS}/>, document.getElementById('container'));