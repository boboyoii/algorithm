function solution(id_list, report, k) {
    var answer = Array.from({length : id_list.length} , () => 0);
    var uniqueReport = Array.from(new Set(report));
    var reportedID = {};
    uniqueReport.forEach((v) => {
        var [user, reported] = v.split(' ');
        if(!(reported in reportedID)) reportedID[reported] = 1;
        else reportedID[reported]++;
    });
    uniqueReport.forEach((v) => {
        var [user, reported] = v.split(' ');
        if(reportedID[reported] >= k) answer[id_list.indexOf(user)]++;
    });
    return answer;
}