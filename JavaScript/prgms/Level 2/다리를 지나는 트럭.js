function solution(bridge_length, weight, truck_weights) {
  const moveTruck = [];
  let totalTime = 1;
  let weightSum = 0;

  while (truck_weights.length || moveTruck.length) {
    if (
      moveTruck.length < bridge_length &&
      truck_weights[0] + weightSum <= weight
    ) {
      weightSum += truck_weights[0];
      moveTruck.push([bridge_length, truck_weights.shift()]);
    }

    totalTime += 1;
    for (let i = 0; i < moveTruck.length; i++) moveTruck[i][0] -= 1;

    if (moveTruck[0][0] === 0) {
      weightSum -= moveTruck[0][1];
      moveTruck.shift();
    }
  }

  return totalTime;
}
