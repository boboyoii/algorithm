function solution(num) {
    var time = 0;
    while(time < 500){
        if(num === 1) return time;
        if(num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
        time++;
    }
    return -1;
}