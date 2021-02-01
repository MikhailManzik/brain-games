export default (maxRange) => {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * maxRange);
  return randomNumber;
};
