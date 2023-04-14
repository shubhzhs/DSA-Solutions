def reverse_string(string):
    char_list = list(string)
    start = 0
    end = len(char_list) - 1
    while start < end:
        temp = char_list[start]
        char_list[start] = char_list[end]
        char_list[end] = temp
        start += 1
        end -= 1
    reversed_string = "".join(char_list)
    return reversed_string
