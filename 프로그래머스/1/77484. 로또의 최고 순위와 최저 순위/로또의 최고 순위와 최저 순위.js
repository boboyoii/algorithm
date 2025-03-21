const RANKING = { 6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6};

function solution(lottos, win_nums) {
    const lost = lottos.filter((num) => num === 0).length;
    const exist = lottos.filter((num) => win_nums.includes(num)).length;
    return [RANKING[lost+exist], RANKING[exist]]
}