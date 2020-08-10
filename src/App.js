import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./styles.css";
import "react-tabs/style/react-tabs.css";

var Data = [
  {
    name: "zombie",
    rank: 0,
    type: 0,
    damage: 3,
    health: 3,
    speed: 3,
    image: null,
    link: null
  },
  {
    name: "tank",
    rank: 0,
    type: 0,
    damage: 1,
    health: 5,
    speed: 1,
    image: null,
    link: null
  },
  {
    name: "runner",
    rank: 0,
    type: 0,
    damage: 3,
    health: 1,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "ghoul",
    rank: 0,
    type: 0,
    damage: 4,
    health: 2,
    speed: 2,
    image: null,
    link: null
  },
  {
    name: "doot",
    rank: 0,
    type: 0,
    damage: 0,
    health: 1,
    speed: 8,
    image: null,
    link: null
  },
  {
    name: "he",
    rank: 0,
    type: 1,
    damage: 5,
    health: 5,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "she",
    rank: 0,
    type: 1,
    damage: 5,
    health: 5,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "they",
    rank: 0,
    type: 1,
    damage: 5,
    health: 5,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "handgun",
    rank: 0,
    type: 2,
    damage: 3,
    health: 0,
    speed: 3,
    image: null,
    link: null
  },
  {
    name: "food",
    rank: 0,
    type: 2,
    damage: 0,
    health: 3,
    speed: 10,
    image: null,
    link: null
  },
  {
    name: "knife",
    rank: 0,
    type: 2,
    damage: 4,
    health: 0,
    speed: 6,
    image: null,
    link: null
  },
  {
    name: "chaser",
    rank: 1,
    type: 0,
    damage: 4,
    health: 4,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "meatshield",
    rank: 1,
    type: 0,
    damage: 2,
    health: 7,
    speed: 2,
    image: null,
    link: null
  },
  {
    name: "speedster",
    rank: 1,
    type: 0,
    damage: 2,
    health: 2,
    speed: 8,
    image: null,
    link: null
  },
  {
    name: "hunter",
    rank: 1,
    type: 0,
    damage: 7,
    health: 1,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "soldier",
    rank: 1,
    type: 1,
    damage: 4,
    health: 4,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "maiden",
    rank: 1,
    type: 1,
    damage: 4,
    health: 4,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "bot",
    rank: 1,
    type: 1,
    damage: 4,
    health: 4,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "shotgun",
    rank: 1,
    type: 2,
    damage: 6,
    health: 0,
    speed: 2,
    image: null,
    link: null
  },
  {
    name: "smg",
    rank: 1,
    type: 2,
    damage: 1,
    health: 0,
    speed: 6,
    image: null,
    link: null
  },
  {
    name: "healthkit",
    rank: 1,
    type: 2,
    damage: 0,
    health: 4,
    speed: 10,
    image: null,
    link: null
  },
  {
    name: "beef",
    rank: 2,
    type: 0,
    damage: 5,
    health: 5,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "wall",
    rank: 2,
    type: 0,
    damage: 3,
    health: 9,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "flash",
    rank: 2,
    type: 0,
    damage: 3,
    health: 3,
    speed: 9,
    image: null,
    link: null
  },
  {
    name: "jumper",
    rank: 2,
    type: 0,
    damage: 8,
    health: 1,
    speed: 6,
    image: null,
    link: null
  },
  {
    name: "smoke",
    rank: 2,
    type: 1,
    damage: 6,
    health: 4,
    speed: 6,
    image: null,
    link: null
  },
  {
    name: "tango",
    rank: 2,
    type: 1,
    damage: 3,
    health: 5,
    speed: 7,
    image: null,
    link: null
  },
  {
    name: "droid",
    rank: 2,
    type: 1,
    damage: 5,
    health: 6,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "assaultrifle",
    rank: 2,
    type: 2,
    damage: 5,
    health: 0,
    speed: 4,
    image: null,
    link: null
  },
  {
    name: "twingun",
    rank: 2,
    type: 2,
    damage: 6,
    health: 0,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "punch",
    rank: 2,
    type: 2,
    damage: 8,
    health: 0,
    speed: 3,
    image: null,
    link: null
  },
  {
    name: "shield",
    rank: 2,
    type: 2,
    damage: 0,
    health: 0,
    speed: 10,
    image: null,
    link: null
  },
  {
    name: "vampyr",
    rank: 3,
    type: 0,
    damage: 6,
    health: 6,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "kong",
    rank: 3,
    type: 0,
    damage: 8,
    health: 8,
    speed: 2,
    image: null,
    link: null
  },
  {
    name: "phantom",
    rank: 3,
    type: 0,
    damage: 3,
    health: 1,
    speed: 6,
    image: null,
    link: null
  },
  {
    name: "diver",
    rank: 3,
    type: 1,
    damage: 6,
    health: 4,
    speed: 9,
    image: null,
    link: null
  },
  {
    name: "neon",
    rank: 3,
    type: 1,
    damage: 4,
    health: 7,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "sniper",
    rank: 3,
    type: 2,
    damage: 9,
    health: 0,
    speed: 2,
    image: null,
    link: null
  },
  {
    name: "rpg",
    rank: 3,
    type: 2,
    damage: 8,
    health: 0,
    speed: 1,
    image: null,
    link: null
  },
  {
    name: "exosuit",
    rank: 3,
    type: 2,
    damage: 10,
    health: 10,
    speed: 10,
    image: null,
    link: null
  },
  {
    name: "chaoslord",
    rank: 4,
    type: 0,
    damage: 8,
    health: 8,
    speed: 8,
    image: null,
    link: null
  },
  {
    name: "warlady",
    rank: 4,
    type: 0,
    damage: 10,
    health: 7,
    speed: 7,
    image: null,
    link: null
  },
  {
    name: "gambit",
    rank: 4,
    type: 1,
    damage: 1,
    health: 1,
    speed: 10,
    image: null,
    link: null
  },
  {
    name: "slayer",
    rank: 4,
    type: 2,
    damage: 10,
    health: 0,
    speed: 5,
    image: null,
    link: null
  },
  {
    name: "immunity",
    rank: 4,
    type: 2,
    damage: 0,
    health: 0,
    speed: 8,
    image: null,
    link: null
  },
  {
    name: "ascensionlord",
    rank: 5,
    type: 0,
    damage: 10,
    health: 10,
    speed: 10,
    image: null,
    link: null
  },
  {
    name: "stareater",
    rank: 5,
    type: 0,
    damage: 1,
    health: 0,
    speed: 10,
    image: null,
    link: null
  },
  {
    name: "jazz",
    rank: 5,
    type: 0,
    damage: 0,
    health: 0,
    speed: 10,
    image: null,
    link: null
  }
];

