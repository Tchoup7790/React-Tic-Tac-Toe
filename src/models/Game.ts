import { Symbol } from "./Symbol";
import User from "./User";

export class Game {
  private user: User;
  private game_board: Array<Array<string>>;

  constructor(user: User) {
    this.user = user;

    this.game_board = [
      [Symbol.None, Symbol.None, Symbol.None],
      [Symbol.None, Symbol.None, Symbol.None],
      [Symbol.None, Symbol.None, Symbol.None],
    ];
  }

  private winner_is(): string {
    this.game_board.forEach((row) => {
      if (row[0] === row[1] && row[0] === row[2]) {
        return row[0];
      }
    });

    for (let i = 0; i < 3; i++) {
      if (this.game_board[i][0] === this.game_board[i][1] && this.game_board[i][0] === this.game_board[i][2]) {
        return this.game_board[i][0];
      }
    }

    if (this.game_board[0][0] === this.game_board[1][1] && this.game_board[0][0] === this.game_board[2][2]) {
      return this.game_board[0][0];
    }

    if (this.game_board[0][2] === this.game_board[1][1] && this.game_board[0][2] === this.game_board[2][0]) {
      return this.game_board[0][2];
    }

    return Symbol.None;
  }

  private board_full(): boolean {
    this.game_board.forEach((row) => {
      row.forEach((column) => {
        if (column === Symbol.None) {
          return false;
        }
      });
    });

    return true;
  }
}
