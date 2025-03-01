function solution(rectangle, characterX, characterY, itemX, itemY) {
  const dRect = rectangle.map((rect) => rect.map((el) => el * 2));
  const board = Array.from({ length: 101 }, () => new Array(101).fill(0));

  dRect.forEach(([startX, startY, endX, endY]) => {
    for (let i = startX; i <= endX; i++) {
      for (let j = startY; j <= endY; j++) {
        if (i === startX || i === endX || j === startY || j === endY) {
          if (board[i][j] === 0) board[i][j] = 1;
        } else board[i][j] = 2;
      }
    }
  });

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const queue = [[characterX * 2, characterY * 2, 0]];

  board[characterX * 2][characterY * 2] = 0;

  while (queue.length) {
    const [x, y, count] = queue.shift();

    if (x === itemX * 2 && y === itemY * 2) return count / 2;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < 101 && ny < 101) {
        if (board[nx][ny] === 1) {
          queue.push([nx, ny, count + 1]);
          board[nx][ny] = 0;
        }
      }
    }
  }
}
