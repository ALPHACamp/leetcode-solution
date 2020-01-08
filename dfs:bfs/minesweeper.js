/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    const h = board.length;
    const w = board[0].length;
    let row = click[0];
    let col = click[1];
    if (board[row][col]=='M') {
        board[row][col] = 'X';
        return board;
    }
    else if (row>=0&&row<h&&col>=0&&col<w&&board[row][col]=='E') {
        let count = 0;
        for (let i=-1; i<2; i++) {
            for (let j=-1; j<2; j++) {
                if (row+i>=0&&row+i<h&&col+j>=0&&col+j<w&&board[row+i][col+j]=='M') {
                    count++;
                }
            }
        }
        if (count>0) {
            board[row][col] = count.toString(10);
        }
        else {
            board[row][col] = 'B';
            for (let i=-1; i<2; i++) {
                for (let j=-1; j<2; j++) {
                    if (row+i>=0&&row+i<h&&col+j>=0&&col+j<w) {
                        updateBoard(board,[row+i,col+j],h,w);
                    }
                }
            }
        }
    }
    return board;
};
