import sys
from collections import Counter

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    cards = sorted([int(input()) for _ in range(N)])
    counter = Counter(cards)

    print(counter.most_common()[0][0])
