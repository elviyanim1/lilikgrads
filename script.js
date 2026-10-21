
document.addEventListener("DOMContentLoaded", () => {
  // BINTANG BERKELIP
  const starField = document.getElementById("starField");

  if (starField) {
    const symbols = ["✦", "✧", "⋆", "·"];

    for (let i = 0; i < 75; i++) {
      const star = document.createElement("span");

      star.className = "star";
      star.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.fontSize = 8 + Math.random() * 15 + "px";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = 1.5 + Math.random() * 3 + "s";

      starField.appendChild(star);
    }
  }

  // PEMUTAR MUSIK
  const music = document.getElementById("backgroundMusic");
  const musicButton = document.getElementById("musicButton");

  if (music && musicButton) {
    musicButton.addEventListener("click", async () => {
      if (music.paused) {
        try {
          await music.play();
          musicButton.textContent = "❚❚ Pause Music";
        } catch (error) {
          musicButton.textContent = "Gagal memutar lagu";
          console.error("Musik tidak bisa diputar:", error);
        }
      } else {
        music.pause();
        musicButton.textContent = "▶ Play Music";
      }
    });

    music.addEventListener("ended", () => {
      musicButton.textContent = "▶ Play Music";
    });
  }
});
