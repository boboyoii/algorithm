function solution(schedules, timelogs, startday) {
    var answer = schedules.length;
    var today = startday;
    for(let i=0; i<schedules.length; i++){
        var time = Math.floor(schedules[i] / 100);
        var minute = schedules[i] % 100 + 10;
        if(minute >= 60){
            time += 1;
            minute = minute % 60;
        }
        for(let j=0; j< 7; j++){
            if(today !== 6 && today !== 7 && timelogs[i][j] > time*100 + minute){
                answer--;
                today = startday;
                break;
             }
            today = (today + 1) % 7 || 7;
        }
    }
    return answer;
}