function solution(answers) {
    const sopuza = {
        1 : {
            answer : [1,2,3,4,5],
            answerIndex : 0,
        },
        2 : {
            answer : [2,1,2,3,2,4,2,5],
            answerIndex : 0,
        },
        3 : {
            answer : [3,3,1,1,2,2,4,4,5,5],
            answerIndex : 0,
        },
    };
    
    const correctCounts = [0,0,0];
    
    for(let i=0; i<answers.length; i++){
        for(let j=1; j<=3; j++){
            const student = sopuza[j];
            
            if (answers[i] === student.answer[student.answerIndex]) {
                correctCounts[j - 1] += 1; 
            }
            
            student.answerIndex = (student.answerIndex + 1) % student.answer.length;
        }
    }
    
    const topScorers = [];
    const maxCorrect = Math.max(...correctCounts);

    for (let i = 0; i < correctCounts.length; i++) {
        if (correctCounts[i] === maxCorrect) {
            topScorers.push(i + 1);
    }
}
    
    return topScorers.sort();
}