function solution(nums) {
    const uniquePokemon = new Set(nums);
    
    if(uniquePokemon.size < Math.floor(nums.length/2))
        return uniquePokemon.size;
    return Math.floor(nums.length/2);
}