const pair = {
    ']':'[',
    ')':'(',
    '}':'{',
}

function solution(s) {
    let correctCount = 0;
    
    for(let i=0; i< s.length; i++){
        let attempt = 0;
        const stack = [];
        for(let j=i; attempt < s.length; j = (j+1) % s.length){
            if(stack.length === 0)
                stack.push(s[j]);
            else{
                if(stack[stack.length-1] == pair[s[j]])
                    stack.pop();
                else
                    stack.push(s[j]);
            }
            attempt++;
        }
        if(stack.length === 0)
            correctCount++;
    }
    
    return correctCount;
}