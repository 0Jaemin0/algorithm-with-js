import sys
from collections import Counter


def isSamePaper(row, col, size):
    start = paper[row][col]

    return all(
        paper[i][j] == start
        for i in range(row, row + size)
        for j in range(col, col + size)
    )


def divide(row, col, size):
    if not isSamePaper(row, col, size):
        divideSize = size // 3

        divide(row, col, divideSize)
        divide(row, col + divideSize, divideSize)
        divide(row, col + 2 * divideSize, divideSize)
        divide(row + divideSize, col, divideSize)
        divide(row + divideSize, col + divideSize, divideSize)
        divide(row + divideSize, col + 2 * divideSize, divideSize)
        divide(row + 2 * divideSize, col, divideSize)
        divide(row + 2 * divideSize, col + divideSize, divideSize)
        divide(row + 2 * divideSize, col + 2 * divideSize, divideSize)
    else:
        result[paper[row][col]] += 1


if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    paper = [list(map(int, input().split())) for _ in range(N)]
    result = Counter()

    divide(0, 0, N)

    print(result[-1])
    print(result[0])
    print(result[1])
