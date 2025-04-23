import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))
    dp = [0 for _ in range(N + 1)]
    result = []
    sum = 0

    for i in range(1, N + 1):
        dp[i] = numbers[i - 1] + sum
        sum = dp[i]

    for _ in range(M):
        start, end = map(int, sys.stdin.readline().split())
        result.append(dp[end] - dp[start - 1])

    print("\n".join(map(str, result)))
