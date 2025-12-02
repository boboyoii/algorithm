function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    let nonCompletionIndex = -1;
    
    for(let i=0; i<completion.length; i++){
        if(participant[i] === completion[i]) continue;
        nonCompletionIndex = i;
        break;
    }
    
    if(nonCompletionIndex === -1) 
        nonCompletionIndex = participant.length - 1;
    
    return participant[nonCompletionIndex];
}