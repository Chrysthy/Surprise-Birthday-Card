import JSConfetti from "https://cdn.skypack.dev/js-confetti@0.11.0"
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