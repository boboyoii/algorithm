function solution(scoville, K) {
    let count = 0;
    scoville.sort((a,b) => a-b);
    let temp = [];
    let i=0;
    let j=0;
    
      while((scoville.length-i)+(temp.length-j) > 1 
          && Math.min(scoville[i] ?? Infinity, temp[j] ?? Infinity) < K){
        
        let first, second;
        
        if((scoville[i] ?? Infinity) <= (temp[j] ?? Infinity)) first = scoville[i++];
        else first = temp[j++];
        
        if((scoville[i] ?? Infinity) <= (temp[j] ?? Infinity)) second = scoville[i++];
        else second = temp[j++];
        
        temp.push(first + second * 2);
        count+=1;
    }
    
    if(Math.min(scoville[i] ?? Infinity, temp[j] ?? Infinity) < K) return -1;
    
    return count;
}