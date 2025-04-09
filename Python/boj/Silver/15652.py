import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split(" "))
    numbers = []
    result = []

    def dfs(depth, start):
        if depth == M:
            result.append(" ".join(numbers))
            return

        for i in range(start, N + 1):
            numbers.append(str(i))
            dfs(depth + 1, i)
            numbers.pop()

    dfs(0, 1)
    print("\n".join(result))
