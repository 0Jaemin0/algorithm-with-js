import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    result = 0
    cols = [False] * N
    diagonal_left = [False] * (2 * N - 1)
    diagonal_right = [False] * (2 * N - 1)

    def dfs(row):
        global result

        if row == N:
            result += 1
            return

        for col in range(N):
            if (
                cols[col]
                or diagonal_left[row + col]
                or diagonal_right[row - col + N - 1]
            ):
                continue

            cols[col] = True
            diagonal_left[row + col] = True
            diagonal_right[row - col + N - 1] = True

            dfs(row + 1)

            cols[col] = False
            diagonal_left[row + col] = False
            diagonal_right[row - col + N - 1] = False

    dfs(0)
    print(result)
