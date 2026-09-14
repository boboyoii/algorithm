function solution(participant, completion) {
    const nameCounts = {};
    participant.forEach((name) => {
        if(!(name in nameCounts)) return nameCounts[name] = 1;
        return nameCounts[name] += 1;
    })
        
    completion.forEach((name) => {
        nameCounts[name] -= 1;
    })
    const answer = Object.keys(nameCounts).filter(key => nameCounts[key] === 1);
    
    return answer[0];
}