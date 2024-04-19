const counter = document.getElementById("gb");

async function initCount() {
  for (let i = 0; i <= 185; i++) {
    counter.textContent = i;
    await new Promise((resolve) => setTimeout(resolve, 7));
  }
}

initCount();
