function solution(progresses, speeds) {
    let answer = [1];
    let maxPeroid = Math.ceil((100-progresses[0])/speeds[0]);
    
    for(let i=1 ;i<progresses.length; i++){
        const period = Math.ceil((100-progresses[i])/speeds[i]);
        if(maxPeroid >= period) {
            answer[answer.length-1]++;
            continue;
        }
        answer.push(1);
        maxPeroid = period;
    }
    
    return answer;    
}