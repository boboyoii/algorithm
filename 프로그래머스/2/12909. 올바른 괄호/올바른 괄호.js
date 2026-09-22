function solution(s){
    const temp = []
    
    for (const char of s) {
        if(char === '(') {
            temp.push(char);
            continue;
        }
        
        if(temp.length === 0 || temp[temp.length-1] === ')') return false;
        temp.pop();
        
    }
    
    if(temp.length === 0) return true;
    return false;
    
}