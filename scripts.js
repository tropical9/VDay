const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

document.getElementById("yesBtn").addEventListener("click", function() {
    alert("Yay! ❤️ Can't wait for our Valentine's date!");
});
