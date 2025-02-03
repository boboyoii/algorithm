function solution(n) {
    var num = 1;
    while(num**2 <= n){
        if(num**2 === n) return(num+1)**2;
        num++;
    }
    return -1;
}