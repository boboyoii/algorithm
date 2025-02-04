function solution(s) {
    var answer =  s.split('').sort().reverse();
    return answer.join('');
}