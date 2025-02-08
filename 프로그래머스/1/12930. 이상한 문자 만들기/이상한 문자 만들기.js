function solution(s) {
    var words = s.split(' ');
    console.log(words);
    var answer = '';
    var newWords = [];
    var even = true;
    for(const word of words){
        for(const char of word){
            if(even){
                answer += char.toUpperCase();
                even = false;
            }else{
                answer += char.toLowerCase();
                even = true;
            } 
        }
        even = true;
        newWords.push(answer);
        answer = '';
    }
    return newWords.join(' ');
}