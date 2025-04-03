import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    result = []

    def star(row, col, size):
        if row % 3 == 1 and col % 3 == 1:
            result.append(" ")
        elif size == 1:
            result.append("*")
        else:
            star(row // 3, col // 3, size // 3)

    for i in range(N):
        for j in range(N):
            star(i, j, N)
        result.append("\n")

    print("".join(result))
