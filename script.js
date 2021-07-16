// JAVASCRIPT

const superHeroes = [
  {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
  },
  {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
  },
  {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
  },
  {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
  },
  {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
  },
  {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
  },
  {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
  },
  {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
  },
  {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
  },
  {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
  },
  {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
  },
  {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
  },
  {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
  },
  {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
  },
  {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
  }
]

// 1 

const superPowerNames = superHeroes.map((item) => {
return item.name

});

console.log (superPowerNames);

// 2 

const superPowerlight = superHeroes.filter((item) => {
return item.weight < 1900

});

console.log(superPowerlight);

// 3

const superPower200 = superHeroes.filter((item) => {
  return item.weight == 200

});

console.log (superPower200)

// 4

const superPowerFirstComic = superHeroes.map((item) => {
  return item.first_appearance

});

console.log(superPowerFirstComic)

// 5  - Chaining van 2 array methods  !!!!

const DCComics     = superHeroes.filter(hero => hero.publisher === "DC Comics");
const marvelComics = superHeroes.filter(hero => hero.publisher === "Marvel Comics");

console.log("DC Comics:", DCComics);
console.log("Marvel:", marvelComics);


// 6 

const weight= DCComics.map (hero => { return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;  })
                                     .reduce((weight1, weight2) => weight1 + weight2);

console.log("Total weight", weight);



// 7


const weight2 = marvelComics.map(hero => { return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0; })
  .reduce((weight1, weight2) => weight1 + weight2);

console.log("Total weight", weight2);

// 8


?







