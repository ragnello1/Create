var playerHealth = 100;
var startEnemyHealth = Math.floor(Math.random() * 200) + 400;
var enemyHealth = startEnemyHealth;
var specialVal = 10;
var attackNum;
var specialNum;
var damVal;
var potions = 5;
var used = 0;
var victory = false;
var miss;
console.log("STARTING ENEMY HEALTH:", enemyHealth);
console.log("STARTING PLAYER HEALTH:", playerHealth);

//ATTACK

function attack() {
  if (used == 0 && victory == false) {
  console.log("normal attack");
  attackNum = Math.floor(Math.random() * 20) + 21;
  miss = Math.floor(Math.random()*100) + 1;
  console.log(miss);
  if (miss <= 15) {
    console.log("MISS! LOSE A TURN!");
    used = 1;
    enemyAttack();
  } else {
    if (attackNum > 39) {
      console.log("CRITICAL DAMAGE!");
      attackNum = 70;
    }
    enemyHealth = enemyHealth - attackNum;
    console.log("ENEMY HEALTH REMAINING", enemyHealth, "DAMAGE DEALT", attackNum);
      if (enemyHealth <= 0) {
        win();
      } else {
        used = 1;
        enemyAttack();
      }
    }
  }
}

//SPECIAL

function special() {
  if (used == 0 && victory == false) {
    if (specialVal > 1) {
        console.log("special attack");
        specialNum = Math.floor(Math.random() * 20) + 80;
        enemyHealth = enemyHealth - specialNum;
        console.log("ENEMY HEALTH REMAINING:", enemyHealth, "SPECIAL DAMAGE DEALT:", specialNum);
        if (enemyHealth <= 0) {
          win();
        } else {
          specialVal = specialVal - 2;
          console.log("SPECIAL REMAINING:", specialVal);
          used = 1;
          enemyAttack();
        }
      } else {
        console.log("SPECIAL EMPTY")
        used = 1;
        enemyAttack();
      }
    }

}

//ITEM

function item() {
  if (used == 0 && victory == false) {
    if (potions > 0) {
      console.log("item");
      if (playerHealth + 50 > 100) {
        playerHealth = 100
        potions = potions - 1;
        console.log("HEALH MAXED OUT", "POTIONS REMAINING:", potions)
      } else {
        playerHealth = playerHealth + 50;
      }
    } else {
      console.log("NOT ENOUGH POTIONS");
    }
    used = 1;
    enemyAttack();
  }
}

//ENEMY ATTACK

function enemyAttack() {
  miss = Math.floor(Math.random()*100) + 1;
  console.log(miss);
  if (miss <= 15) {
    console.log("ENEMY MISSED!");
  } else {
    damVal = Math.floor(Math.random() * 10) + 10;
    playerHealth = playerHealth - damVal;
    console.log("ENEMY DAMAGE:", damVal, "HEALTH REMAINING:", playerHealth);
    if (playerHealth <= 0) {
      lose();
    }
  }
}

//OTHER

function win() {
  console.log("YOU WIN!");
  victory = true;
}

function lose() {
  console.log("YOU LOSE!");
  victory = true;
}

function ok() {
  if (used == 1) {
    used = 0;
    console.log("IT IS NOW YOUR TURN");
  }
}
