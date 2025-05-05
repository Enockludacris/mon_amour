function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 25 + 10 + "px";
  heart.style.animationDuration = Math.random() * 2 + 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
