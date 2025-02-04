function solution(s) {
    const regex = /^\d*$/;
    if(s.length === 4 || s.length === 6)
        if(regex.test(s))
            return true;
    return false;
}