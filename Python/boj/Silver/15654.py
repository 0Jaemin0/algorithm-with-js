import sys
from itertools import permutations

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))
    numbers.sort()

    permutation = permutations(numbers, M)
    for i in permutation:
        print(" ".join(map(str, i)))
