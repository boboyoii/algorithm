function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0; i<n; i++){
        answer[i] = '';
        let num1 = arr1[i].toString(2).padStart(n, "0").split('');
        let num2 = arr2[i].toString(2).padStart(n, "0").split('');
        for(let j=0; j<n; j++){
            if(num1[j] == '0' && num2[j] == '0')
                answer[i] += ' ';
            else
                answer[i] += '#';
        }
    }
    return answer;
}