function calculateAverage(numbers) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }
  let average = sum / count;
  return average;
}