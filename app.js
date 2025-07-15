const player = document.getElementById("player");
let posX = 125;

let touchStartX = null;

document.getElementById("game-area").addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

document.getElementById("game-area").addEventListener("touchend", (e) => {
  if (touchStartX === null) return;

  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchEndX - touchStartX;

  if (Math.abs(diff) > 30) {
    if (diff > 0) {
      // Swipe right
      posX = Math.min(posX + 50, 250);
    } else {
      // Swipe left
      posX = Math.max(posX - 50, 0);
    }
    player.style.left = posX + "px";
  }

  touchStartX = null;
});
