function solution(board) {
    const mineCoords = [];
    let safeZone = board.length * board[0].length;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++)
            if(board[i][j] === 1) {
                mineCoords.push([i,j]);
                safeZone-=1;
            }
    }
    
    const dir = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    mineCoords.forEach(([x,y]) => {
        for(const [dirX, dirY] of dir){
            const nX = x+dirX;
            const nY = y+dirY;
            
            if(nX < 0 || nX >= board.length || nY < 0 || nY >= board[0].length) continue;
            if(board[nX][nY] === 1) continue;
            board[nX][nY] = 1;
            safeZone -= 1;
        }
    })
    
    return safeZone;
}