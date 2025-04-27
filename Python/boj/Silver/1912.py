import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    n = int(input())
    numbers = list(map(int, input().split(" ")))
    dp = [0] * n
    dp[0] = numbers[0]

    for i in range(1, n):
        dp[i] = max(dp[i - 1] + numbers[i], numbers[i])

    print(max(dp))
