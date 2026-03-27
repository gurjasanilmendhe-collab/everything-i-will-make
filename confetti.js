class Confetti {
  constructor(count = 50) {
    this.count = count;
  }

  launch() {
    for (let i = 0; i < this.count; i++) {
      const confetti = document.createElement("div");

      confetti.style.position = "fixed";
      confetti.style.width = "8px";
      confetti.style.height = "8px";
      confetti.style.backgroundColor =
        "hsl(" + Math.random() * 360 + ",100%,50%)";

      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.top = "-10px";

      confetti.style.transition = "transform 2s linear, opacity 2s";

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.style.transform =
          "translateY(" + window.innerHeight + "px) rotate(720deg)";
        confetti.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        confetti.remove();
      }, 2000);
    }
  }
}

export default Confetti;
