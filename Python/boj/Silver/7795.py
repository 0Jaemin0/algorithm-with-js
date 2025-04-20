import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    T = int(input())
    case = list(sys.stdin.read().split("\n"))
    result = []

    for i in range(T):
        count = 0
        A = list(map(int, case[i * 3 + 1].split(" ")))
        B = sorted(list(map(int, case[i * 3 + 2].split(" "))), reverse=True)

        for a in A:
            for b in B:
                if a > b:
                    count += len(B) - B.index(b)
                    break

        result.append(count)

    print("\n".join(map(str, result)))
