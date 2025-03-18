function solution(board, moves) {
    let answer = 0;
    let basket = [];
    
    moves.forEach((num) => {
        for(let i=0; i<board[0].length; i++){
            if(board[i][num-1] !== 0) {
                basket.push(board[i][num-1]);
                board[i][num-1] = 0;
                if(basket[basket.length-1] === basket[basket.length-2]){
                basket.pop();
                basket.pop();
                answer += 2;
                }
                break;
            }
        }
    });
    
    return answer;
}