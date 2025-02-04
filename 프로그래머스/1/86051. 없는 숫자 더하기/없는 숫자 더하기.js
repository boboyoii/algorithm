function solution(numbers) {
    var sum = [...new Set(numbers)].reduce((acc, num) => acc+num, 0);
    var array = Array.from({length:10},(v,i) => i);
    var total = array.reduce((acc, num) => acc+num, 0);
    return total - sum;
}