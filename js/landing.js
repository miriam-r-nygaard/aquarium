"use strict";

// 🪸 Array med alle fiskene fra dit info-board
const seaInfo = [
  {
    className: "vandmand",
    animalName: "Vandmand",
    age: "~1 milliard år",
    funFact: "Vandmænd er nogle af de ældste dyr på Jorden! De har ingen hjerne eller hjerte – kun vand og gelé.",
    uniqueThing: "Kan lyse i mørket som et undervands-spøgelse 👻",
    soundSrc: "sounds/vandmand.mp3",
    image:"./assets/svg/hjaelpfisk.svg",
    soundLine: "Heeej, jeg er en vandmand! Jeg danser som gelé gennem havet og kan lyse i mørket!",
  },
  {
    className: "sea2",
    animalName: "Koraller og Svampe",
    age: "~600 mio. år",
    funFact: "Koraller og svampe var nogle af de første til at bygge undervandsbyer for fisk og smådyr.",
    uniqueThing: "Er havets arkitekter 🏗️ – de bygger hele koralbyer!",
    soundSrc: "sounds/koraller.mp3",
    soundLine: "Velkommen til min koralby! Jeg bygger hjem til alle havets dyr!",
  },
  {
    className: "sea3",
    animalName: "Søanemone",
    age: "~540 mio. år",
    funFact: "Søanemonen ligner en blomst, men den er faktisk et rovdyr med fangarme, der fanger små fisk!",
    uniqueThing: "Har usynlige superklæbrige arme 🦸‍♀️",
    soundSrc: "sounds/soeanemone.mp3",
    soundLine: "Se mine seje arme! De er usynlige – og superklæbrige!",
  },
  {
    className: "sea4",
    animalName: "Haj",
    age: "~450 mio. år",
    funFact: "Hajer har eksisteret længere end dinosaurerne og har et super-skarpt sanseapparat!",
    uniqueThing: "Kan lugte én dråbe blod i et helt svømmebassin 🩸",
    soundSrc: "sounds/haj.mp3",
    soundLine: "Jeg er hajen! Havets superhelt – jeg kan lugte alt og svømmer som lynet!",
  },
  {
    className: "sea5",
    animalName: "Krabbe",
    age: "~200 mio. år",
    funFact: "Krabber går sidelæns, men de er lynhurtige, når de ser mad – eller farer!",
    uniqueThing: "Er mester i at breakdance 🕺 (sidelæns!)",
    soundSrc: "sounds/krabbe.mp3",
    soundLine: "Klik klik! Jeg går sidelæns som en dansemaskine – pas på mine klør!",
  },
  {
    className: "sea6",
    animalName: "Urfisk",
    age: "~150 mio. år",
    funFact: "De første fisk, der lignede moderne fisk – de fik finner, skæl og begyndte at svømme hurtigt!",
    uniqueThing: "Havets oldefar med turbo-finner 🧓💨",
    soundSrc: "sounds/urfisk.mp3",
    soundLine: "Jeg er urfisken! Den første med turbo-finner – uden mig, ingen Nemo!",
  },
  {
    className: "sea7",
    animalName: "Pindsvinefisk",
    age: "~80 mio. år",
    funFact: "Når den bliver bange, puster den sig op som en ballon fuld af pigge!",
    uniqueThing: "Kan blive dobbelt så stor på ét sekund 🎈",
    soundSrc: "sounds/pindsvinefisk.mp3",
    soundLine: "Pffffft! Jeg puster mig op som en ballon – ingen tør røre mig!",
  },
  {
    className: "sea8",
    animalName: "Tun",
    age: "~50 mio. år",
    funFact: "Tunen er havets fartdjævel! Den kan svømme hurtigere end en bil i byen!",
    uniqueThing: "Kan slå delfiner i kapløb 🏁",
    soundSrc: "sounds/tun.mp3",
    soundLine: "Wrooom! Jeg er tunfisken – havets raket! Ingen fanger mig!",
  },
  {
    className: "sea9",
    animalName: "Klovnefisk & Dory",
    age: "~50 mio. år",
    funFact: "Klovnefisk lever i søanemoner og bliver ikke brændt af dem. Dory glemmer alt, men er altid glad!",
    uniqueThing: "Klovnefisk kan skifte køn, og Dory kan tale hvalsprog 🐋",
    soundSrc: "sounds/klovnefisk.mp3",
    soundLine: "Hej, jeg er Nemo! Og jeg er Dory! … øh, hvad snakkede vi om igen?",
  },{
  className: "sea10",
  animalName: "Dannebrogsreje",
  age: "~50 mio. år",
  funFact: "Dannebrogsrejen har røde og hvide striber – ligesom det danske flag! Den hjælper andre fisk ved at rense dem for snavs og parasitter.",
  uniqueThing: "Er havets frisør 💇‍♂️ – og Danmarks mest patriotiske reje 🇩🇰",
  soundSrc: "sounds/dannebrogsreje.mp3",
  soundLine: "Hejsa! Jeg er Dannebrogsrejen – jeg gør fiskene rene og bærer farverne fra Dannebrog med stolthed!",
},
 {
    className: "trash1",
    animalName: "Gummistøvle",
    age: "Fundet i havet for nylig",
    funFact: "En glemt gummistøvle kan flyde rundt i havet i mange år. Nogle fisk prøver endda at gemme sig i den!",
    uniqueThing: "Kan bruges som mini-hus for en krabbe 🏠",
    soundSrc: "sounds/gummistoevle.mp3",
    soundLine: "Ups! Jeg burde være på land – hjælp mig tilbage, før jeg bliver et krabbehjem!",
  },
  {
    className: "trash2",
    animalName: "Sodavandsdåse",
    age: "Flyder i havet i op til 200 år!",
    funFact: "Aluminium kan genbruges uendeligt mange gange, men i havet gør den skade på dyr og koraller.",
    uniqueThing: "Kan forvandles til en cykel, hvis den bliver genbrugt 🚴‍♂️",
    soundSrc: "sounds/daase.mp3",
    soundLine: "Jeg er en sodavandsdåse – genbrug mig, så jeg kan blive til noget nyt og fedt!",
  },
  {
    className: "trash3",
    animalName: "Plastikpose",
    age: "Over 500 år i naturen!",
    funFact: "Havskildpadder tror ofte, jeg er en vandmand – og det kan gå galt, hvis de spiser mig!",
    uniqueThing: "Kan blive til en t-shirt, hvis jeg bliver genbrugt 👕",
    soundSrc: "sounds/plastikpose.mp3",
    soundLine: "Hej, jeg er en plastikpose! Jeg vil meget hellere være genbrugt end flyde i havet!",
  },
  {
  className: "trash4",
  animalName: "Cykel",
  age: "Mistet for mange år siden",
  funFact: "Nogle cykler ender i havet, når folk smider dem væk. De ruster langsomt og bliver dækket af tang og snegle!",
  uniqueThing: "Er blevet et undervandshotel for smådyr 🏨🐚",
  soundSrc: "sounds/cykel.mp3",
  soundLine: "Ring ring! Jeg er en glemt cykel på bunden af havet – vil du hjælpe mig tilbage på land?",
},

];

