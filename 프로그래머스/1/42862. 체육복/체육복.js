function solution(n, lost, reserve) {
    let notLost = n - lost.length;
    let borrower = 0;
    
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
  
    lost.forEach((l) => {
        const rent = isRentable(l,reserve);
        if(!rent || (l !== rent && lost.includes(rent))) return;
        reserve = reserve.filter((r) => r!== rent);
        borrower++;
    });
    
    return notLost + borrower
}

function isRentable(l, reserve){
    let rent;
    
    if(reserve.includes(l))
        rent = l;
    else if(reserve.includes(l-1))
        rent = l-1;
    else if(reserve.includes(l+1))
        rent = l+1;
    
    return rent;
}
