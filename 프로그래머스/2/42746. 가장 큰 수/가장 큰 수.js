function solution(numbers) {
    if(numbers.every(num => num === 0)) return "0";
    
    numbers.sort((a,b) =>{
        const aFirst = `${a}${b}`;
        const bFirst = `${b}${a}`;
        
        return bFirst - aFirst;       
    })
    
    return numbers.join('');

}