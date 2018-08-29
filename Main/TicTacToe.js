this.prompt = () => {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter the number of the square you wish to occupy\n', (input) => {
      if ( this.board[input] &&
            this.board[input] !== 'X' &&
            this.board[input] !== 'O' ) {

              this.board[input] = this.playerTurn;
              rl.close();
              this.turn(); // once we have validated input, move to the next turn
            } else {
              console.log("Incorrect input. Try again.");
              rl.close();
              this.prompt();
            }
        
        });
    }
