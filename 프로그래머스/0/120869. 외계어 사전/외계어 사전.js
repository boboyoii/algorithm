function solution(spell, dic) {
    for(let word of dic){
        if( spell.length === word.length && includesAll([...spell], word))
            return 1;
    }
    return 2;
}

function includesAll(spell, word){
    var idx = 0;
    for(let alphabet of word){
        if((idx=spell.indexOf(alphabet)) === -1)
            return false;
        spell.splice(idx,1);
    }
    return true;
}