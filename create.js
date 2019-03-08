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
var enemyUsed = 1;
console.log("STARTING ENEMY HEALTH:", enemyHealth);
console.log("STARTING PLAYER HEALTH:", playerHealth);

//ATTACK

function attack() {
  if (used == 0 && victory == false) {
  console.log("normal attack");
  attackNum = Math.floor(Math.random() * 20) + 21;
  miss = Math.floor(Math.random()*100) + 1;
  if (miss <= 15) {
    console.log("MISS! LOSE A TURN!");
    document.getElementById("out").innerHTML = "MISS! LOSE YOUR TURN!";
    used = 1;
  setTimeout(enemyAttack, 2000);
  } else {
    if (attackNum > 39) {
      console.log("CRITICAL DAMAGE!");
      document.getElementById("out").innerHTML = "CRITICAL DAMAGE! DAMAGE DEALT:" + attackNum;

      attackNum = 70;
    }
    enemyHealth = enemyHealth - attackNum;
    console.log("ENEMY HEALTH REMAINING", enemyHealth, "DAMAGE DEALT", attackNum);
    document.getElementById("out").innerHTML= "HIT! DAMAGE DEALT:" + attackNum;
    document.getElementById("enemyinfo").innerHTML= "Enemy Health:" + enemyHealth;
      if (enemyHealth <= 0) {
        win();
      } else {
        used = 1;
      setTimeout(enemyAttack, 2000);
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
        document.getElementById("out").innerHTML= "SPECIAL ATTACK! DAMAGE DEALT:" + specialNum;
        document.getElementById("enemyinfo").innerHTML= "Enemy Health:" + enemyHealth;
        console.log("ENEMY HEALTH REMAINING:", enemyHealth, "SPECIAL DAMAGE DEALT:", specialNum);
        if (enemyHealth <= 0) {
          win();
        } else {
          specialVal = specialVal - 2;
          console.log("SPECIAL REMAINING:", specialVal);
          used = 1;
      setTimeout(enemyAttack, 2000);
        }
      } else {
        console.log("SPECIAL EMPTY")
        used = 1;
      setTimeout(enemyAttack, 2000);
      }
    }

}

//ITEM

function item() {
  if (used == 0 && victory == false) {
    if (potions > 0) {
      console.log("item");
      document.getElementById("out").innerHTML= "YOU USED POTION! +50 HEALTH!";
      if (playerHealth + 50 > 100) {
        playerHealth = 100
        potions = potions - 1;
        console.log("HEALH MAXED OUT", "POTIONS REMAINING:", potions)
        document.getElementById("out").innerHTML= "YOU USED POTION! HEALTH MAXED OUT";
      } else {
        playerHealth = playerHealth + 50;
      }
    } else {
      console.log("NOT ENOUGH POTIONS");
    }
    used = 1;
    setTimeout(enemyAttack, 2000);
  }
}

//ENEMY ATTACK

function enemyAttack() {
  miss = Math.floor(Math.random()*100) + 1;
  if (miss <= 15) {
    console.log("ENEMY MISSED!");
    enemyUsed = 0;
  } else {
    damVal = Math.floor(Math.random() * 10) + 10;
    playerHealth = playerHealth - damVal;
    enemyUsed = 0;
    console.log("ENEMY DAMAGE:", damVal, "HEALTH REMAINING:", playerHealth);
    if (playerHealth <= 0) {
      lose();
    }
  }
}

//OTHER

function win() {
  console.log("YOU WIN!");
  document.getElementById("out").innerHTML= "YOU WIN!";
  victory = true;
}

function lose() {
  console.log("YOU LOSE!");
  document.getElementById("out").innerHTML= "YOU LOSE!";
  victory = true;
}

function ok() {
  if (used == 1 && enemyUsed == 0) {
    used = 0;
    enemyUsed = 1;
    console.log("IT IS NOW YOUR TURN");
  }
}