// 🐚 Når HTML er klar
document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");

  function showTooltip(html) {
    if (tooltip) {
      tooltip.innerHTML = html;
      tooltip.classList.add("is-visible");
      setTimeout(() => tooltip.classList.remove("is-visible"), 8000);
    }
  }

  // 🎣 Tilføj tooltip + lyd på hover / click
  seaInfo.forEach((sea) => {
    //const sound = new Audio(sea.soundSrc);

    document.querySelectorAll("." + sea.className).forEach((elem) => {
      // Tooltip på hover
      elem.addEventListener("mouseover", () => {
        const html = `
        <img src="${sea.image}" width="50px" alt="billede af ${sea.animalName}">
          <strong>${sea.animalName}</strong><br>
          Alder: ${sea.age}<br>
          Sjov fakta: ${sea.funFact}<br>
          Superkraft: ${sea.uniqueThing}
        `;
        showTooltip(html);
      });

    //   // Lyd på click
    //   elem.addEventListener("click", () => {
    //     sound.play();
    //     showTooltip(`<em>${sea.soundLine}</em>`);
    //   });
    });
  });
});


const nutte = document.getElementById('nutte')
const vandmand = document.getElementById('vandmand')

//const soundIroh = new Audio("./../sound/hot-leaf-juice.mp3");

//const soundZuko = new Audio("./../sound/thats-rough-buddy.mp3");

function swapImages() {
  nutte.classList.toggle("nutte");
  nutte.classList.toggle("swapped-right");
  vandmand.classList.toggle("vandmand");
  vandmand.classList.toggle("swapped-left");
}

if (nutte) {
  nutte.addEventListener("click", () => {
    swapImages();
    console.log('nutte')
  //  soundIroh.play();
  });
}

if (vandmand) {
  vandmand.addEventListener("click", () => {
    swapImages();
    console.log('vandmand')

    // soundZuko.play();
  });
}


//   //Hent DOM elementer
//   //Her er 6 dom elementer

//   //henter bilerne
//   const getRedCar = document.getElementById("redCar");
//   const getPoliceCar = document.getElementById("policeCar");
//   const getBlueCar = document.getElementById("blueCar");
//   //henter egne biler
//   const getBusCar = document.getElementById("busCar");
//   const getTruckCar = document.getElementById("truckCar");

//   //hent sol og scene
//   const sun = document.querySelector(".sun");
//   const scene = document.querySelector(".scene");

//   //opretter lydobjekter
//   const soundRedCar = new Audio();
//   soundRedCar.src = "../sound/red-car-horn.wav";
//   const soundPoliceCar = new Audio();
//   soundPoliceCar.src = "../sound/police-car-sound.wav";
//   const soundBlueCar = new Audio();
//   soundBlueCar.src = "../sound/blue-car-sound.wav";

//   //egne lyd objekter
//   const soundBusCar = new Audio();
//   soundBusCar.src = "../sound/bus-sound.wav";

//   const soundTruckCar = new Audio();
//   soundTruckCar.src = "../sound/truck-sound.wav";

//   //Sæt lyttere på, nu afspilles den med click
//   //rød bil
//   if (getRedCar) {
//     getRedCar.addEventListener("click", () => {
//       soundRedCar.play();
//     });
//   }

//   //politi bil
//   if (getPoliceCar) {
//     getPoliceCar.addEventListener("click", () => {
//       soundPoliceCar.play();
//     });
//   }

//   //blå bil
//   if (getBlueCar) {
//     getBlueCar.addEventListener("click", () => {
//       soundBlueCar.play();
//     });
//   }

//   //egne biler
//   //bus
//   if (getBusCar) {
//     getBusCar.addEventListener("click", () => {
//       soundBusCar.play();
//     });
//   }
//   //truck
//   if (getTruckCar) {
//     getTruckCar.addEventListener("click", () => {
//       soundTruckCar.play();
//     });
//   }

//   //sun og scene
//   // husk to &&
//   //classList.toggler skifter imellem classen .sun og night, som kommer fra CSS og tilføjer den i HTML
//   if (sun && scene) {
//     sun.addEventListener("click", () => {
//       scene.classList.toggle("night");
//     });
//   }
//});