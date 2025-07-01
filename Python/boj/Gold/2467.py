import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    solution = sorted(list(map(int, input().split())))
    left = 0
    right = N - 1
    min_sum = abs(solution[left] + solution[right])
    result = [solution[left], solution[right]]

    while left < right:
        sum = solution[left] + solution[right]

        if min_sum > abs(sum):
            min_sum = abs(sum)
            result = [solution[left], solution[right]]

            if min_sum == 0:
                break

        if sum > 0:
            right -= 1
        else:
            left += 1

    print(result[0], result[1])
