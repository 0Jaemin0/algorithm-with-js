import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    E, S, M = list(map(int, input().split(" ")))
    e, s, m = [1, 1, 1]
    year = 1

    while True:
        if E == e and S == s and M == m:
            break

        year += 1
        e += 1
        s += 1
        m += 1

        if e == 16:
            e = 1

        if s == 29:
            s = 1

        if m == 20:
            m = 1

    print(year)
