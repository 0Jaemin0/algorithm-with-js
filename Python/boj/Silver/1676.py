import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    factorial = 1
    count = 0

    for i in range(1, N + 1):
        factorial *= i

    reverse = list(str(factorial))
    reverse.reverse()

    for i in reverse:
        if i == "0":
            count += 1
        else:
            break

    print(count)
