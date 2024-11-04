export const difficulties = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Medium" },
  { id: "hard", name: "Hard" },
];
export const randomAnswer = (array) => array.sort(() => Math.random() - 0.5);
