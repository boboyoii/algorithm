function solution(n, w, num) {
    var answer = 0;
    do{
        answer++;
        num += ((Math.ceil(num/w) * w) - num) * 2 + 1;
    }while(num<=n);
    return answer;
}