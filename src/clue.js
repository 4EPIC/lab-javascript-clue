// ITERATION 1

// Suspects Array

const suspectsArray = [
{
  firstName: "Luffy",
  lastName: "Monkey",
  occupation: "Pirate",
  age: 19,
  description: "He's going to be the pirate king!",
  image: "https://www.geekmi.news/__export/1619631525888/sites/debate/img/2021/04/28/luffy1.jpg_1103262657.jpg",
  color: "Red"
},
{
  firstName: "Roronoa",
  lastName: "Zoro",
  occupation: "Swordsman",
  age: 19,
  description: "World's Greatest Swordsman",
  image: "https://cdn.alfabetajuega.com/wp-content/uploads/2019/08/alfabetajuega-zoro-luffy-one-piece-wano-06082019.jpg",
  color: "Green"
},
{
  firstName: "TonyTony",
  lastName: "Chopper",
  occupation: "Doctor",
  age: 17,
  description: "Cotton Candy Lover",
  image: "https://cdn.alfabetajuega.com/wp-content/uploads/2021/02/chopper.jpeg",
  color: "Pink"
},
{
firstName: "Nami",
lastName: "Bell-mère",
occupation: "Cartography",
age: 20,
description: "Cat Burglar",
image: "https://www.cultture.com/pics/2021/08/one-piece-10-veces-que-nami-merecia-mas-respeto-pero-paso-desapercibida-2.webp",
color: "Gold"
},
{
  firstName: "Franky",
  lastName: "Cutty Flam",
  occupation: "Shipwright",
  age: 36,
  description: "He's a half ciborg",
  image: "https://gcdn.lanetaneta.com/wp-content/uploads/2020/11/One-Piece-presenta-la-estatua-de-Franky-en-la-ciudad.jpeg",
  color: "blue"
},
{
  firstName: "Vivi",
  lastName: "Nefertati",
  occupation: "Princess",
  age: 62,
  description: "Princess of Arabasta",
  image: "https://9to5fortnite.com/wp-content/uploads/2021/08/1628114775_18_10-opiniones-impopulares-de-Reddit-sobre-One-Piece-Juego.jpg",
  color: "yellow"
}
];

// Rooms Array

const roomsArray = [
  { name: "kitchen"},
  { name: "Jib"},
  { name: "Gym"},
  { name: "Bowsprit"},
  { name: "Stern"},
  { name: "Forecastle"},
  { name: "Berth"},
  { name: "Orlop"},
  { name: "Bathroom"},
  { name: "Garage"},
  { name: "Dining room"},
  { name: "Hall"},
  { name: "Playground"},
  { name: "Observatory"},
  { name: "Library"}
  ];

// Weapons Array

const weaponsArray = [
  { name: "sword",
    weight: 50 },
  { name: "fist",
    weight: 100 },
  { name: "slingshot",
    weight: 60},
  { name: "stick",
    weight: 30},
  { name: "poison",
    weight: 5},
  { name: "gun",
    weight: 15},
  { name: "stick",
    weight: 13},
  { name: "axe",
    weight: 25},
  { name: "bat",
    weight: 20}
  ];

// ITERATION 2

function selectRandom(array) {
  let randomCards = Math.floor(Math.random() * array.length);
  let randomCard = array[randomCards];
  return randomCard;
}

function pickMystery() {
  const suspect = selectRandom(suspectsArray);
  const weapon = selectRandom(weaponsArray);
  const room = selectRandom(roomsArray);
  return {
    suspect,
    weapon,
    room
  };
}

// ITERATION 3

function revealMystery(envelope) {
  return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}
