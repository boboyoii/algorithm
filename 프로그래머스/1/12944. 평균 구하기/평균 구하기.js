function solution(arr) {
    var sum = arr.reduce((acc,num) => acc+num, 0);
    return sum / arr.length;
}