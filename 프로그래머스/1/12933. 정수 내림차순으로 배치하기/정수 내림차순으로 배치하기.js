function solution(n) {
    var nums = [];
    do{
        nums.push(n%10);
        n = Math.floor(n/10);
    }while(n>0)
    
    nums.sort((a,b) => b-a);
    return +nums.join('');
}