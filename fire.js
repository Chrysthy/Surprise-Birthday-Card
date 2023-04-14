<script src="https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js"></script>
const jsConfetti = new JSConfetti()

document.getElementById("confetti-button").addEventListener("click", fireConfetti)

function fireConfetti() {
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
