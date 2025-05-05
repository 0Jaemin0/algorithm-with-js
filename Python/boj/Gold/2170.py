import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    lines = [tuple(map(int, sys.stdin.readline().split(" "))) for _ in range(N)]
    lines.sort()

    start = lines[0][0]
    end = lines[0][1]
    result = 0

    for i in range(1, N):
        if lines[i][1] <= end:
            continue
        elif end < lines[i][1] and end >= lines[i][0]:
            end = lines[i][1]
        elif end < lines[i][0]:
            result += end - start
            start = lines[i][0]
            end = lines[i][1]

    result += end - start
    print(result)
