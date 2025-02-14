const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move "No" button when hovered over
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// "Yes" button action
yesBtn.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yay! ❤️ Can't wait for our Valentine's date!</h1>
            <img src="https://media.giphy.com/media/3ohs4jLC0duUuWWA6w/giphy.gif" alt="Happy Love" style="width:100%; max-width:300px; border-radius:15px; margin-top:15px;">
        </div>
    `;
});
