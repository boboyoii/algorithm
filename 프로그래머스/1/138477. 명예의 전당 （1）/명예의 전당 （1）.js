function solution(k, score) {
    let answer = [];
    let honor = [];
    
    score.forEach((s)=>{
        honor.push(s);
        honor.sort((a,b) => b-a);
        if(honor.length > k) honor.pop();
        answer.push(honor[honor.length-1]);
    });
    
    return answer;
}