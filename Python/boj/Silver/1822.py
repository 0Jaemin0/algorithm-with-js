import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    a_count, b_count = map(int, input().split())
    A = set(map(int, input().split()))
    B = set(map(int, input().split()))

    result = sorted(A - B)

    print(len(result))
    if result:
        print(" ".join(map(str, result)))
