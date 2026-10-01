function solution(prices) {
    const periods = [];
    
    for(let i=0; i< prices.length-1; i++){
        let second = 0;
        for(let j=i+1; j<prices.length; j++ ){
            second += 1;
            if(prices[i] > prices[j]) break;
        }
        
        periods.push(second);
    }
    
    periods.push(0);
    
    return periods;
}