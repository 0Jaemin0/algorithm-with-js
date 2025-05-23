import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    n, m = list(map(int, input().split(" ")))

    def get_count(num, k):
        count = 0
        temp = k

        while temp <= num:
            count += num // temp
            temp *= k

        return count

    two = get_count(n, 2) - get_count((n - m), 2) - get_count(m, 2)
    five = get_count(n, 5) - get_count((n - m), 5) - get_count(m, 5)

    print(min(two, five))
