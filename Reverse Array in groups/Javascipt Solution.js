class Solution {
  reverseInGroups(arr, n, k) {
    for (let i = 0; i < n; i += k) {
      let start = i;
      let end = Math.min(i + k - 1, n - 1);
      while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
    return arr;
  }
}