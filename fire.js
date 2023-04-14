import JSConfetti from "https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"
import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

document.getElementById("confetti").addEventListener("click", Confetti)

function Confetti() {
    jsConfetti.addConfetti({
        confettiRadius: 1,
        confettiColors: [
            '#000', 'hotpink', 'gold'
        ],
        confettiNumber: 100,
        emojis: ['💜', '✨', '🎉', '🎂'],
        emojiSize: 100,
    })

}
