function solution(arr) {
    var answer = [...arr];
    arr.sort((a,b) => a-b);
    answer.splice(answer.indexOf(arr[0]),1);
    if(answer.length === 0) answer.push(-1);
    return answer;
}