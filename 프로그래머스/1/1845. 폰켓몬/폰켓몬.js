function solution(nums) {
    const selectBase = nums.length / 2;
    const uniqNums = new Set(nums);
    
    if(selectBase > uniqNums.size) return uniqNums.size;
    return selectBase;
}