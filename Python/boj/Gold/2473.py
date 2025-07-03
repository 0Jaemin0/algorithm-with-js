import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    solution = sorted(list(map(int, input().split())))
    result = [solution[0], solution[1], solution[2]]
    min_sum = solution[0] + solution[1] + solution[2]

    for i in range(0, N - 2):
        fix = solution[i]
        start = i + 1
        end = N - 1

        while start < end:
            total = fix + solution[start] + solution[end]

            if total == 0:
                print(fix, solution[start], solution[end])
                sys.exit()
            elif abs(total) < abs(min_sum):
                min_sum = total
                result = [fix, solution[start], solution[end]]

            if total < 0:
                start += 1
            else:
                end -= 1

    print(*result)
