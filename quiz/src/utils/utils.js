export const difficulties = [
  { id: "easy", name: "Easy" },
  { id: "medium", name: "Medium" },
  { id: "hard", name: "Hard" },
];
export const randomAnswer = (array) => array.sort(() => Math.random() - 0.5);

export const getColor = (score) => {
  if (score <= 1) return "red";
  if (score <= 3) return "yellow";
  return "green";
};
