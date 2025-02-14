function solution(n) {
    var base_3 = [];
    while(n>0){
        var remain = n % 3;
        base_3.unshift(remain);
        n = Math.floor(n/3);
    }
    return base_3.reduce((acc,val,idx)=> acc+(val * 3**idx),0);
}