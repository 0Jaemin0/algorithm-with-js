import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    numbers = list(map(int, input().split(" ")))
    dp = [0] * N

    dp[0] = 1

    def findIndex(i):
        index = -1
        max = 0

        for j in range(0, i):
            if numbers[j] < numbers[i] and max < dp[j]:
                max = dp[j]
                index = j

        return index if index != -1 else i

    for i in range(1, N):
        index = findIndex(i)
        dp[i] = dp[index] + 1

    print(max(dp))
