import sys
from itertools import combinations

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split(" "))
    numbers = [i for i in range(1, N + 1)]
    combination = combinations(numbers, M)

    for i in combination:
        print(" ".join(map(str, i)))
