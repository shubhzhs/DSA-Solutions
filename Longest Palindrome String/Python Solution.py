class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        longest_palindrome = ""

        for i in range(n):
            left = i
            right = i + 1
            while left >= 0 and right < n and s[left] == s[right]:
                left -= 1
                right += 1
            current_palindrome = s[left+1:right]
            if len(current_palindrome) > len(longest_palindrome):
                longest_palindrome = current_palindrome

            left = i - 1
            right = i + 1
            while left >= 0 and right < n and s[left] == s[right]:
                left -= 1
                right += 1
            current_palindrome = s[left+1:right]
            if len(current_palindrome) > len(longest_palindrome):
                longest_palindrome = current_palindrome

        return longest_palindrome
