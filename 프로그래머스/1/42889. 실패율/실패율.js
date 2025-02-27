function solution(N, stages) {
    let fRate = [];
    for(let i=1; i<=N; i++){
        const reach = stages.filter((v) => v >= i).length;
        const curr = stages.filter((v) => v > i).length;
        fRate.push([i, curr/reach]);
    }
    fRate.sort((a,b) => a[1] - b[1]);
    return fRate.map((v) => v[0]);
}