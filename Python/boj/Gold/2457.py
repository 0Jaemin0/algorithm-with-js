import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    days = []
    current = 301
    end = 1201
    index = 0
    endDate = 0
    count = 0

    for _ in range(N):
        sMonth, sDay, eMonth, eDay = map(int, input().split())
        days.append([sMonth * 100 + sDay, eMonth * 100 + eDay])

    days.sort()

    while current < end:
        found = False

        while index < N and days[index][0] <= current:
            endDate = max(endDate, days[index][1])
            index += 1
            found = True

        if not found:
            break

        current = endDate
        count += 1

    if current < end:
        print(0)
    else:
        print(count)
