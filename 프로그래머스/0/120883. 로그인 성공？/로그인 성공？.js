function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const member = db.find(([db_id, db_pw]) => db_id === id);
    
    if(!member) return "fail";
    if(member[1] !== pw) return "wrong pw";
    return "login";
}