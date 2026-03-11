//Bài 1
function createCharacters(name, level, health) {
    const character = {
        name: name,
        level: level,
        health: health
    };
    return character;
}

const character01 = createCharacters('Ivan', 2, 500);
const character02 = createCharacters('Minh', 3, 800);
const character03 = createCharacters('An', 2, 600);
const character04 = createCharacters('Pro', 10, 1000);
const character05 = createCharacters('Baby', 15, 2000);

const characters = [character01, character02, character03, character04, character05];
const characterPowerup = characters.map(function (character) {
    return {
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    };
});

const possibleWinners = characters.filter(character => character.health > 1000);

console.log(possibleWinners);

//Bài 2
function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score);
    console.log(players);
    for (let i = 0; i < players.length; i++) {
        console.log(i);
        switch (i) {
            case 0:
                console.log(`🥇 ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
                break;
            case 1:
                console.log(`🥈 ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
                break;
            case 2:
                console.log(`🥉 ${i + 1}. ${players[i].name} - ${players[i].score} pts`);
                break;
            default:
                console.log(`${i + 1}. ${players[i].name} - ${players[i].score} pts`);
                break;
        }

    }
};
const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 }
];
console.log(players.length);

printLeaderboard(players);
