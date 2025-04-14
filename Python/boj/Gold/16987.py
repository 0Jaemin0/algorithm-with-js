import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    eggs = [list(map(int, input().split())) for _ in range(N)]
    result = 0

    def dfs(now):
        global result
        hit = False

        if now == N:
            count = sum(1 for d, w in eggs if d <= 0)
            result = max(count, result)

            return

        for i in range(N):
            if i == now or eggs[i][0] <= 0 or eggs[now][0] <= 0:
                continue

            hit = True
            eggs[now][0] -= eggs[i][1]
            eggs[i][0] -= eggs[now][1]
            dfs(now + 1)
            eggs[now][0] += eggs[i][1]
            eggs[i][0] += eggs[now][1]

        if not hit:
            dfs(now + 1)

    dfs(0)
    print(result)
