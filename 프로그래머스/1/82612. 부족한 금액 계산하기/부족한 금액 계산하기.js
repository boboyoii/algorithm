function solution(price, money, count) {
    var need = (price + price*count) * count / 2;
    if(need < money) return 0;
    return need - money;
}