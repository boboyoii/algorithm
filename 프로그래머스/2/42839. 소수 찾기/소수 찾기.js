function solution(numbers) {
        console.log(isDecimal(1));

    var answer = 0;
    return answer;
    
}

function getCombination(numbers){
    
}

function isDecimal(number){
    if(number === 1 || number === 2) return false;
    
    for(let i = 2; i< number; i++){
        if(number % i === 0) return false;
    }
    
    return true;
}