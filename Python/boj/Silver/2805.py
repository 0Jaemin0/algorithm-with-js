import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, M = map(int, input().split(" "))
    tree_height = sorted(list(map(int, input().split(" "))))
    result = 0

    start = 1
    end = tree_height[N - 1]

    while start <= end:
        sum = 0
        mid = (start + end) // 2

        for h in tree_height:
            if h - mid > 0:
                sum += h - mid

        if sum >= M:
            result = max(result, mid)
            start = mid + 1
        else:
            end = mid - 1

    print(result)
