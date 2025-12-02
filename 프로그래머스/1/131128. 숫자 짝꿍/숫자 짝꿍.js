function solution(X, Y) {
    const X_count = {};
    [...X].forEach(num => {
        X_count[num] = (X_count[num] || 0) + 1;
    });
    
    console.log(X_count);
    
    const common = [...Y].filter(num =>{
       if(!X_count[num])
           return false;
        X_count[num] -= 1;
        return true;
    }).map(Number);
    
    if(common.length === 0) return '-1';
    if(common.every(n => n === 0)) return '0';
    
    common.sort((a,b) => b-a);
    
    return common.join('');
}