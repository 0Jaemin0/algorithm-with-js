import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    numbers = sorted(list(map(int, input().split(" "))))
    start = 0
    end = N - 1
    min = abs(numbers[start] + numbers[end])
    result = [numbers[start], numbers[end]]

    while start < end:
        sum = abs(numbers[start] + numbers[end])

        if sum < min:
            min = sum
            result = [numbers[start], numbers[end]]

            if sum == 0:
                break
        elif numbers[start] + numbers[end] > 0:
            end -= 1
        else:
            start += 1

    print(result[0], result[1])
