import React from 'react';
import Spinner from 'react-spinkit';
import classNames from 'classnames';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import Board from './components/Board';
import { calculateWinner } from './utils'

import { withConditionalRendering } from '../../components/AuthHoc';
import actionCreators from '../../../redux/game/actions';

class Game extends React.Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true
  }
  
  componentDidMount() {
    this.props.getMatches();
  }
  
  handleClick = i => {
    const { history, xIsNext, stepNumber} = this.state;

    const currHistory = history.slice(0, stepNumber + 1);
    const current = currHistory[currHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...currHistory, {squares}],
      stepNumber: currHistory.length,
      xIsNext: !xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  getStatus(winner) {
    if (winner) {
      return 'Winner: ' + winner;
    } else {
      return 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    const gamesHistory = this.props.games.map(game => {
      return (
        <tr key={game.id}>
          <td>{game.player_one}</td>
          <td>{game.player_two}</td>
          <td>{game.winner}</td>
        </tr>
      )
    });

    let status = this.getStatus(winner);

    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board
            squares={current.squares}
            onClick={ this.handleClick }
          />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div className={styles.games}>
          <h1>Partidas</h1>
          <table>
            <tbody>
            <tr>
              <th>Player One</th>
              <th>Player Two</th>
              <th>Winner</th>
            </tr>
            { this.props.games ? gamesHistory : <Spinner name="circle" className={classNames({[styles.loading]: this.props.gamesLoading})}/>}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  games: state.games.games,
  gamesLoading: state.games.gamesLoading
});

const mapDispatchToProps = dispatch => ({
  getMatches: () => dispatch(actionCreators.getMatches())
});

export default connect(mapStateToProps, mapDispatchToProps)(withConditionalRendering(Game));
