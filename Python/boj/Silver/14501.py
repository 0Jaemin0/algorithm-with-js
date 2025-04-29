import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    day = [list(map(int, input().split(" "))) for _ in range(N)]
    day.insert(0, [0, 0])
    dp = [0] * (N + 1)

    def findIndex(now):
        max = 0
        index = 0

        for i in range(1, now):
            if i + day[i][0] <= now and max < dp[i]:
                max = dp[i]
                index = i

        return index if index != 0 else now

    for i in range(1, N + 1):
        index = findIndex(i)
        dp[i] = dp[index] + day[i][1] if i + day[i][0] <= N + 1 else 0

    print(max(dp))
