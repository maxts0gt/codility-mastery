const isAnagrams = (one, two) => {
  if (one.length !== two.length) {
    return false;
  }

  let hashOne = {};

  for (let i = 0; i < one.length; i++) {
    const currentLetter = one[i];
    hashOne[currentLetter] = hashOne[currentLetter] + 1 || 1;
  }

  for (let j = 0; j < two.length; j++) {
    const currentLetter = two[j];
    if (!hashOne[currentLetter]) {
      return false;
    } else {
      hashOne[currentLetter]--;
    }
  }
  return true;
};

console.log(isAnagrams("rat", "cat"));
console.log(isAnagrams("anagrams", "ramsanag"));
