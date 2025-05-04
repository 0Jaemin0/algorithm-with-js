import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    T = int(input())

    for _ in range(T):
        N = int(input())
        price = list(map(int, input().split(" ")))
        maxPrice = 0
        sum = 0

        for i in range(N - 1, -1, -1):
            if price[i] > maxPrice:
                maxPrice = price[i]
            else:
                sum += maxPrice - price[i]

        print(sum)
