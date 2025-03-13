function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let index1 = 0, index2 = 0;
    
    for(let i=0; i<goal.length; i++){
        if(goal[i] == cards1[index1])
            index1++;
        else if(goal[i] == cards2[index2])
            index2++;
        else{
            answer = 'No';
            break;
        }
    }
   
    return answer;
}