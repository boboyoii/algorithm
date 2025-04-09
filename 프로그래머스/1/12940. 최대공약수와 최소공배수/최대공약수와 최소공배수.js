function solution(n, m) {
    let answer = [];
    
    let arr = [n,m].sort((a,b) => b-a);
    
    while(true){
        if(arr[1] === 0){
            answer.push(arr[0]);
            break;
        }
        gcd(arr);
    }
    
    let i = 1;
    
    while(true){
        if((m*i) % n === 0 && (m*i) % m === 0){
            answer.push(m * i);
            break;
        }
        i++;   
    }
    return answer;
}

function gcd(arr){
    const temp = arr[1];
    arr[1] = arr[0] % arr[1];
    arr[0] = temp;
}
