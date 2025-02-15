const jokes = [
  "Are you a magician? Because every time I look at you, everyone else disappears.",
  "Are you a campfire? Because you’re hot and I can’t resist getting closer.",
  "Are you a bank loan? Because you’ve got my interest.",
  "Are you a camera? Every time I look at you, I smile.",
  "Are you a time traveler? Because I see you in my future.",
  "Are you a star? Because you light up my whole world.",
  "Are you a keyboard? Because you’re just my type.",
  "Are you a rainbow? Because you make everything brighter.",
  "Are you a cat? Because you’ve got me feline all kinds of love.",
  "Are you a blanket? Because you’re so warm and comforting.",
  "Are you a compass? Because without you, I’m lost.",
  "Are you a cupcake? Because you’re sweet and irresistible.",
  "Are you a wifi signal? Because I’m really feeling a connection.",
  "Are you a dream? Because you’re too good to be true.",
  "Are you a snowflake? Because you’re one of a kind.",
  "Are you a library book? Because I can’t stop checking you out.",
  "Are you a candle? Because you make everything feel warm and cozy.",
  "Are you a puzzle? Because I can’t figure out how someone so perfect exists.",
  "Are you a sunset? Because you take my breath away every time I see you.",
  "Are you a coffee? Because you’re brewing up all the right feelings."
];

const gifs = [
  "https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif", // Magician
  "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif", // Campfire
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif", // Bank loan
  "https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif", // Camera
  "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif", // Time traveler
  
];

const jokeElement = document.getElementById("joke");
const gifElement = document.getElementById("gif");
const unlockButton = document.getElementById("unlock-button");

function generateRandomJoke() {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];

  jokeElement.textContent = randomJoke;
  gifElement.src = randomGif;
  gifElement.style.display = "block";
}


// Initial load (optional)
generateRandomJoke();

// Reload joke and GIF on button click
unlockButton.addEventListener("click", generateRandomJoke);