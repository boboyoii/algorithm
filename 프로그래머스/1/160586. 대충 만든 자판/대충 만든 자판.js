function solution(keymap, targets) {
    var result = [];
    const minKeyMap = {};
    
    targets.forEach((target) => {
        let count = 0;
        let isPossible = true;
        
        for(char of [...target]){
            if(char in minKeyMap){
                count += minKeyMap[char];
                continue;
            }
            
            let min = -1;
            keymap.forEach((key) => {
                const index = key.indexOf(char);
                if(index === -1) return;
                if(min === -1) {
                    min = index;
                    return;
                }
                if(min > index) min = index;
            });
            
            if(min === -1){
                isPossible = false;
                break;
            }
            
            minKeyMap[char] = min+1;
            count += (min+1);
        }
        
        if(!isPossible) result.push(-1);
        else result.push(count); 
    });
    
    return result;
}