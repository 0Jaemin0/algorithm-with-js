import sys

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    input = list(map(int, sys.stdin.read().split()))
    result = []
    n = input.pop(0)

    for number in input:
        numberList = list(str(number))
        numberList.reverse()
        result.append(int("".join(numberList)))

    print("\n".join(map(str, sorted(result))))
