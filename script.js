const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gifContainer = document.getElementById("gifContainer");

// Move "No" button when hovered over
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// "Yes" button action: Show random cute GIF
yesBtn.addEventListener("click", function() {
    const gifLinks = [
        "https://media.giphy.com/media/l0HlyLQsbvnYz7QNa/giphy.gif",
        "https://media.giphy.com/media/l0HUqsz2jdQYElRm0/giphy.gif",
        "https://media.giphy.com/media/3ohs4jLC0duUuWWA6w/giphy.gif",
        "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
        "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
        "https://media.giphy.com/media/xT1XGzXhVbuqJbp7JS/giphy.gif",
        "https://media.giphy.com/media/3o6ZsZfgA3lBN2jtT6/giphy.gif",
        "https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif",
        "https://media.giphy.com/media/l3q2wJsC23ikXGPLO/giphy.gif",
        "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
    ];

    const randomGif = gifLinks[Math.floor(Math.random() * gifLinks.length)];

    gifContainer.innerHTML = `
        <img src="${randomGif}" alt="Cute Gif" style="width:100%; max-width:300px; border-radius:15px; margin-top:15px;">
    `;
});