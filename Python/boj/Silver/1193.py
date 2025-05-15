import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    X = int(input())
    sum = 0
    i = 1

    while True:
        sum += i

        if sum >= X:
            break

        i += 1

    index = sum - X

    if i % 2 == 0:
        print("{}/{}".format(i - index, 1 + index))
    else:
        print("{}/{}".format(1 + index, i - index))
