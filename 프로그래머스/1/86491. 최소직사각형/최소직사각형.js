function solution(sizes) {
    var long = sizes.map(size => size[0]>size[1] ? size[0] : size[1]);
    var short = sizes.map(size => size[0]>size[1] ? size[1] : size[0]);
    
    var w = Math.max(...long);
    var h = Math.max(...short);
    
    return w*h;
}