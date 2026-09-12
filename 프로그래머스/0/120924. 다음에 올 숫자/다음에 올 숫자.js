function solution(common) {
    const [a1, a2, a3] = common;
    
    if(a1+a3 === 2*a2) {
        const diff = a2 - a1; 
        return common[common.length-1] + diff;
    }
    if(a1*a3 === a2*a2){
        const ratio = a2 / a1;
        return common[common.length-1] * ratio;
    }
}