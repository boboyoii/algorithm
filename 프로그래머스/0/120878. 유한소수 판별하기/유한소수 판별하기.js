function solution(a, b) {
    const getGCD = (x,y) => (y === 0 ? x : getGCD(y, x % y));
    
    const gcd = getGCD(a,b);
    let denom = b / gcd;
    
    while(denom % 2 === 0 || denom % 5 === 0){
        if(denom % 2 === 0) denom /= 2;
        if(denom % 5 === 0) denom /= 5;
    }
    
    if(denom === 1) return 1;
    
    return 2;
}
