function solution(A, B) {
    let str = A;
    let answer = -1;
    for(let i=0; i<A.length; i++){
        if(str === B){
            answer = i;
            break;
        }
        str =  str.substr(str.length-1) + str.substr(0, str.length-1);
    }
    
    return answer;
}