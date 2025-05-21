import sys
from itertools import combinations

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    result = []

    for i in range(1, 11):
        for j in combinations(numbers, i):
            num = "".join(list(map(str, sorted(j, reverse=True))))
            result.append(int(num))

    result.sort()

    if len(result) <= N:
        print(-1)
    else:
        print(result[N])
