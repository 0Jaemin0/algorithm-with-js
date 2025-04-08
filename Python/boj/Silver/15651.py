import sys
from itertools import product

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split(" "))
    numbers = [i for i in range(1, N + 1)]
    products = product(numbers, repeat=M)

    for i in products:
        print(" ".join(map(str, i)))
