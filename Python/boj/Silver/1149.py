import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    houses = [list(map(int, input().split())) for _ in range(N)]
    dp = [[0] * 3 for _ in range(N)]

    dp[0] = houses[0]

    for i in range(1, N):
        dp[i][0] = min(dp[i - 1][1], dp[i - 1][2]) + houses[i][0]
        dp[i][1] = min(dp[i - 1][0], dp[i - 1][2]) + houses[i][1]
        dp[i][2] = min(dp[i - 1][0], dp[i - 1][1]) + houses[i][2]

    print(min(dp[N - 1]))
