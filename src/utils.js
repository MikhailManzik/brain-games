export const getRandomNumber = (maxRange) => {
  const randomNumber = Math.floor(Math.random() * maxRange);
  return randomNumber;
};

export const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
