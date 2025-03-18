function solution(survey, choices) {
    let score = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0};
    let answer = '';
    
    choices.forEach((val,idx) => {
        const [a,b] = survey[idx].split('');
        if(val < 4) score[a] += (4-val);
        else if (val > 4) score[b] += (val-4);
    });
    
    let type;
    let i = 0;
    for(let key in score){
        if(i % 2 === 0) type = key;
        
        else{
            if(score[key] > score[type]) type = key;
            answer += type;
        }
        
        i++;
    }
    return answer;
}