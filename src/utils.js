export const getRandomNumber = (minRange, maxRange) => {
  const randomNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
  return randomNumber;
};

export const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
