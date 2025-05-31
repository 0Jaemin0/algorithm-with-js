import sys
from collections import Counter

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    cards = list(map(int, input().split()))
    M = int(input())
    s_cards = list(map(int, input().split()))

    counter = Counter(cards)

    result = [str(counter[num]) for num in s_cards]
    print(" ".join(result))
