function solution(s) {
    var answer = Array.from({length:s.length}, () => -1);
    
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i],i) !== s.indexOf(s[i]))
            answer[i] = s.indexOf(s[i],i) - s.lastIndexOf(s[i], i-1);
    }
    return answer;
}