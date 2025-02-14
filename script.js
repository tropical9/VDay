const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const messageArea = document.getElementById("messageArea");

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
    const messages = [
        "You made the right choice. No take-backs!",
        "Whew, that was a close one. Thought I’d have to bribe you with chocolate.",
        "You’ve officially upgraded your Valentine’s Day to ‘awesome.’",
        "Sweet! Now we just need a rom-com level montage.",
        "Guess we’re stuck together now. Hope you like bad jokes!",
        "You’re locked in now—no escaping this Valentine’s Day!",
        "Good call. Imagine the regret if you had said no.",
        "A wise choice. Now, let’s celebrate with snacks!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Working GIF URL from Giphy
    const gifURL = "https://media.giphy.com/media/26FPqKps6dZF9LBIc/giphy.gif?cid=790b7611t4kqxuo7xgkozl8qyikbjazc98p1xhl7kzw56gy9&ep=v1_gifs_search&rid=giphy.gif&ct=g"; 

    messageArea.innerHTML = `
        <p>${randomMessage}</p>
        <img src="${gifURL}" alt="Happy Love" style="width:100%; max-width:300px; border-radius:15px; margin-top:15px;">
    `;
});
