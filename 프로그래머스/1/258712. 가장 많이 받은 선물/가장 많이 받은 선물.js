function solution(friends, gifts) {
    const N = friends.length;

    const giftCount = Array.from(
        { length: N },
        () => Array(N).fill(0)
    );
    
    const indexMap = new Map();
    friends.forEach((name, idx) => {
        indexMap.set(name, idx);
    });
    
    let giftScore = Array(N).fill(0);
    
    gifts.forEach(gift => {
        const [from, to] = gift.split(' ');
        const fromIndex = indexMap.get(from);
        const toIndex = indexMap.get(to);
        giftCount[fromIndex][toIndex] += 1;
        giftScore[fromIndex] += 1;
        giftScore[toIndex] -= 1;
    });
    
    let nextGift = Array(N).fill(0);
    
   for(let i=0; i<friends.length-1; i++){
       for(let j=i+1; j<friends.length; j++){
           if(giftCount[i][j] > giftCount[j][i]) nextGift[i] += 1;
           else if(giftCount[i][j] < giftCount[j][i]) nextGift[j] += 1;
           else{
               if(giftScore[i] > giftScore[j]) nextGift[i] += 1;
               else if(giftScore[i] < giftScore[j]) nextGift[j] += 1;
           }
       }
   }
    
    
   return Math.max(...nextGift); 
}