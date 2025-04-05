import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    star = [[" " for _ in range(2 * N - 1)] for _ in range(N)]
    pattern = ["  *  ", " * * ", "*****"]

    def makeStar(row, col, size):
        if size == 1:
            for i in range(3):
                for j in range(5):
                    star[row + i][col + j] = pattern[i][j]
            return

        makeStar(row, int(col + (3 * size) / 2), size // 2)
        makeStar(row + int((3 * size) / 2), col, size // 2)
        makeStar(row + int((3 * size) / 2), int(col + 3 * size), size // 2)

    makeStar(0, 0, N // 3)

    for i in range(N):
        print("".join(star[i]))
