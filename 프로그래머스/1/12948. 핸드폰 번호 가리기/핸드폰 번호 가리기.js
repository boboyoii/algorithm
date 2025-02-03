function solution(phone_number) {
    var length = phone_number.length;
    var answer = "*".repeat(length-4);
    answer += phone_number.slice(length-4,length);
    return answer;
}