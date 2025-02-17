function solution(food) {
    var answer = [0];
    for(let i=food.length-1; i>=0; i--){
        if(food[i] < 2)
            continue;
        var n = Math.floor(food[i]/2);
        answer.unshift(`${i}`.repeat(n));
        answer.push(`${i}`.repeat(n));
    }
    return answer.join('');
}