const direction = {
    'right' : 'R',
    'left' : 'L'
};

function solution(numbers, hand) {
    let result = '';
    let leftHand = 10;
    let rightHand = 12;
    
    numbers.forEach((num) => {
        if(num == 1 || num == 4 || num == 7){
            leftHand = num;
            return result += 'L';
        }
        else if(num == 3 || num == 6 || num == 9){
            rightHand = num;
            return result += 'R';
        }
        if(num === 0) num = 11;
        console.log(leftHand);
        console.log(rightHand);
        
        const leftDistance =Math.floor( Math.abs((num - leftHand) / 3))
                            + Math.abs((num - leftHand) % 3);
        const rightDistance =  Math.floor(Math.abs((num - rightHand) / 3)) 
                            + Math.abs((num - rightHand) % 3);
        
        if(rightDistance < leftDistance){
            rightHand = num;
            result += 'R';
        }
        else if (rightDistance > leftDistance){
            leftHand = num;
            result += 'L';
        }
        else {
            result += direction[hand];
            if(direction[hand] == 'L')
                leftHand = num;
            else
                rightHand = num;
        }
    });
    
    return result;
}