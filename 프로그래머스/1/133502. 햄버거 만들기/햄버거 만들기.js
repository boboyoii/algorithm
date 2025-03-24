const BURGER = [1,2,3,1];
const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

function solution(ingredient) {
    let count = 0;
    let stack = [];
    
    ingredient.forEach((item) => {
        stack.push(item);
        if(equals(stack.slice(-4), BURGER)){
            stack.splice(-4);
            count += 1;
        }
    })
    return count;
}