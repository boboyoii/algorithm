function solution(s, n) {
    var answer = '';
    for(char of s){
        if(!/[A-Za-z]/.test(char)){
            answer += ' ';
            continue;
        }
        if(char === char.toUpperCase()){
            var ascii = (char.charCodeAt() + n - 65) % 26;
            answer += String.fromCharCode(ascii+65);
        }else{
            var ascii = (char.charCodeAt() + n - 97) % 26;
            answer += String.fromCharCode(ascii+97);
        }
    }
    return answer;
}