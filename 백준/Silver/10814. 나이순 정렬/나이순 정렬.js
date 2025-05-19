function solution(input) {
  const members = input
    .filter((_, idx) => idx != 0)
    .map((v) => {
      const [age, name] = v.split(' ');
      return { age: Number(age), name };
    });

  const membersByAge = {};

  members.forEach((member) => {
    if (!(member.age in membersByAge))
      membersByAge[member.age] = [`${member.age} ${member.name}`];
    else membersByAge[member.age].push(`${member.age} ${member.name}`);
  });

  return Object.values(membersByAge).flat().join('\n');
}

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

console.log(solution(input));
