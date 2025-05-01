import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N, K = map(int, input().split(" "))
    coins = [int(input()) for _ in range(N)]
    count = 0
    index = N - 1

    while K > 0:
        if K >= coins[index]:
            count = count + K // coins[index]
            K = K % coins[index]
        else:
            index = index - 1

    print(count)
