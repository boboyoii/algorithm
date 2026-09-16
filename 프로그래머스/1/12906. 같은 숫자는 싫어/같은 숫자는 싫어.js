function solution(arr)
{
    const answer = [];
    arr.forEach((v) => {
        if(answer.length === 0) return answer.push(v);
        if(answer[answer.length-1] === v) return;
        answer.push(v);
    })
    
    return answer;
}