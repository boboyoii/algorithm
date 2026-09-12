function solution(num, total) {
    const answer = [];
    let max = Math.ceil(total/num);
    let min = Math.floor(total/num);
    
    while(answer.length < num){
        answer.push(max);
        if(max !== min) answer.push(min);
        
        max += 1;
        min -= 1;
    }
    
    return answer.sort((a,b) => a-b);
}