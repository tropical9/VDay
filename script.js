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
  "https://media3.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif?cid=6c09b952tdwmulql1k571m481vn65id8gw7fa8h87f9i0c71&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif?cid=6c09b952vmqrr5zy81rk50fkjdo6oigjub5kb36t2udjgor6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
"https://media0.giphy.com/media/fXJyMfUdqVCMPAnPJM/giphy.gif?cid=6c09b952yf0e5z873wlrjpp1y31w9l7e4iw7m62vo7tzb2j2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
"https://media1.giphy.com/media/Z5xk7fGO5FjjTElnpT/giphy.gif?cid=6c09b952rstn1yvjzpsxw4asp2iqg01c2m5is4zm9dc6tu3n&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
"https://media0.giphy.com/media/8g63zqQ5RPt60/giphy.gif?cid=6c09b952u1rosuemv2yqirn6uba30cjg1pffdxi24r45v88z&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
"https://media2.giphy.com/media/Lopx9eUi34rbq/giphy.gif?cid=6c09b952sv5xnuewoky84vuubsiu6pbzhr4vtprv6i8a0igb&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",

"https://media0.giphy.com/media/26xBPncFx3h3MQd8s/giphy.gif?cid=6c09b9529yv6leppn1pvnl6r9vd5ulbdqw1oy07hoa9df5gz&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
"https://media3.giphy.com/media/26BGQb3tjtMeB1iMg/giphy.gif?cid=6c09b952p1pa2j32os1q508e74pn74xvjnx1yvois1tf0svi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
"https://media0.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.gif?cid=6c09b952w08178k2xooxziwwtbd6rq19421neasowhzupxpk&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
"https://media1.giphy.com/media/pUvUtlg4Hdj2IH1uOa/giphy.gif?cid=6c09b952nxj0tiv0bnmvd7rn40bne8ygjb0dqwuv4fyu3bb8&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",

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