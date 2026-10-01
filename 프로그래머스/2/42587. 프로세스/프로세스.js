function solution(priorities, location) {
    let current = 0;
    const soredPriorities = [...priorities].sort((a,b) => a-b);
    let order = 0;
    
    while(priorities[location] !== -1){
        const process = priorities[current];
        
        if(process < soredPriorities[soredPriorities.length-1]){
            current = (current+1) % priorities.length;
            continue;
        }
        
        soredPriorities.pop();
        priorities[current] = -1;
        order += 1;
    }
    
    return order;
}