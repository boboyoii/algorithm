function solution(t, p) {
    var answer = 0;
    var digit = p.length;
    var base = Number(p);
    for(let i=0; i<=t.length-digit; i++){
        var num = Number(t.slice(i, i+digit));
        if(base >= num)
            answer++;
    }
    return answer;
}