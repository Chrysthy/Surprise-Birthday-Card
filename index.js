import JSConfetti from './js-confetti.js'; 
const jsConfetti = new JSConfetti();

// Função para disparar confete
function fireConfetti() {
    jsConfetti.addConfetti({
        confettiRadius: 1,
        confettiColors: ['#000', 'hotpink', 'gold'],
        confettiNumber: 100,
        emojis: ['💜', '✨', '🎉', '🔥'],
        emojiSize: 80,
    });
}


document.getElementById("confetti-button").addEventListener("click", fireConfetti);
