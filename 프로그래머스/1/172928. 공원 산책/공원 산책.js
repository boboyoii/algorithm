function solution(park, routes) {
    park = park.map((v) => v.split(''));
    var x, y;
    for(let i = 0; i<park.length; i++){
        x = park[i].indexOf('S');
        if(x !== -1){
            y = i;
            break;
        }
    }
    
    routes = routes.map((v) => v.split(' '));
    var nextX, nextY, obstacle;
    for(var [direction, distance] of routes){
        nextY = y;
        nextX = x;
        obstacle = false;
        if(direction == 'E')
            nextX += Number(distance);
        if(direction == 'W')
            nextX -= Number(distance);
        if(direction == 'S')
            nextY += Number(distance);
        if(direction == 'N')
            nextY -= Number(distance);
        
        if(nextX < 0 || nextX >= park[0].length || 
           nextY < 0 || nextY >= park.length)
            continue;
        
        for(let i = Math.min(y,nextY); i<=Math.max(y,nextY); i++){
            for(let j = Math.min(x,nextX); j<=Math.max(x, nextX); j++)
                if(park[i][j] == 'X'){
                    obstacle = true;
                    break;
                }
        }
        
        if(!obstacle){
            x = nextX;
            y = nextY;
        }
    }
    return [y,x];
}