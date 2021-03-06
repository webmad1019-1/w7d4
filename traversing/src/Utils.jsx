export const randomFloat = (min, max) => Math.random() * (max - min) + min;
export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
export const shuffle = array => array.sort(() => Math.random() - 0.5);