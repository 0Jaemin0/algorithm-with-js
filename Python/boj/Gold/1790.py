import sys
import math

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, k = list(map(int, input().split(" ")))
    result = 0
    digit = 1
    count = 9

    while k > digit * count:
        k -= digit * count
        result += count
        digit += 1
        count *= 10

    result += ((k - 1) // digit) + 1

    if result > N:
        print(-1)
    else:
        print(str(result)[(k - 1) % digit])
