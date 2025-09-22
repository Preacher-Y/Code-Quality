function reverseVowels(str) {
  const vowels = str.match(/[aeiouAEIOU]/g);
  return str.replace(/[aeiouAEIOU]/g, () => vowels.pop());
}