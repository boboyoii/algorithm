function solution(array, commands) {
    var answer = [];
    for(let command of commands){
        var newArr = array.slice(command[0]-1, command[1]);
        newArr.sort((a,b) => a-b);
        answer.push(newArr[command[2]-1]);
    }
    return answer;
}