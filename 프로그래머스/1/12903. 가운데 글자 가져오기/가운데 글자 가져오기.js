function solution(s) {
    const middle = Math.floor(s.length / 2);
    return (s.length % 2) ? s.substr(middle,1) : s.substr(middle-1, 2);
}