function solution(x) {
    var num = x;
    var sum = 0;
    do{
        sum += x%10;
        x = Math.floor(x/10);
    }while(x > 0)
    return !(num%sum)
}