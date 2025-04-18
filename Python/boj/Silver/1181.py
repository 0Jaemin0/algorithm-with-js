import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    words = list(set([input() for _ in range(N)]))

    words.sort(key=lambda x: (len(x), x))
    print("\n".join(words))
