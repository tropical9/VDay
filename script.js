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
const container = document.querySelector(".container");

// Function to move the "No" button to a safe position within the container
const moveNoButton = () => {
  const yesButtonRect = yesButton.getBoundingClientRect();
  const noButtonRect = noButton.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const buffer = 20; // Minimum distance between buttons

  let x, y;
  do {
    // Calculate random position within the container
    x = Math.random() * (containerRect.width - noButtonRect.width);
    y = Math.random() * (containerRect.height - noButtonRect.height);
  } while (
    // Ensure the "No" button doesn't overlap the "Yes" button
    x + noButtonRect.width > yesButtonRect.left - containerRect.left - buffer &&
    x < yesButtonRect.right - containerRect.left + buffer &&
    y + noButtonRect.height > yesButtonRect.top - containerRect.top - buffer &&
    y < yesButtonRect.bottom - containerRect.top + buffer
  );

  // Set the new position relative to the container
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
};

// Move the "No" button to a safe position when the page loads
moveNoButton();

// Move the "No" button when hovered or clicked
noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", moveNoButton);

// Show random GIF, confetti, and hide the "No" button when "Yes" is clicked
yesButton.addEventListener("click", () => {
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  gifContainer.innerHTML = `
    <p>Yay, Happy Valentine's Day! 💖</p>
    <img src="${randomGif}" alt="Cute GIF">
  `;
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  // Hide the "No" button
  noButton.style.display = "none";
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