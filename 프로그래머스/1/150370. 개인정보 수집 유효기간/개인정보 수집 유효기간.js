function solution(today, terms, privacies) {
    let destroyNum = [];
    const periods = {};
    const [year, month, date] = today.split('.').map(Number);
    const todates = year * 12 * 28 + month * 28 + date;
    
    for(let term of terms){
        const [type, period] = term.split(' ');
        periods[type] = Number(period);
    }
    
    privacies.forEach((v, i) => {
        const [day, type] = v.split(' ');
        const date = day.split('.').map(Number);
        const dates = date[0] * 12 * 28 + date[1] * 28 + date[2] + periods[type] * 28;
        if(todates >= dates) destroyNum.push(i+1);
    });
    
    return destroyNum;
}