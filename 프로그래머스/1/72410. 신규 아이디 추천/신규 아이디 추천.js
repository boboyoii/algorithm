function solution(new_id) {
    let id = new_id.toLowerCase(); // 1단계
    id = id.replace(/[~!@#$%\^&\*\(\)=\+\[\{\]\}:?,<>\/]/g, ''); // 2단계
    id = id.replace(/\.{2,}/g, '.'); // 3단계
    id = id.replace(/^\.|\.$/g,''); // 4단계 
    if(!id) id = 'a'; // 5단계
    if(id.length > 15) id = id.slice(0,15).replace(/\.$/,''); // 6단계 
    if(id.length < 3) id += id[id.length-1].repeat(3 - id.length); //7단계
    return id;
}