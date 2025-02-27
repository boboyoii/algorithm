function solution(N, stages) {
    let answer = [];
    let user = [];
    for(let i=0; i<=N+1; i++)
        user[i] = 0;
    
    for(let i=0; i<stages.length; i++)
        user[stages[i]]++;
    
    let fRate = {};
    for(let i=1; i<=N; i++){
        let challenger = 0, success = 0;
        for(let j=i; j<=N+1; j++){
            if( j != i ) success += user[j];
            challenger += user[j];
        }
        fRate[i] = success / challenger;
    }
    let sorted = Object.entries(fRate).sort((a, b) => a[1] - b[1]);
    answer = sorted.map((v) => Number(v[0]));
    return answer;
}