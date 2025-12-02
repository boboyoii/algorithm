function solution(wallpaper) {
    wallpaper = wallpaper.map(line => line.split(''));
    let lux = luy = rux = ruy = -1;
    
    wallpaper.forEach((line, idx) => {
        if(!line.includes('#')) return;
        if(lux === -1) lux = idx;
        rux = idx+1;
        
        const index = line.indexOf('#');
        const lastIndex = line.lastIndexOf('#');
        
        if(luy === -1) luy = index;
        if(ruy === -1) ruy = lastIndex + 1;
        
        if(luy > index) luy = index;
        if(ruy < lastIndex + 1) ruy = lastIndex + 1;
    });
    
    return [lux, luy, rux, ruy];
}