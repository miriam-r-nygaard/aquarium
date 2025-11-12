// --- Trash data ---

//Intro lyd/loop der siger:: Mini helt, hjælp mig, jeg har brug for din hjælp!
//Yes, så kører vi, det tager kun 2minutter men du redder nutte!

const trashData = [
  { img: "./assets/svg/cykelhjul.svg", name: "Cykelhjul", audio:"./assets/audio/findcykelhjulet.mp3"},
  { img: "./assets/svg/gummistoevle.svg", name: "Gummistøvler", audio:"./assets/audio/findgummistoevlen.mp3"},
  { img: "./assets/svg/flaske.svg", name: "Glas Flaske", audio:"./assets/audio/findpantflaske.mp3"},
  { img: "./assets/svg/can.svg", name: "Metal dåse", audio:"./assets/audio/findmetalcan.mp3"},
];

const itemsContainer = document.querySelector(".items");
const swimmer = document.querySelector(".swimmer");
const home = document.querySelector(".home");

let carrying = null;
let carriedIndex = null;
let nextIndex = 0;
let finished = false;
let fish;

// --- Smooth camera scroll setup ---
let targetScroll = window.scrollY;

function smoothScroll() {
  // Ease scroll toward the target (interpolated instead of jump)
  const current = window.scrollY;
  const diff = targetScroll - current;
  window.scrollTo({ top: current + diff * 0.1 });
  requestAnimationFrame(smoothScroll);
}
smoothScroll();

let hasPlayed = false;

document.body.addEventListener("scroll", () => {
  if (!hasPlayed && window.scrollY >= 400) {
    const resetGameAudio = new Audio('../assets/audio/sharkdanger.mp3');
    resetGameAudio.play();
    hasPlayed = true;
  }
});


// --- Setup game ---
function setupGame() {
  itemsContainer.innerHTML = "";
  document.querySelectorAll(".trash, .finish-message, .fish").forEach((el) => el.remove());

  carrying = null;
  carriedIndex = null;
  nextIndex = 0;
  finished = false;

  const screenWidth = window.innerWidth;
  const spacing = screenWidth / (trashData.length + 1);

  trashData.forEach(({ img }, i) => {
    // Top item bar
    const image = document.createElement("img");
    image.src = img;
    image.className = "item";
    image.dataset.index = i;
    image.style.filter = "grayscale(1) brightness(0.4)";
    itemsContainer.appendChild(image);

    // Trash on ground (3vh from bottom)
    const trash = document.createElement("div");
    trash.className = "trash";
    trash.dataset.index = i;
    trash.style.position = "absolute";
    trash.style.left = `${spacing * (i + 1)}px`;
    trash.style.bottom = "30vh";
    trash.style.zIndex = "10";
    trash.innerHTML = `<img src="${img}" width="60">`;
    document.body.appendChild(trash);
  });

  console.clear();
  console.log(`🐢 Collect the ${trashData[nextIndex].name} first!`);
  const sound = new Audio(trashData[nextIndex].audio)
  sound.play()
  
  
  createFish();
  
}

// --- Create fixed fish (danger!) ---
function createFish() {
  fish = document.createElement("img");
  fish.className = "fish";
  fish.src = "assets/svg/shark.svg";
  //fish.style.position = "absolute"; // 👈 stays visible on scroll
  fish.style.top = "550px";
  fish.style.left = "10vw";
  document.body.appendChild(fish);

	
  let direction = 1;
  setInterval(() => {
    if (finished) return;
    let left = parseFloat(fish.style.left);
    if (left > window.innerWidth - 80) direction = -1;
    if (left < 0) direction = 1;
    fish.style.left = left + direction * 2 + "px";
  }, 30);
}

// --- Collision detection ---
function isColliding(a, b) {
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
}

