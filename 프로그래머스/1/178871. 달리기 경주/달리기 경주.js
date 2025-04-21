function solution(players, callings) {
    const ranks = {};
    players.forEach((name,idx) => ranks[name] = idx);
    
    for(const call of callings){
        const rank = ranks[call];
        const passed = players[rank-1];
        
        players[rank-1] = call;
        players[rank] = passed;
        
        ranks[call] = rank-1;
        ranks[passed] = rank;
    }
    
    return players;
}