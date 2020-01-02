import React from 'react';

import styles from './styles.module.scss';
import Board from './components/Board';
import { calculateWinner } from './utils'

class Game extends React.Component {
  state = {
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true
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
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          {/* eslint-disable-next-line react/jsx-no-bind */}
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
      </div>
    );
  }
}

export default Game;
