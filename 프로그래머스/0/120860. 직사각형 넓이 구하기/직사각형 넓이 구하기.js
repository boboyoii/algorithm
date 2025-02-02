function solution(dots) {
    var width = Math.abs(dots[0][0] === dots[1][0] ? dots[0][0]-dots[2][0] : dots[0][0]-dots[1][0]);
    var height = Math.abs(dots[0][1] === dots[1][1] ? dots[0][1]-dots[2][1] : dots[0][1]-dots[1][1]);
    return width*height;
}