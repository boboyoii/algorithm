function solution(n) {
    var numbers = n.toString().split('');
    var answer = numbers.sort((a,b) => b-a).join('');
    return Number(answer);
}