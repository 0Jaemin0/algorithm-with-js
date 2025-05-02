import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    ropes = [int(input()) for _ in range(N)]
    ropes.sort(reverse=True)
    weight = 0

    for i in range(N):
        weight = max(weight, ropes[i] * (i + 1))

    print(weight)
