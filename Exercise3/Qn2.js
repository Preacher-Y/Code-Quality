function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0) return false; 
  if (num <= 3) return true;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}
