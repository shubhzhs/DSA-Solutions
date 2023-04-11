class Solution {
    firstElementKTime(a, n, k) {
        const d = {};
        for (const i of a) {
            if (!(i in d)) {
                d[i] = 1;
            } else {
                d[i] += 1;
            }
            
            if (d[i] === k) {
                return i;
            }
        }
        
        return -1;
    }
}