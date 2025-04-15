import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    N = int(input())
    numbers = [input() for _ in range(N)]

    def calNumberSum(number):
        sum = 0

        for i in number:
            if i.isdigit():
                sum += int(i)

        return sum

    numbers.sort(key=lambda x: (len(x), calNumberSum(x), x))
    print("\n".join(numbers))
