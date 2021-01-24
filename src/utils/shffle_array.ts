/* eslint-disable import/prefer-default-export */
export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);