// --- Deliver trash ---
function deliverTrash(trash, index) {
  const carriedImg = swimmer.querySelector(".carried-trash");
  if (carriedImg) carriedImg.remove();

  if (index === nextIndex) {
    trash.remove();
    const uiImg = itemsContainer.querySelector(`.item[data-index="${index}"]`);
    if (uiImg) uiImg.style.filter = "none";
    console.log(`✅ Delivered the ${trashData[index].name} correctly!`);
    nextIndex++;
    if (nextIndex < trashData.length) {
      console.log(`👉 Next: collect the ${trashData[nextIndex].name}`);
      const findNextAudio = new Audio(trashData[nextIndex].audio);
      findNextAudio.play()
    } else {
      const gameDoneAudio = new Audio('../assets/audio/juhuugennemfoert.mp3');
      gameDoneAudio.play()

      const resetGameAudio = new Audio('../assets/audio/spilleigen.mp3');
      resetGameAudio.play()

      finishGame();


    }
  } else {
    console.log(`❌ Wrong item! That was the ${trashData[index].name}, you should deliver the ${trashData[nextIndex].name}!`);
    
    const wrongItemGameAudio = new Audio('../assets/audio/provIgen.mp3');
    wrongItemGameAudio.play()
    
    flyBack(trash);
  }

  carrying = null;
  carriedIndex = null;
}

// --- Smooth fly-back animation ---
function flyBack(trash) {
  const startLeft = parseFloat(trash.style.left);
  const startBottom = parseFloat(trash.style.bottom);
  const endBottom = 3; // back to 3vh
  const duration = 500;
  const start = performance.now();

  function animate(time) {
    const t = Math.min(1, (time - start) / duration);
    const ease = 1 - Math.pow(1 - t, 3);
    trash.style.left = startLeft + "px";
    trash.style.bottom = startBottom + (endBottom - startBottom) * ease + "vh";
    if (t < 1) requestAnimationFrame(animate);
    else trash.style.opacity = 1;
  }
  requestAnimationFrame(animate);
}

// --- Finish message ---
function finishGame() {
  finished = true;
  const msg = document.createElement("div");
  msg.className = "finish-message";
  msg.textContent = "🎉 All trash delivered! Great job!";
  msg.style.position = "fixed";
  msg.style.top = "50%";
  msg.style.left = "50%";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.background = "rgba(0,0,0,0.7)";
  msg.style.color = "white";
  msg.style.padding = "20px 40px";
  msg.style.borderRadius = "12px";
  msg.style.fontSize = "24px";
  msg.style.textAlign = "center";
  msg.style.zIndex = "1000";
  msg.style.cursor = "pointer";
  msg.textContent += "\n\n🔄 Click to play again!";
  msg.addEventListener("click", setupGame);
  document.body.appendChild(msg);
}

// --- Pointer move logic ---
document.body.onpointermove = (event) => {
  if (finished) return;

  const { pageX, pageY, clientY } = event;
 swimmer.style.transform = `translate(${pageX}px, ${pageY}px)`;
  swimmer.style.zIndex = "20";

  const distanceFromBottom = window.innerHeight - clientY;
  const distanceFromTop = clientY;
if (distanceFromBottom < 200) targetScroll += 50;
if (distanceFromTop < 200) targetScroll -= 50;


  const swimmerRect = swimmer.getBoundingClientRect();
  const trashItems = document.querySelectorAll(".trash");

  // --- Fish danger ---
  const fishRect = fish.getBoundingClientRect();
  if (isColliding(swimmerRect, fishRect)) {
    console.log("🔥 You got roasted by the fish!");
    //animation nutte prut og svøm opad hvis kommer oppe fra eller 
    //nedad hvis kommer nede fra.
  }

  // --- Pick up ---
  if (!carrying) {
    trashItems.forEach((trash) => {
      const trashRect = trash.getBoundingClientRect();
      const index = parseInt(trash.dataset.index);
      if (isColliding(swimmerRect, trashRect)) {
        carrying = trash;
        carriedIndex = index;
        console.log(`🧺 Picked up the ${trashData[index].name}`);
        const img = trash.querySelector("img").cloneNode(true);
        img.className = "carried-trash";
        img.style.width = "40px";
        img.style.position = "absolute";
        img.style.top = "-10px";
        img.style.left = "10px";
        img.style.filter = "none";
        swimmer.appendChild(img);
        trash.style.opacity = 0.5;
      }
    });
  }

  // --- Deliver to home ---
  if (carrying) {
    const homeRect = home.getBoundingClientRect();
    if (isColliding(swimmerRect, homeRect)) {
      deliverTrash(carrying, carriedIndex);
    }
  }
};



// Wait for user to interact before starting the game
document.body.addEventListener('pointermove', setupGame,{ once: true });