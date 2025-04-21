function solution(players, callings) {
    const nameToRank = {};
    const rankToName = {};
   
    players.forEach((name,idx) => {
        nameToRank[name] = idx+1;
        rankToName[idx+1] = name;
        
    });
    
    callings.forEach((name) => {
        const currentRank = nameToRank[name];
        const passed = rankToName[currentRank-1];
        
        nameToRank[name] = currentRank-1;
        nameToRank[passed] = currentRank;
        
        rankToName[currentRank] = rankToName[currentRank-1];
        rankToName[currentRank-1] = name;
        
    });
    
    return Object.values(rankToName);
}