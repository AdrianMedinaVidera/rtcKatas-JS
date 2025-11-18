const showSum = (a = 10, b = 5) => {
    console.log(a + b);
}

showSum();
showSum(4);
showSum(6, 0);

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;
console.log(`${title} ${gender} ${year}`);

const fruits = ["Banana", "Strawberry", "Orange"];
const [fruit1, fruit2, fruit3] = fruits;
console.log(`${fruit1} ${fruit2} ${fruit3}`);

const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name: nameAnimal, race } = animalFunction();
console.log(`${nameAnimal} ${race}`);

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };
const { name, itv } = car;
const [year1, year2, year3] = itv;
console.log(`${name} ${itv} ${year1} ${year2} ${year3}`);

const pointsList = [32, 54, 21, 64, 75, 43];
const copy = [...pointsList];
console.log(copy);

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};
console.log(copyToy);

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];
const mixList = [...pointsList2, ...pointsList3];
console.log(mixList);

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mixToys = {...toy2, ...toyUpdate};
console.log(mixToys);

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copyColors = [...colors];
copyColors.splice(2, 1);
console.log(copyColors);

let users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map((user) => user.name);
console.log(names);

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names2 = users2.map((user) => {
    if (user.name[0] === "A") return "Anacleto";
    return user.name;
});
console.log(names2);

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesList = cities.map((city) => city.isVisited ? city.name + " (Visitado)" : city.name);
console.log(citiesList);

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const filtered = ages.filter((age) => age > 18);
console.log(filtered);

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let filtered2 = ages2.filter((age) => age % 2 === 0);
console.log(filtered2);

let streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

filtered2 = streamers.filter((streamer) => streamer.gameMorePlayed === "League of Legends");
console.log(filtered2);

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filtered3 = streamers2.filter((streamer) => streamer.name.includes("u"));
console.log(filtered3);

const filtered4 = streamers.filter((streamer) => {
    if (streamer.gameMorePlayed.includes("Legends")) {
        if (streamer.age > 35) streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
        return true;
    }
});
console.log(filtered4);

streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filter = (e) => {
    const filtered = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(e.target.value)
    );
    console.log(filtered);
}

const input = document.querySelector("input");
input.addEventListener("input", filter);

const numbers = [32, 21, 63, 95, 100, 67, 43];
console.log(numbers.find((number) => number === 100));

let movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

console.log(movies.find((movie) => movie.date === 2010));

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  { name: "Porompompero", description: "Hace que el alien pueda adquirir la habilidad de tocar el tambor" },
  { name: "Fly me to the moon", description: "Permite volar, solo y exclusivamente a la luna" },
  { name: "Andando que es gerundio", description: "Invoca a un señor mayor como Personal Trainer" },
];

const alien = {
  ...aliens.find((alien) => alien.name === "Cucushumushu"),
  mutation: { ...mutations.find((mutation) => mutation.name === "Porompompero") },
};

console.log(alien);

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(totalScore);

const totalScoreApproved = exams.reduce((acc, exam) => exam.score >= 5 ? acc + exam.score : acc, 0);
console.log(totalScoreApproved);

const averageScore = totalScore / exams.length;
console.log(averageScore);

const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  { name: "Legend of Zelda: Breath of the wild", genders: ["RPG"], score: 10 },
];

const rpgGames = videogames.filter((game) => game.genders.includes("RPG"));
let totalRpg = rpgGames.reduce((acc, game) => acc + game.score, 0);
let avgRpg = totalRpg / rpgGames.length;
console.log("La media de los puntajes de los videojuegos RPG es:", avgRpg);

movies = [
  { title: "Bracula: Condemor II", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spider-Man: No Way Home", duration: 122, categories: ["aventura", "acción"] },
  { title: "The Voices", duration: 223, categories: ["comedia", "thriller"] },
  { title: "Shrek", duration: 111, categories: ["comedia", "aventura", "animación"] },
];

const uniqueCategories = [];

for (const movie of movies) {
  for (const category of movie.categories) {
    if (!uniqueCategories.includes(category)) uniqueCategories.push(category);
  }
}

console.log('Array de categorías sin repetir:', uniqueCategories);

users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalVolume = 0;
let soundCount = 0;

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume;
    soundCount++;
  }
}

const averageVolume = totalVolume / soundCount;
console.log(averageVolume);

const soundCountObj = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    soundCountObj[sound] = (soundCountObj[sound] || 0) + 1;
  }
}

console.log('Conteo de sonidos favoritos por usuarios:', soundCountObj);

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

const findArrayIndex = (array, text) => array.indexOf(text);

console.log(findArrayIndex(mainCharacters, "Chewbacca"));
console.log(findArrayIndex(mainCharacters, "Darth Vader"));

const removeItem = (array, text) => {
  const index = findArrayIndex(array, text);
  if (index !== -1) array.splice(index, 1);
  return array;
};

console.log(removeItem(mainCharacters, "Chewbacca"));
console.log(removeItem(mainCharacters, "Darth Vader"));

const rollDice = (numFaces) => Math.floor(Math.random() * numFaces) + 1;

const numFaces = 6;
const result = rollDice(numFaces);
console.log(`Has lanzado un dado de ${numFaces} caras y obtuviste un ${result}.`);

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

const swappedFantasticFour = swap(fantasticFour, 1, 2);
console.log(swappedFantasticFour);