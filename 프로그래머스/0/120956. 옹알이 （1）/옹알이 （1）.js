function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    babbling.forEach(babble => {
        let current = babble;
        
        words.forEach(word => {
            current = current.replaceAll(word, " ");
        })
        
        if (current.trim().length === 0) {
            count += 1;
        }
    })
    
    return count;
}