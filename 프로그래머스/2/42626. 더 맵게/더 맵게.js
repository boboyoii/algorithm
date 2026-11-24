function solution(scoville, K) {
    let count = 0;
    
    while(scoville[0] < K && scoville.length > 1){
        const newScoville = scoville.shift() + scoville.shift() *2;
        scoville.push(newScoville);
        scoville.sort((a,b) => a-b);
        count+=1;
    }
    
    if(scoville[0] < K) return -1;
    
    return count;
}