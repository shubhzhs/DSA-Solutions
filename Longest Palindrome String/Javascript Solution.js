function longestPalindrome(s) {
  let n = s.length;
  let longest_palindrome = "";

  for (let i = 0; i < n; i++) {
    // check for even-length palindrome
    let left = i;
    let right = i + 1;
    while (left >= 0 && right < n && s[left] == s[right]) {
      left -= 1;
      right += 1;
    }
    let current_palindrome = s.slice(left+1, right);  // substring that is a palindrome
    if (current_palindrome.length > longest_palindrome.length) {
      longest_palindrome = current_palindrome;
    }

    // check for odd-length palindrome
    left = i - 1;
    right = i + 1;
    while (left >= 0 && right < n && s[left] == s[right]) {
      left -= 1;
      right += 1;
    }
    current_palindrome = s.slice(left+1, right);  // substring that is a palindrome
    if (current_palindrome.length > longest_palindrome.length) {
      longest_palindrome = current_palindrome;
    }
  }

  return longest_palindrome;
}
