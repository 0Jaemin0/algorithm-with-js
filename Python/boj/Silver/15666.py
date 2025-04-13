import sys
from itertools import combinations_with_replacement

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))
    result = []
    visited = set()
    numbers.sort()

    permutation = combinations_with_replacement(numbers, M)

    for i in permutation:
        if not i in visited:
            visited.add(i)
            result.append(i)

    for j in result:
        print(" ".join(map(str, j)))
