function solution(video_len, pos, op_start, op_end, commands) {
    const start = 0;
    const end = minuteToSecond(video_len);
    const opStart = minuteToSecond(op_start);
    const opEnd = minuteToSecond(op_end);
    let vedioTime = minuteToSecond(pos);
    
    if(vedioTime >= opStart && vedioTime <= opEnd)
        vedioTime = opEnd;
    
    commands.forEach((command) => {
        if(command === 'prev')
            vedioTime = (vedioTime - 10) < 0 ? 0 : vedioTime - 10;
        
        if(command === 'next')
            vedioTime = (vedioTime + 10) > end ? end : vedioTime + 10;
        
        if(vedioTime >= opStart && vedioTime <= opEnd)
            vedioTime = opEnd;
    });
    
    return secondToMinute(vedioTime);
}
    
function minuteToSecond(time){
    const [minute, second] = time.split(':').map(Number);
    return minute*60 + second;
}

function secondToMinute(time){
    const minute = String(Math.floor(time/60));
    const second = String(time % 60);
    return `${minute.padStart(2,'0')}:${second.padStart(2,'0')}`
}