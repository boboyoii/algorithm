function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);
    var sum=0;
    for(const price of d){
        if((sum+= price) <= budget)
            answer++;
    }
    return answer;
}