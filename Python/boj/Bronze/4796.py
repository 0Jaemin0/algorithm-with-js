import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    result = []
    index = 1

    while True:
        L, P, V = list(map(int, input().split(" ")))

        if L == 0 and P == 0 and V == 0:
            break

        print("Case {}: {}".format(index, V // P * L + min(L, V % P)))
        index += 1
