// Array of cute Valentine's GIFs
const gifs = [
  "https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif",
  "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
  "https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif",
  "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
];

// Get DOM elements
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const gifContainer = document.getElementById("gif-container");
const shareButton = document.getElementById("share-btn");

// Make the "No" button move away when hovered or clicked
noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Show random GIF and confetti when "Yes" is clicked
yesButton.addEventListener("click", () => {
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  gifContainer.innerHTML = `
    <p>Yay! You made my day! 💖</p>
    <img src="${randomGif}" alt="Cute GIF">
  `;
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

// Share button functionality
shareButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator.share({
      title: "Will You Be My Valentine?",
      text: "Check out this cute Valentine's website! 💌",
      url: window.location.href
    });
  } else {
    alert("Your browser doesn't support sharing. Copy the link manually!");
  }
});