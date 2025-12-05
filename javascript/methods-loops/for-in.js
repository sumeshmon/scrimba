const character = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

for (let property in character) {
    console.log(property)
    console.log(character[property]);
    
}