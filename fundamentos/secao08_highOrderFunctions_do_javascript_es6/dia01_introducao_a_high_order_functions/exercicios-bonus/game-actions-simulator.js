const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => {
  const dmgMin = 15;
  const dmgMax = Math.floor(Math.random() * (dragon.strength - dmgMin));
  const finalDmg = dmgMax > dmgMin ? dmgMax : dmgMin;
  return finalDmg;
}

const warriorDamage = (warrior) => { 
  const dmgMin = warrior.strength;
  const dmgMax = Math.floor(Math.random() * (dmgMin * warrior.weaponDmg));
  const finalDmg = dmgMax > dmgMin ? dmgMax : dmgMin;
  return finalDmg;
}

const mageDamage = (mage) => {
  if (mage.mana < 15){
    return 'Não possui mana suficiente'; 
  }
  const dmgMin = mage.intelligence;
  const dmgMax = Math.floor(Math.random() * (dmgMin * 2));
  const finalDmg = dmgMax > dmgMin ? dmgMax : dmgMin;
}

console.log(dragonDamage(dragon));
console.log(warriorDamage(warrior));
console.log(mageDamage(mage));