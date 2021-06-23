const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: () => {
      const damageMage = Math.random()* (2*mage.intelligence - mage.intelligence) + mage.intelligence;
      mage.mana -= 15;
      return {damage: damageMage, mana: mage.mana};
    },
};
  
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => {
    return Math.random()* ((warrior.strength*warrior.weaponDmg) - warrior.strength) + warrior.strength;
  },
};
  
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: () => {
    return Math.random()* (dragon.strength - 15) + 15;
  },
};
  
  const battleMembers = { mage, warrior, dragon };

  console.log(mage.damage());

