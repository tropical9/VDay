const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Move "No" button when hovered over
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100); // Prevents it from going off-screen
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// "Yes" button action
yesBtn.addEventListener("click", function() {
    alert("Yay! ❤️ Can't wait for our Valentine's date!");
});