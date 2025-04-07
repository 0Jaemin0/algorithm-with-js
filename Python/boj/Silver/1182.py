import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, S = map(int, input().split())
    numbers = list(map(int, input().split()))
    result = 0

    def dfs(count, sum):
        global result

        if count == N:
            return

        now = sum + numbers[count]

        if now == S:
            result += 1

        dfs(count + 1, now)
        dfs(count + 1, sum)

    dfs(0, 0)
    print(result)
