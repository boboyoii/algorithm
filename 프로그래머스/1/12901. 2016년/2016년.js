const DAY = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const BASE_DAY_INDEX = 5; 

function solution(a, b) {
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) { 
        totalDays += DAYS_IN_MONTH[i]; 
    }
    totalDays += b;
    
    const dayIndex = (BASE_DAY_INDEX + totalDays - 1) % 7;;
    return DAY[dayIndex];
}