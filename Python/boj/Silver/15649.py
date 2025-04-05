import sys
from itertools import permutations

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split())
    list = [i for i in range(1, N + 1)]

    result = permutations(list, M)

    for i in result:
        print(" ".join(map(str, i)))
