function solution(dots) {
    if(getSlope(dots[0],dots[1]) === getSlope(dots[2],dots[3])) return 1;
    if(getSlope(dots[0],dots[2]) === getSlope(dots[1],dots[3])) return 1;
    if(getSlope(dots[0],dots[3]) === getSlope(dots[1],dots[2])) return 1;
    return 0;
    
}

function getSlope(a,b){
    const [x1,y1] = a;
    const [x2,y2] = b;
    
    return (y2-y1) / (x2-x1);
}