export const fetchCategories = async () => {
  const responseCategorie = await fetch("https://opentdb.com/api_category.php");
  if (!responseCategorie.ok) {
    return new Error(" Problème lors de chargement des categories");
  }
  const data = await responseCategorie.json();
  return data.trivia_categories;
};

export const fetchQuestions = async (category, difficulty) => {
  const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;

  const responseQuestions = await fetch(url);
  if (!responseQuestions.ok) {
    throw new Error(" Problème lors de récuperation des questions");
  }
  const data = await responseQuestions.json();
  return data.results;
};
