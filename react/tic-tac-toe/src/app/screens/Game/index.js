import React from 'react';
import Spinner from 'react-spinkit';
import classNames from 'classnames';
import { connect } from 'react-redux';

import styles from './styles.module.scss';
import Board from './components/Board';
import { calculateWinner } from './utils'

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
    console.log(this.props.games);

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
        <div className={styles.partidas}>
          <h1>Partidas</h1>
          <Spinner name="circle" className={classNames({[styles.loadingOff]: this.props.loadingOff})}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    loadingOff: state.loadingOff
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMatches: () => dispatch(actionCreators.getMatches())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
