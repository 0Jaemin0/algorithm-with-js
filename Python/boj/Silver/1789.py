import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    num = 0
    count = 0

    while True:
        if N > num:
            num += 1
            N = N - num
            count += 1
        else:
            print(count)
            break
