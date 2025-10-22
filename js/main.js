var quotes = [
  {
    quote : "So many books, so little time.",
    author : "― Frank Zappa" 
  },
  {
    quote : "You miss 100% of the shots you don't take",
    author : "--Wayne Gretzy" 
  },
  {
    quote : "Do not take life too seriously. You will not get out alive",
    author : "--Elbert Hubbard"
  },
  {
    quote : "Resentment is like drinking poison and waiting for your enemies to die.",
    author : "--Nelson Mandela"
  },
  {
    quote : "It's not what happens to you, but how you react to it that matters.",
    author : "--Epictetus"
  },
  {
    quote : "Do not take life too seriously. You will not get out alive.",
    author : "--Elbert Hubbard"
  },
]

var lastQuote = -3

function makeQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.length);
  if(lastQuote === randomQuote){
    randomQuote = (randomQuote + 1) % quotes.length
  }
  lastQuote = randomQuote

  var quoteDesc = quotes[randomQuote];

  document.getElementById('quote').textContent = `"${quoteDesc.quote}"`
  document.getElementById('author').textContent =`${quoteDesc.author}`
}