"use strict";

// 🪸 Array med alle fiskene fra dit info-board
const seaInfo = [
  {
    className: "vandmand-slide",
    animalName: "Vandmand",
    age: "~600 mio. år",
    funFact: "Vandmænd er nogle af de ældste dyr på Jorden! De har ingen hjerne eller hjerte - kun vand og gelé.",
    uniqueThing: "Kan lyse i mørket som et undervands-spøgelse 👻",
    soundSrc: "./assets/audio/jegervandmand.mp3",
    image:"../assets/svg/hjaelpfisk.svg",
    soundLine: "Heeej, jeg er en vandmand! Jeg danser som gelé gennem havet og kan lyse i mørket!",
  },
  {
    className: "corals-slide",
    animalName: "Koraller og Svampe",
    age: "~540 mio. år",
    funFact: "Koraller og svampe var nogle af de første til at bygge undervandsbyer for fisk og smådyr.",
    uniqueThing: "Er havets arkitekter 🏗️ - de bygger hele koralbyer!",
    soundSrc: "./assets/audio/koraller.mp3",
    image:"../assets/svg/koral.svg",
    soundLine: "Velkommen til min koralby! Jeg bygger hjem til alle havets dyr!",
  },
  {
    className: "sea-urchin-slide",
    animalName: "Søanemone",
    age: "~540 mio. år",
    funFact: "Søanemonen ligner en blomst, men den er faktisk et rovdyr med fangarme, der fanger små fisk!",
    uniqueThing: "Har usynlige superklæbrige arme 🦸‍♀️",
    soundSrc: "./assets/audio/jegerensoeanemone.mp3",
    image:"../assets/svg/soeanemone.svg",
    soundLine: "Se mine seje arme! De er usynlige – og superklæbrige!",
  },
  {
    className: "shark-slide",
    animalName: "Haj",
    age: "~450 mio. år",
    funFact: "Hajer har eksisteret længere end dinosaurerne og har et super-skarpt sanseapparat!",
    uniqueThing: "Kan lugte én dråbe blod i et helt svømmebassin 🩸",
    soundSrc: "./assets/audio/jegerenhaj.mp3",
    image:"../assets/svg/shark.svg",
    soundLine: "Jeg er hajen! Havets superhelt – jeg kan lugte alt og svømmer som lynet!",
  },
  {
    className: "crab-slide",
    animalName: "Krabbe",
    age: "~200 mio. år",
    funFact: "Krabber går sidelæns, men de er lynhurtige, når de ser mad - eller farer!",
    uniqueThing: "Er mester i at breakdance 🕺 (sidelæns!)",
    soundSrc: "./assets/audio/jegerenkrabbe.mp3",
    image:"../assets/svg/crab.svg",
    soundLine: "Klik klik! Jeg går sidelæns som en dansemaskine – pas på mine klør!",
  },
  {
    className: "urfisk-slide",
    animalName: "Urfisk",
    age: "~150 mio. år",
    funFact: "De første fisk, der lignede moderne fisk - de fik finner, skæl og begyndte at svømme hurtigt!",
    uniqueThing: "Havets oldefar med turbo-finner 🧓💨",
    soundSrc: "./assets/audio/jegerenurfisk.mp3",
    image:"../assets/svg/kirugfisk.svg",
    soundLine: "Jeg er urfisken! Den første med turbo-finner – uden mig, ingen Nemo!",
  },
  {
    className: "nutte-puff-slide",
    animalName: "Pindsvinefisk",
    age: "~80 mio. år",
    funFact: "Når den bliver bange, puster den sig op som en ballon fuld af pigge!",
    uniqueThing: "Kan blive dobbelt så stor på ét sekund 🎈",
    soundSrc: "../assets/audio/jegerenpindsvinefisk.mp3",
    image:"../assets/svg/nutte-puff.svg",
    soundLine: "Pffffft! Jeg puster mig op som en ballon – ingen tør røre mig!",
  },
  {
    className: "tun-slide",
    animalName: "Tun",
    age: "~50 mio. år",
    funFact: "Tunen er havets fartdjævel! Den kan svømme hurtigere end en bil i byen!",
    uniqueThing: "Kan slå delfiner i kapløb 🏁",
    soundSrc: "../assets/audio/jegerentun.mp3",
    image:"../assets/svg/tuna.svg",
    soundLine: "Wrooom! Jeg er tunfisken – havets raket! Ingen fanger mig!",
  },
  {
    className: "klovnefisk-slide",
    animalName: "Nemo",
    age: "~50 mio. år",
    funFact: "Klovnefisk lever i søanemoner og bliver ikke brændt af dem.",
    uniqueThing: "Klovnefisk kan skifte køn! ♀️➡️♂️",
    soundSrc: "../assets/audio/jegerenklovnefisk.mp3",
    
    image:"../assets/svg/nemo.svg",
    soundLine: "Hej, jeg er Nemo! Og min bedste ven finder du her i havet sammen med mig, nemlig Dory!",
  },
  {
    className: "dory-slide",
    animalName: "Dory",
    age: "~50 mio. år",
    funFact: "Dory glemmer alt, men er altid glad!",
    uniqueThing: "Dory kan tale hvalsprog 🐋🐟💭",
    soundSrc: "../assets/audio/jegerenklovnefisk.mp3",
    image:"../assets/svg/kirugfisk.svg",
    soundLine: "Hej, jeg er Dory! Hvad var det nu, jeg skulle sige? Åh ja - bare svømme, bare svømme, bare svømme!",
  },
  {
    className: "dolphin-slide",
    animalName: "Delfin",
    age: "~15 mio. år",
    funFact: "Delfiner er super smarte og kan genkende sig selv i spejlet!",
    uniqueThing: "",
    soundSrc: "../assets/audio/delfin.mp3",
    image:"../assets/svg/delfin-hopper.svg",
    soundLine: "Hej, jeg er en delfin! Jeg bruger lyd til at navigere og finde mad i havet!",

  },
  
  {
  className: "dannebrogsreje-slide",
  animalName: "Dannebrogsreje",
  age: "~50 mio. år",
  funFact: "Dannebrogsrejen har røde og hvide striber – ligesom det danske flag! Den hjælper andre fisk ved at rense dem for snavs og parasitter.",
  uniqueThing: "Er havets frisør 💇‍♂️ – og Danmarks mest patriotiske reje 🇩🇰",
  soundSrc: "../assets/audio/jegerenreje.mp3",
  image:"../assets/svg/dannebrogsreje.svg",
  soundLine: "Hejsa! Jeg er Dannebrogsrejen – jeg gør fiskene rene og bærer farverne fra Dannebrog med stolthed!",
},
 {
    className: "gummistoevle-slide",
    animalName: "Gummistøvle",
    age: "Fundet i havet for nylig",
    funFact: "En glemt gummistøvle kan flyde rundt i havet i mange år. Nogle fisk prøver endda at gemme sig i den!",
    uniqueThing: "Kan bruges som mini-hus for en krabbe 🏠",
    soundSrc: "../assets/audio/gummistoevle.mp3",
    image:"../assets/svg/gummistoevle.svg",

    soundLine: "Ups! Jeg burde være på land – hjælp mig tilbage, før jeg bliver et krabbehjem!",
  },
  {
    className: "daase-slide",
    animalName: "Dåse",
    age: "Flyder i havet i op til 200 år!",
    funFact: "Aluminium kan genbruges uendeligt mange gange, men i havet gør den skade på dyr og koraller.",
    uniqueThing: "Kan forvandles til en cykel, hvis den bliver genbrugt 🚴‍♂️",
    soundSrc: "../assets/audio/daase.mp3",
    image:"../assets/svg/can.svg",

    soundLine: "Jeg er en sodavandsdåse – genbrug mig, så jeg kan blive til noget nyt og fedt!",
  },
  {
  className: "cykel-slide",
  animalName: "Cykelhjul",
  age: "Mistet for mange år siden",
  funFact: "Nogle cykler ender i havet, når folk smider dem væk. De ruster langsomt og bliver dækket af tang og snegle!",
  uniqueThing: "Er blevet et undervandshotel for smådyr 🏨🐚",
  soundSrc: "../assets/audio/cykel.mp3",
  image:"../assets/svg/cykelhjul.svg",
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
      const sound = new Audio(sea.soundSrc)
      sound.pause()

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
        sound.play();
      });

      // Lyd på click
      // elem.addEventListener("click", () => {
        // showTooltip(`<em>${sea.soundLine}</em>`);
      // });
    });
  });
});


const nutte = document.getElementById('nutte')
const vandmand = document.getElementById('vandmand')



function swapImages() {
  nutte.classList.toggle("nutte");
  nutte.classList.toggle("swapped-right");
  vandmand.classList.toggle("vandmand");
  vandmand.classList.toggle("swapped-left");
}

if (nutte) {
  nutte.addEventListener("click", () => {
    const soundNutte = new Audio("./assets/audio/vilduspillemedmig.mp3");
    swapImages();
    console.log('nutte')
    soundNutte.play();
  });
}

if (vandmand) {
  const soundVandmand = new Audio("./assets/audio/sevideooglaer.mp3");
  vandmand.addEventListener("click", () => {
    swapImages();
    console.log('vandmand')
    soundVandmand.play();
  });
}