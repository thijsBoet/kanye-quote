async function getQuote() {
  const response = await fetch('https://api.kanye.rest/');
  const data = await response.json();
  return data.quote;
}