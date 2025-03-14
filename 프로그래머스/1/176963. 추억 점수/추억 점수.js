function solution(name, yearning, photo) {
    var answer = [];
    
    photo.forEach((p) => {
        let score = 0;
        p.forEach((n) => {
            if(name.indexOf(n) != -1)
                score += yearning[name.indexOf(n)];
        });
        answer.push(score);
    });
    
    return answer;
}