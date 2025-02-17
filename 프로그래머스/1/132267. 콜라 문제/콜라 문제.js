function solution(a, b, n) {
    var answer = 0;
    var rest = 0;
    do{
        rest = n % a;
        n = Math.floor(n / a) * b;
        answer += n;
        n = rest+n;
    }while(n >= a)
     
    return answer;
}