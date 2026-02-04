const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');
const subMessage = document.getElementById('subMessage');
const gif = document.getElementById('displayGif');

let noCount = 0;

// Messages that change as she clicks "No"
const phrases = [
    "Are you sure?",
    "Think again! 🧐",
    "Pllleeeeaaasseee? 🥺",
    "I'll give you chocolate! 🍫",
    "What if I say pretty please?",
    "You're being persistent...",
    "The 'No' button is just decoration!",
    "Okay, now you're just teasing me.",
    "Clicking No won't help you! 😂",
    "Just click Yes already! ❤️"
];

noBtn.addEventListener('click', () => {
    noCount++;

    // 1. Change the "No" button text
    if (noCount < phrases.length) {
        noBtn.innerText = phrases[noCount];
    } else {
        noBtn.innerText = "Still no? 😭";
    }

    // 2. Make the "Yes" button BIGGER
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.3}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).padding) * 1.2}px`;

    // 3. Move the "No" button to a random spot
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 4. Update the sub-message
    subMessage.innerText = "Getting warmer... 😉";
});

// Final Success Event
yesBtn.addEventListener('click', () => {
    question.innerHTML = "YAY! Best Valentine Ever! 💖✨";
    subMessage.innerText = "I'll pick you up at 7! 😉";
    // Change to a happy celebration GIF
    gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG04M3RpcXYwd3lxYXdzeWtrbTg5YzRyY3ByaWJyZnNlcjBpajRoaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6CdI7BikMdZT2jRLF7/giphy.gif";
    // Hide the No button entirely
    noBtn.style.display = 'none';
});