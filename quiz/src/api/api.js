export const fetchCategories = async () => {
  const responseCategorie = await fetch("https://opentdb.com/api_category.php");
  if (!responseCategorie) {
    return new Error(" Probleme lors de chargement des categories ");
  }
  const data = await responseCategorie.json();
  return data.trivia_categories;
};

export const fetchQuestions = async () => {
  const responseQuestions = await fetch(
    "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
  );
  if (!responseQuestions.ok) {
    throw new Error(" Probleme lors de récuperation des questions");
  }
  const data = await responseQuestions.json();
  console.log("data", data.results);
  return data.results;
};
