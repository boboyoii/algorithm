function solution(s, skip, index) {
    var answer = [];
    
    const alphabet = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(97 + i)
    );
    const skipSet = new Set(skip);
    const validAlphabet = alphabet.filter((val) => !skipSet.has(val));
     
    [...s].forEach((char) => {
        const oldIndex = validAlphabet.indexOf(char);
        const newIndex = (oldIndex + index) % validAlphabet.length;
        const newPassword = validAlphabet[newIndex];
        answer.push(newPassword);
    });
    
    return answer.join('');
}