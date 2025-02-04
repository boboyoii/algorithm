function solution(x) {
    var nums = (x+'').split('');
    var digitSum = nums.reduce((acc,num) => acc+Number(num),0);
    if(x % digitSum === 0) return true;
    return false;
}