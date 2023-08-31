(async function getQuote() {
  const response = await fetch('https://api.kanye.rest/');
  const { quote } = await response.json();
  document.getElementsByClassName('quote').innerHTML = quote;
  await getQuote();
})();


