import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, r, c = map(int, input().split())

    def divide(row, col, size, count):
        if size == 1:
            if row == r and col == c:
                print(count)
            return

        divideSize = size // 2

        if r < row + divideSize and c < col + divideSize:
            divide(row, col, divideSize, count)
        elif r < row + divideSize and c >= col + divideSize:
            divide(row, col + divideSize, divideSize, count + divideSize * divideSize)
        elif r >= row + divideSize and c < col + divideSize:
            divide(
                row + divideSize, col, divideSize, count + 2 * divideSize * divideSize
            )
        else:
            divide(
                row + divideSize,
                col + divideSize,
                divideSize,
                count + 3 * divideSize * divideSize,
            )

    divide(0, 0, 2**N, 0)
