function solution(survey, choices) {
    var MBTI = {};
    const types = ['RT', 'CF', 'JM', 'AN'];
    
    types.forEach((type) => 
        type.split('').forEach((char) => MBTI[char] = 0));
    
    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];
        MBTI[choice > 4 ? agree : disagree] += Math.abs(4-choice);
    });
    
    return types.map(([a,b]) => MBTI[b] > MBTI[a] ? b : a).join('');
    
}