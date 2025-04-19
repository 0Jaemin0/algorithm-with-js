import sys
from collections import Counter

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, C = map(int, input().split())
    numbers = list(map(int, input().split()))
    counter = Counter(numbers)
    result = []

    sortedCount = sorted(counter.items(), key=lambda x: x[1], reverse=True)

    for n, c in sortedCount:
        for _ in range(c):
            result.append(n)

    print(" ".join(map(str, result)))
