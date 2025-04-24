import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    T = int(input())
    case = [int(input()) for _ in range(T)]
    dp = [[0, 0] for _ in range(max(case) + 1)]

    for i in range(0, max(case) + 1):
        if i == 0:
            dp[i] = [1, 0]
        elif i == 1:
            dp[i] = [0, 1]
        else:
            dp[i][0] = dp[i - 1][0] + dp[i - 2][0]
            dp[i][1] = dp[i - 1][1] + dp[i - 2][1]

    for i in case:
        print(" ".join(map(str, dp[i])))
