function solution(polynomial) {
    const terms = polynomial.split(" + ");
    
    const x_term = terms.filter((v) => v.endsWith('x')).reduce((acc, v) => {
        if(v === 'x') return acc+1;
        return acc + parseInt(v);
    }, 0)
    
    const constant_term = terms.filter((v) => !(v.endsWith('x'))).reduce((acc,v) => acc+Number(v), 0);
    const answer = [];
    
    if(x_term !== 0) {
        if(x_term === 1) 
            answer.push('x');
        else
            answer.push(x_term+'x');
    }
        
    if(constant_term !== 0) answer.push(constant_term);
    
    return answer.join(' + ');
    
}