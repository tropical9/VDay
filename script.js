// Array of cute Valentine's GIFs
const gifs = [
  "https://media3.giphy.com/media/qRtwZkH3TaQrJuAUmp/giphy.gif?cid=6c09b952qcj18x1rrirf80h9sromt25bnwaykz11nrhq1y5l&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/VIKa3CjZDCoymNcBY5/giphy.gif?cid=6c09b9520kp1swgxoseiml8vx3476lxmplysstu0ki8zy8ke&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
  "https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif",
  "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
];

// Get DOM elements
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const gifContainer = document.getElementById("gif-container");
const shareButton = document.getElementById("share-btn");

// Function to move the "No" button to a safe position
const moveNoButton = () => {
  const yesButtonRect = yesButton.getBoundingClientRect();
  const noButtonRect = noButton.getBoundingClientRect();
  const buffer = 20; // Minimum distance between buttons

  let x, y;
  do {
    // Calculate random position within the window
    x = Math.random() * (window.innerWidth - noButtonRect.width);
    y = Math.random() * (window.innerHeight - noButtonRect.height);
  } while (
    // Ensure the "No" button doesn't overlap the "Yes" button
    x + noButtonRect.width > yesButtonRect.left - buffer &&
    x < yesButtonRect.right + buffer &&
    y + noButtonRect.height > yesButtonRect.top - buffer &&
    y < yesButtonRect.bottom + buffer
  );

  // Set the new position
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
};

// Move the "No" button when hovered or clicked
noButton.addEventListener("mouseover", moveNoButton);
noButton.addEventListener("click", moveNoButton);

// Show random GIF and confetti when "Yes" is clicked
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
});

// Remove the loaded GIF when "No" is clicked after "Yes"
noButton.addEventListener("click", () => {
  if (gifContainer.innerHTML) {
    gifContainer.innerHTML = ""; // Clear the GIF container
  }
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