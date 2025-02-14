// Array of cute Valentine's GIFs
const gifs = [
  "https://media.giphy.com/media/3o7aTskHEUdgCQAXde/giphy.gif",
  "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
  "https://media.giphy.com/media/l4FGpP4lxGGgK5CBW/giphy.gif",
  "https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif",
  "https://media3.giphy.com/media/qRtwZkH3TaQrJuAUmp/giphy.gif?cid=6c09b9524ndrs4k3tpeeq8oxq71rqvchs1bh4hvwfm7npucm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/ejQyE9Jg7Mhu8OGlV9/giphy.gif?cid=6c09b9521m1d033zgw26fsrhvnt4b3l0isgo8yoov3zq8rxh&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  "https://media1.giphy.com/media/YVC7joze251gzunUIf/giphy.gif?cid=6c09b952c77u1zu8f4kn1ipvd1tvzivt599k4y6nurdb7gpu&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
  
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

