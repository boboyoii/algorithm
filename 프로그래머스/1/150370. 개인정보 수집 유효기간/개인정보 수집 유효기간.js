function solution(today, terms, privacies) {
    let destroyNum = [];
    const periods = {};
    
    for(let term of terms){
        const [type, period] = term.split(' ');
        periods[type] = Number(period);
    }
    
    for(let i = 0; i<privacies.length; i++){
        const [day, type] = privacies[i].split(' ');
        let [year, month, date] = day.split('.').map(Number);
        date -= 1;
        month += periods[type];
        if(date === 0){
            date = 28;
            month -= 1;
        }
        year += (Math.floor((month-1)/12));
        month = month % 12 || 12;
        const deadLine = `${String(year)}.${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')}`;
        if(deadLine < today)
            destroyNum.push(i+1);
    }
    return destroyNum;
}