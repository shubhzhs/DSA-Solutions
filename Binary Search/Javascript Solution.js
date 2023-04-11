class Solution {
    binarysearch(arr, n, k) {
        // code here
        let left = 0;
        let right = n - 1;
        
        for (let i = 0; i < arr.length; i++) {
            let mid = left + (right - left) // 2;
            if (arr[mid] == k) {
                return mid
            } else if (arr[mid] < k) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return -1;
    }
}