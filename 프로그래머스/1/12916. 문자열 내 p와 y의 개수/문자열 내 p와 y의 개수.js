function solution(s){
    var str = s.toLowerCase().split('');
    var pCount = str.filter(c => c === 'p').length;
    var yCount = str.filter(c => c === 'y').length;
    return (pCount === yCount) ? true : false;
}