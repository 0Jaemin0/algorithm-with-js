import sys
from itertools import combinations

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    while True:
        testCase = list(map(int, input().split(" ")))

        if testCase.pop(0) == 0:
            break

        combination = combinations(testCase, 6)
        for i in combination:
            print(" ".join(map(str, i)))

        print("")
