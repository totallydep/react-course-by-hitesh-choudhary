const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/totallydep");
  return response.json();
};

export default githubInfoLoader;
