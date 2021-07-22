function random(min, max) {
	min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomDiceValue (type) {
    const setDice = {
        'D4': {value: random(1, 4)},
        'D6': {value: random(1, 6)},
        'D8': {value: random(1, 8)},
        'D10': {value: random(1, 10)},
        'D20': {value: random(1, 20)},
        'D100': {value: random(1, 100)},
    }	
	return setDice[type].value;
}
