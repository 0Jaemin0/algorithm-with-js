import sys
from itertools import combinations

if __name__ == "__main__":
    try:
        sys.stdin = open("input.txt", "r")
    except FileNotFoundError:
        pass

    seat = [list(input()) for _ in range(5)]
    seatIndex = [[i, j] for i in range(5) for j in range(5)]
    combi = [list(i) for i in combinations(seatIndex, 7)]
    result = 0

    def isMakeTeam(students):
        count = sum(1 for [x, y] in students if seat[x][y] == "Y")

        return count < 4

    def isConnected(students):
        queue = [students[0]]
        visited = [[False for _ in range(5)] for _ in range(5)]
        dx = [-1, 1, 0, 0]
        dy = [0, 0, -1, 1]
        count = 1

        visited[students[0][0]][students[0][1]] = True

        while len(queue):
            x, y = queue.pop(0)

            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]

                if nx >= 0 and nx < 5 and ny >= 0 and ny < 5:
                    if not visited[nx][ny] and [nx, ny] in students:
                        queue.append([nx, ny])
                        visited[nx][ny] = True
                        count += 1

        return count == 7

    for c in combi:
        if isMakeTeam(c) and isConnected(c):
            result += 1

    print(result)
