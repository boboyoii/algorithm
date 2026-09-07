function solution(lines) {
    const counts = {};
    lines.forEach(([start, end]) => {
        for(let i = start; i<end; i++){
            if(i in counts) counts[i]++;
            else counts[i] = 1;
        }
    })
    
    const dupCount = Object.values(counts).filter((count) => count > 1);
    return dupCount.length;
}