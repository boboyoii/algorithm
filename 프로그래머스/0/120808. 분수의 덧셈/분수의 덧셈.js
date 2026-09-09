function solution(numer1, denom1, numer2, denom2) {
    const denom_res = denom1 * denom2
    const numer_res = numer1*denom2 + numer2*denom1;
    
    const divisor = getGCD(denom_res, numer_res);
    
    return [numer_res/divisor ,denom_res/divisor];
    
    
}

function getGCD(a, b) {
  while (b > 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