//Make some information
function Info(name, type, damage, health, speed) {
  name = name.toUpperCase();
  var class_1;
  switch (type) {
    case 0:
      class_1 = "image_square";
      break;
    case 1:
      class_1 = "image_circle";
      break;
    case 2:
      class_1 = "image_rec";
      break;
  }
  return (
    <div>
      <div className={class_1}>{name}</div>
      <div className="values">Damage: {damage}</div>
      <div className="values">Health: {health}</div>
      <div className="values">Speed: {speed}</div>
    </div>
  );
}

//Make some widgets

function Widget(name, rank, type, damage, health, speed) {
  var class_2;
  switch (rank) {
    case 0:
      class_2 = "5px solid white";
      break;
    case 1:
      class_2 = "5px solid black";
      break;
    case 2:
      class_2 = "5px solid green";
      break;
    case 3:
      class_2 = "5px solid blue";
      break;
    case 4:
      class_2 = "5px solid blueviolet";
      break;
    case 5:
      class_2 = "5px solid goldenrod";
      break;
  }
  return (
    <div className="square" style={{ border: class_2 }}>
      {Info(name, type, damage, health, speed)}
    </div>
  );
}

// Make some tabs (need to add a for loop)

function WebTab() {
  const items = [];
  for (var i in Data)
    items.push(
      Widget(
        Data[i].name,
        Data[i].rank,
        Data[i].type,
        Data[i].damage,
        Data[i].health,
        Data[i].speed
      )
    );
  return (
    <Tabs>
      <TabList>
        <Tab>Play</Tab>
        <Tab>Compendium</Tab>
        <Tab>About</Tab>
      </TabList>

      <TabPanel>
        <h2>Here goes the game, a link to the game or an iframe</h2>
      </TabPanel>
      <TabPanel>
        <h5>
          Here are some of the enemies, allies and weapons you will encounter.
        </h5>
        {items}
      </TabPanel>
      <TabPanel>
        <h2>About</h2>
        <body>Who does not love a zombie shootin game?</body>
        <body>Welcome to the new era of zombie shooting survival game!</body>
        <body>
          Gear up, find friends and load your weapons because this will get
          ugly.
        </body>
        <h2>Credits</h2>
        <body>Nelson Wang: Game designer</body>
        <body>Federico Liu: Webpage designer</body>
        <body>Jeff Li: Graphic designer</body>
      </TabPanel>
    </Tabs>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>ZOVID-19</h1>
      <h4>Just Another Zombie Outbreak Survival Shooter</h4>
      <WebTab />
    </div>
  );
}

// Signed by FLYwithPEACE
