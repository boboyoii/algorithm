function solution(a, b) {
    var answer = a.reduce((acc,v,i) => acc+ (v*b[i]), 0);
    return answer;
}