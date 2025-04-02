import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    map = [list(map(int, input())) for _ in range(N)]
    result = []

    def isSame(row, col, size):
        start = map[row][col]

        return all(
            start == map[i][j]
            for i in range(row, row + size)
            for j in range(col, col + size)
        )

    def divide(row, col, size):
        if not isSame(row, col, size):
            divideSize = size // 2

            result.append("(")
            divide(row, col, divideSize)
            divide(row, col + divideSize, divideSize)
            divide(row + divideSize, col, divideSize)
            divide(row + divideSize, col + divideSize, divideSize)
            result.append(")")
        else:
            result.append(str(map[row][col]))

    divide(0, 0, N)
    print("".join(result))
