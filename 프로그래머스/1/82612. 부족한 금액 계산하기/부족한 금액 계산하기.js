function solution(price, money, count) {
    var need = 0;
    for(let i = 1; i<=count; i++)
        need += price*i;
    if(need < money) return 0;
    return need - money;
}