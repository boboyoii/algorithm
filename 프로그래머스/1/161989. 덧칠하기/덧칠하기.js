function solution(n, m, section) {
    let count = 1;
    let start = section[0];
    section.forEach((part) => {
        if(part - start < m) return;
        start = part;
        count += 1
    });
    return count;
}