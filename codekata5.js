function* extractNumber(attemps) {
    for (let i = 0; i < attemps; i++) {
        yield Math.floor(Math.random() * 91);
    }
}

let cpu = 0;
let player = 0;

// Tiradas de la CPU
let cpuGenerator = extractNumber(2);
cpu += cpuGenerator.next().value;
cpu += cpuGenerator.next().value;

// Tiradas del Jugador
let playerGenerator = extractNumber(2);
player += playerGenerator.next().value;
player += playerGenerator.next().value;

console.log("CPU: " + cpu);
console.log("PLAYER: " + player);
console.log((cpu > player) ? "CPU WIN" : "PLAYER WIN");