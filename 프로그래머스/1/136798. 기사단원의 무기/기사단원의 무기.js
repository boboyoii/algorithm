function solution(number, limit, power) {
    const powerArr = []
    
    for(let i=1; i<=number; i++){
        let attackPower = countDivisors(i,limit);
        if(attackPower > limit) attackPower = power;
        powerArr.push(attackPower);
    }
    
    return powerArr.reduce((arr,v) => arr+ v, 0);
    
}

function countDivisors(n){
    let count = 0;
    
    for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      if (i * i === n) count += 1;
      else count += 2;
    }
  }
    
    return count;
    
}