function solution(diffs, times, limit) {
    let left = 1;
    let right = 100_000;
    let result = 1;
    
    const solve = (level) => {
        let sum = 0;
        
        for(let i = 0; i < diffs.length; i++) {
            const diff = diffs[i];
            
            if(diff <= level) sum += times[i];
            else sum += (times[i-1] + times[i]) * (diff - level) + times[i];
        }
        
        return sum;
    }
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const time = solve(mid);
        
        if(time <= limit) {
            result = mid;
            right = mid - 1;
        } else left = mid + 1;
    }
    
    return result;
}