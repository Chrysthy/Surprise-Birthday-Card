function fireConfetti(event) {
    
    let confetti = document.getElementById('confetti').value;
    
    jsConfetti.addConfetti({
        confettiRadius: 1,
        confettiColors: [
            '#000', 'hotpink', 'gold'
        ],
        confettiNumber: 100,
        emojis: ['💜', '✨', '🎉', '🔥'],
        emojiSize: 100,
    })

}


document.getElementById("confetti-button").addEventListener("click", fireConfetti)
