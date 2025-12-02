function solution(babbling) {
    const prons = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    babbling.forEach((b)=>{
        const rex = new RegExp(`(${prons.join('|')})`);
        const parts = b.split(rex).filter(v => v != '');
        let before = '';
        
        for(let i=0; i<parts.length; i++){
            if(!prons.includes(parts[i])) break;
            if(before == parts[i]) break;
            before = parts[i];
            if(i == parts.length-1) count += 1;
        }
        
    });
    
    return count;
    
}