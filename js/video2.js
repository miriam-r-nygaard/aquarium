// simple script at bottom before </body>
document.querySelector('.lucide-play').addEventListener('click', () => {
  document.querySelector('.scene').style.animationPlayState = 'running';
  console.log('running lucidBtn play ')
  document.querySelector('.scene').classList.add('running');
//   document.querySelector('.scene::after').style.animationPlayState = 'running';
  document.querySelectorAll('*').forEach(el => el.style.animationPlayState = 'running');
});

document.querySelector('.lucide-pause').addEventListener('click', () => {
  document.querySelector('.scene').style.animationPlayState = 'paused';
//   document.querySelector('.scene::after').style.animationPlayState = 'paused';
  document.querySelector('.scene').classList.add('paused');

  console.log('running lucideBtn pause')
  document.querySelectorAll('*').forEach(el => el.style.animationPlayState = 'paused');
});

const machine = document.getElementById("machine");
const timerDisplay = document.getElementById("timer");
const toggleBtn = document.getElementById("toggle");

// Read CSS custom property (returns something like "120s")
const durationStr = getComputedStyle(machine).getPropertyValue("--duration").trim();
const duration = parseFloat(durationStr) * (durationStr.endsWith("ms") ? 1 : 1000); // convert to ms

let timeLeft = duration / 1000;
let interval = null;

// Start countdown
function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (machine.classList.contains("running")) {
        console.log('init')
      timeLeft -= 1;
      timerDisplay.textContent = Math.max(0, Math.ceil(timeLeft));
      if (timeLeft <= 0) {
        clearInterval(interval);
        machine.classList.remove("running");
        machine.classList.add("paused");
      }
    }
  }, 1000);
}



startTimer();



// Toggle pause/resume
toggleBtn.addEventListener("click", () => {
  if (machine.classList.contains("running")) {
    machine.classList.remove("running");
    machine.classList.add("paused");
  } else {
    machine.classList.remove("paused");
    machine.classList.add("running");
  }
});

