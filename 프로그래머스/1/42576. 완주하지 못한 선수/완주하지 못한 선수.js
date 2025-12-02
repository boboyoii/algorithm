function solution(participant, completion) {
    const countMap = {};
    
    completion.forEach(name => {
        countMap[name] = (countMap[name] || 0) + 1;
    });
    
    const nonCompletion = participant.find(name => {
        if(!countMap[name])
            return true;
        countMap[name] -= 1;
        return false;
    });
    
    return nonCompletion;
}