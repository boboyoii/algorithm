function solution(score) {
    const avgs = score.map(([eng, math]) => (eng + math) / 2);
    const indexOfAvg = {};
    avgs.forEach((avg,idx) => {
        if(avg in indexOfAvg) return indexOfAvg[avg].push(idx);
        indexOfAvg[avg] = [idx];
    })

    const ranks = Array(score.length).fill(0);
    let rank = 1;
    for(let value of [...new Set(avgs)].sort((a,b) => b-a)){
        for(let i=0; i<indexOfAvg[value].length; i++)
            ranks[indexOfAvg[value][i]] = rank;
        rank += indexOfAvg[value].length;
    }
    
    return ranks;
    
}