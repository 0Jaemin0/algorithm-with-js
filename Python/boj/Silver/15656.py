import sys
from itertools import product

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))
    numbers.sort()

    permutation = product(numbers, repeat=M)

    for i in permutation:
        print(" ".join(map(str, i)))
