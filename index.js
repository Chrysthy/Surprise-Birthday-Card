import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

jsConfetti.addConfetti()

const canvas = document.getElementById('confetti-button')

const jsConfetti = new JSConfetti({ canvas })

const jsConfetti = new JSConfetti();

document.getElementById("confetti-button").addEventListener("click", fireConfetti);

function fireConfetti() {
    jsConfetti.addConfetti({
        confettiRadius: 1,
        confettiColors: ['#000', 'hotpink', 'gold'],
        confettiNumber: 100,
        emojis: ['💜', '✨', '🎉', '🔥'],
        emojiSize: 100,
    });
}









