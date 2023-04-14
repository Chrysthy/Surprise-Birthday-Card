<script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>

import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

jsConfetti.addConfetti()

document.getElementById("confetti-button").addEventListener("click", fireConfetti)

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
