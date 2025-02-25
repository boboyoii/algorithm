function solution(bandage, health, attacks) {
    var [t, x, y] = bandage;
    var HP = health;
    var limitTime = attacks[attacks.length-1][0];
    var constant = 0;
    var attackTime = 0;
    
    for(let i = 1; i <= limitTime; i++){
        if(attacks[attackTime][0] === i){
            HP -= attacks[attackTime][1];
            if(HP <= 0) return -1;
            constant = 0;
            attackTime++;
            continue;
        }
        constant++;
        if(constant === t){
            constant = 0;
            HP += y;
        }
        HP += x;
        if(HP > health) HP = health;
    }
    return HP;
}