function solution(quiz) {
    const answer = [];
    
    quiz.forEach((expression)=>{
        const token = expression.split(" ").map(v => {
            if(!isNaN(v)) return Number(v);
            return v;
        });
        const operator = token[1];
        
        if(operator === '+'){
            if(token[0] + token[2] === token[4]) answer.push('O')
            else answer.push('X')
        }else if(operator === '-'){
            if(token[0] - token[2] === token[4]) answer.push('O')
            else answer.push('X')
        }
    })
    
    return answer;
}