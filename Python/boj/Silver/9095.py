import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    T = int(input())
    testcase = [int(input()) for _ in range(T)]
    result = []

    for num in testcase:
        dp = [0] * (num + 1)

        for i in range(1, num + 1):
            if i == 1:
                dp[i] = 1
            elif i == 2:
                dp[i] = 2
            elif i == 3:
                dp[i] = 4
            else:
                dp[i] += dp[i - 1] + dp[i - 2] + dp[i - 3]

        result.append(dp[num])

    print("\n".join(map(str, result)))
