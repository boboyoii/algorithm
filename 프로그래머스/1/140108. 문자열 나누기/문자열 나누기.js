function solution(s) {
    let result = 0;
    let base = '';
    const stack = [];
    
    [...s].forEach((char) => {
        if(stack.length === 0) {
            base = char;
            result += 1;
        }
        
        if(base === char) stack.push(char);
        else stack.pop();
    });
    
    return result;
}